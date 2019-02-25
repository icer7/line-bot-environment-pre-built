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
     if (todoDate) {
       replyText = '任意の言葉';
     } else {
       replyText = '任意の言葉';
     }
     break;
   default:
     if (todoDate) {
       replyText = '任意の言葉';
     } else if (todo) {
       replyText = setDate(userDataRow, message);
     }
     else {
       replyText = setTodo(userDataRow, message);
     }
 }
 return sendLineMessageFromReplyToken(replyToken, replyText);
}
