export default {
  // 填入你的session token
  OPENAI_API_KEY:
    'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6Ik1UaEVOVUpHTkVNMVFURTRNMEZCTWpkQ05UZzVNRFUxUlRVd1FVSkRNRU13UmtGRVFrRXpSZyJ9.eyJodHRwczovL2FwaS5vcGVuYWkuY29tL3Byb2ZpbGUiOnsiZW1haWwiOiJ4aWVodWkwOTAyQGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJnZW9pcF9jb3VudHJ5IjoiVVMifSwiaHR0cHM6Ly9hcGkub3BlbmFpLmNvbS9hdXRoIjp7InVzZXJfaWQiOiJ1c2VyLUVncW51NjJLempGWFM3cmdFMWhYZ005ZiJ9LCJpc3MiOiJodHRwczovL2F1dGgwLm9wZW5haS5jb20vIiwic3ViIjoiZ29vZ2xlLW9hdXRoMnwxMTI2MTExMzQ3OTc1MzM2NzM0MjQiLCJhdWQiOlsiaHR0cHM6Ly9hcGkub3BlbmFpLmNvbS92MSIsImh0dHBzOi8vb3BlbmFpLm9wZW5haS5hdXRoMGFwcC5jb20vdXNlcmluZm8iXSwiaWF0IjoxNjc1NzU0MzgwLCJleHAiOjE2NzYzNTkxODAsImF6cCI6IlRkSkljYmUxNldvVEh0Tjk1bnl5d2g1RTR5T282SXRHIiwic2NvcGUiOiJvcGVuaWQgcHJvZmlsZSBlbWFpbCBtb2RlbC5yZWFkIG1vZGVsLnJlcXVlc3Qgb3JnYW5pemF0aW9uLnJlYWQgb2ZmbGluZV9hY2Nlc3MifQ.R5HcE-tO-nLHXaDlkKugfoJfqZeknZlDfvy5YfyOSMLTNhvVDkWMWldmxqe3obbGBLJxvy8Igl9-twpl4tHwol85dabgxACLkANbzHf78ijGH88lgRennEyZK3IPmDVEBChFrbSrObfnI0oSqWHlA4CNDuOm1IrDjEJqVABMYNJLSGXVL4EG7_qlII_LExnSeU41NQjr3u1QhpnwDM-4ZzAGpawWj4_06ItcEwYtsUR5DsaOSIctYVPm2i42-wu9QcKEDOe06_tJNx2D4UlJ4p5nFwohIorb1kHPB0ju0y3V2_WPXuzMOIF0el7mc9_WfVvjeBh6oqZG4oAaMvkahQ',
  // 设置获取消息的重试次数
  retryTimes: 3,
  // 在群组中设置唤醒微信机器人的关键词
  groupKey: '',
  // 在私聊中设置唤醒微信机器人的关键词
  privateKey: '',
  // 重置上下文的关键词，如可设置为reset
  resetKey: 'reset',
  // 开启会后收到ChatGPT的自动回复
  autoReply: true,
  // 开启GPT
  startKey: 'start',
  // 关闭GPT
  endKey: 'end',
  // 根据正则匹配是否自动通过好友验证
  friendShipRule: /chatgpt|chat/,
  // 是否在群聊中按照回复的格式进行回复
  groupReplyMode: true,
  // 是否在私聊中按照回复的格式进行回复
  privateReplyMode: true,
};
