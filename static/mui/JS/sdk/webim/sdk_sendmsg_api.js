function sdkApi(req,data) {
      var cmdName = req.cmdName;
      var adminSign = req.adminSign;
      var serviceName = req.serviceName;
      var adminIdentifier = "admin";
      var sdkappid="1400053640";
      $.ajax({
        url: 'https://console.tim.qq.com/v4/'+serviceName+'/'+cmdName+'?usersig='+adminSign+'&apn=1&identifier='+adminIdentifier+'&sdkappid='+sdkappid+'&contenttype=json',
        data: JSON.stringify(data),
        type: 'POST',
        success: function (data) {
          var ret = jQuery.parseJSON(data);
          console.log('sendMsg**Success'+JSON.stringify(ret))
        },
        error : function (xhr, status, error) {
          console.log('sendMsg**Error: ' + error.message);
        },
      });
    }
    function sendMsg(to_account,msgbody) {
      var apireq = {};
      apireq.cmdName = "sendmsg";
      apireq.adminSign=localStorage.getItem("adminSig");
      apireq.serviceName = "openim";
      var from_account = localStorage.getItem("userID");
      var cmdName = "sendmsg";
      var msgRandom = parseInt(999999*Math.random());
      var data = {
      	SyncOtherMachine: 1, 
        To_Account:to_account,
      	From_Account: from_account,
        MsgRandom: msgRandom,
        MsgBody: [
          msgbody
        ]
      }
      sdkApi(apireq,data);
    }
//  function tryapi() {
//    var msgbody = {
//      "MsgType": "TIMTextElem",
//      "MsgContent": {
//        "Text": "hello world"
//      }};
//    to_account = "xiaoming";
//    sendMsg(to_account,msgbody);
//  }