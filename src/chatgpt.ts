import { ChatGPTAPI } from 'chatgpt';
import config from './config.js';
import { retryRequest } from './utils.js';

let chatGPT: any = {};
let chatOption = {};
const contactDisabled = {};
export function initChatGPT() {
  chatGPT = new ChatGPTAPI({
    apiKey: config.OPENAI_API_KEY,
  });
}

const prefix = '\n';
async function getChatGPTReply(content, contactId) {
  const { conversationId, text, id } = await chatGPT.sendMessage(
    content,
    chatOption[contactId]
  );
  chatOption = {
    [contactId]: {
      conversationId,
      parentMessageId: id,
    },
  };
  console.log('response: ', conversationId, content, text);
  // response is a markdown-formatted string
  return text;
}

export async function replyMessage(contact, content) {
  const { id: contactId } = contact;
  const arr = content.split(prefix);
  content = arr?.length > 1 ? arr[1] : arr[0];
  if (contactDisabled[contactId] && config.startKey !== content) return;
  if (contactDisabled[contactId] && config.startKey === content) {
    contactDisabled[contactId] = false;
  }
  if (!contactDisabled[contactId] && config.endKey === content) {
    chatOption = {
      ...chatOption,
      [contactId]: {},
    };
    contactDisabled[contactId] = true;
    return;
  }
  try {
    if (
      content.trim().toLocaleLowerCase() === config.resetKey.toLocaleLowerCase()
    ) {
      chatOption = {
        ...chatOption,
        [contactId]: {},
      };
      await contact.say('Previous conversation has been reset.');
      return;
    }
    const message = await retryRequest(
      () => getChatGPTReply(content, contactId),
      config.retryTimes,
      500
    );

    if (
      (contact.topic && contact?.topic() && config.groupReplyMode) ||
      (!contact.topic && config.privateReplyMode)
    ) {
      const result = prefix + message;
      await contact.say(result);
      return;
    } else {
      await contact.say(message);
    }
  } catch (e: any) {
    console.error(e);
    if (e.message.includes('timed out')) {
      await contact.say(
        content +
          '\n-----------\nERROR: Please try again, ChatGPT timed out for waiting response.'
      );
    }
  }
}
