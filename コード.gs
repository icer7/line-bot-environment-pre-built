function doPost(e) {
  var webhookData = JSON.parse(e.postData.contents).events[0];
  var message, replyToken, replyText, userId;
  message = webhookData.message.text;
  replyToken = webhookData.replyToken;
  switch (message) {
    case '使い方':
      replyText = '任意の言葉';
      break;
    case 'キャンセル':
      replyText = '任意の言葉';
      break;
    case '確認':
      replyText = '任意の言葉';
      break;
    default:
      replyText = '任意の言葉';
      break;
  }
  return sendLineMessageFromReplyToken(replyToken, replyText);
}
