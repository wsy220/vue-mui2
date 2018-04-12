//服务器地址
//var serverAddress = "http://192.168.0.88:3000";
var serverAddress = "http://192.168.0.6:3000";
//var serverAddress = "http://pt.70jiahu.com";
//var serverAddress = "http://tpt.70jiahu.com";

//var serverAddress = "http://192.168.0.11:3000";

/**
 * 依赖MUI
 * @param {Object} url
 * @param {Object} dataType
 * @param {Object} data
 * @param {Object} sussess
 * @param {Object} error
 */

function commonHttpUtils(url, dataType, data, success, error, async) {
	var reqUrl = url;
	console.log(reqUrl);
	access_token = localStorage.getItem("TOKENMD5");
	var successDate;
	if(access_token) {
		successDate = function(resData) {
			//console.log("sssserror"+JSON.stringify(resData))
			if(resData.result == "error" && resData.msg == "TOKEN_ERROR") {
				mui.alert("登录过期，请重新登录");
				setTimeout(appRestart(), 2000);
			} else if(resData.result == "error" && resData.msg == "USER_NOT_EXIST") {
				mui.alert("登录过期，请重新登录");
				setTimeout(appRestart(), 2000);
			} else {
				success(resData)
			}
		};
	} else {
		successDate = success;
	}
	mui.ajax(reqUrl, {
		data: data,
		dataType: 'json', //服务器返回json格式数据
		type: dataType, //HTTP请求类型
		timeout: 30000, //超时时间设置为30秒；
		beforeSend: function() {
			plus.nativeUI.showWaiting();
		},
		complete: function() {
			plus.nativeUI.closeWaiting();
		},
		async: async,
		headers: {
			"Access-Control-Allow-Headers": "X-Requested-With",
			"x-access-token": access_token
		},
		beforeSend: function() {
			plus.nativeUI.showWaiting();
		},
		complete: function() {
			plus.nativeUI.closeWaiting();
		},
		//		success: success,
		success: successDate,
		error: function(xhr, type, errorThrown) {
			if(error) {
				error(xhr, type, errorThrown);
			}
		}
	});
}

function commonHttpUtils2(url, dataType, data, success, error, async) {
	var reqUrl = url;
	access_token = localStorage.getItem("TOKENMD5");
	mui.ajax(reqUrl, {
		data: data,
		dataType: 'json', //服务器返回json格式数据
		type: dataType, //HTTP请求类型
		timeout: 30000, //超时时间设置为30秒；
		async: async,
		headers: {
			"Access-Control-Allow-Headers": "X-Requested-With",
			"x-access-token": access_token
		},
		success: success,
		//		success: function(resData) {
		//			//console.log("sssserror"+JSON.stringify(resData))
		//			if(resData.result == "error" && resData.msg == "TOKEN_ERROR") {
		//				alert("登录过期，请重新登录");
		//				setTimeout(appRestart(), 2000);
		//			} else if(resData.result == "error" && resData.msg == "USER_NOT_EXIST") {
		//				alert("登录过期，请重新登录");
		//				setTimeout(appRestart(), 2000);
		//			} else {
		//				success(resData)
		//			}
		//		},
		error: error
	});
}

function commonHttpUtilsLUNBO(url, dataType, data, success, error, async,isxianshi) {
	var reqUrl = url;
	access_token = localStorage.getItem("TOKENMD5");
	mui.ajax(reqUrl, {
		data: data,
		dataType: 'json', //服务器返回json格式数据
		type: dataType, //HTTP请求类型
		timeout: 30000, //超时时间设置为30秒；
		async: async,
		headers: {
			"Access-Control-Allow-Headers": "X-Requested-With",
			"x-access-token": access_token
		},
		success: success,
		error: function(xhr, type, errorThrown) {
			if(error) {
				error(xhr, type, errorThrown);
			}
		}
	});
}

function commonHttpUtilsLOGOUT(url, dataType, data, success, error, async) {
	var reqUrl = url;
	access_token = localStorage.getItem("TOKENMD5");
	mui.ajax(reqUrl, {
		data: data,
		dataType: 'json', //服务器返回json格式数据
		type: dataType, //HTTP请求类型
		timeout: 30000, //超时时间设置为30秒；
		async: async,
		headers: {
			"Access-Control-Allow-Headers": "X-Requested-With",
			"x-access-token": access_token
		},
		success: success,
		error: error
	});
}

function commonHttpUtilsNoWaiting(url, httpReqType, data, success, errors, complete) {
	var reqUrl = url;
	var access_token = localStorage.getItem("TOKENMD5");
	console.log(reqUrl);
	mui.ajax(reqUrl, {
		data: data,
		dataType: 'json', //服务器返回json格式数据
		type: httpReqType, //HTTP请求类型
		timeout: 30000, //超时时间设置为180秒
		headers: {
			"Access-Control-Allow-Headers": "X-Requested-With",
			"x-access-token": access_token
		},
		//		complete: function() {
		//			if(complete) {
		//				complete();
		//			}
		//		},
		success: function(resData) {
			//console.log("sssserror"+JSON.stringify(resData))
			if(resData.result == "error" && resData.msg == "TOKEN_ERROR") {
				mui.alert("登录过期，请重新登录");
				setTimeout(appRestart(), 2000);
			} else if(resData.result == "error" && resData.msg == "USER_NOT_EXIST") {
				mui.alert("登录过期，请重新登录");
				setTimeout(appRestart(), 2000);
			} else {
				success(resData)
			}
		},
		error: function(xhr, type, errorThrown) {
			if(error) {
				error(xhr, type, errorThrown);
			}
		}
	});
}

/**
 * 通用错误处理
 * @param {Object} xhr
 * @param {Object} type
 * @param {Object} errorThrown
 */
var error = function(xhr, type, errorThrown, url) {
	console.log("error1 " + xhr.status);
	console.log("error2 " + xhr.readyState);
	console.log("error3 " + type);
	//异常处理；
	if(xhr.status != 500) {
		mui.toast('公共网络请求超时，请稍后再试！');
	}
//	if(!isxianshi) {
//		document.querySelector(".mui-content").innerHTML='<div class="mui-content-padded wutu"><img src="../images/no_data/1-01.png" style="width: 150px;"></div>';
//	}
}

formatHttpString = function(str) {
	if(str != null && str != '' && (str.indexOf("client\\") == 0)) {
		return serverAddress + '/' + str.replace('client', '').replace(/\\/g, "\\");
	}
	if(str != null && str != '' && (str.indexOf("client/") == 0)) {
		return serverAddress + '/' + str.replace('client', '').replace(/\\/g, "/");
	}

	if(str == "") {
		str = "../images/wode/txmrt.png";
		return str;
	}
	if(str.indexOf("client\\") < 0) {
		str = "../images/wode/txmrt.png";
		return str;
	}

}
formatHttpStringHc = function(str) {
	var reg = new RegExp("\n", "g");
	return str.replace(reg, '<br>');
}
formatHttpStringAT = function(str) {
	var reg = new RegExp("\n", "g");
	if(str.indexOf('\\')==-1){
		return str.replace("\\","");
	}
	else{
		return str.replace(reg, '<br>').replace(/\s/g, "&nbsp");
	}
}

function judgePlatform() {
	switch(plus.os.name) {
		case "Android":
			// Android平台: plus.android.*
			break;
		case "iOS":
			// iOS平台: plus.ios.*
			break;
		default:
			// 其它平台
			break;
	}
}

function appRestart() {
	localStorage.clear();
	plus.runtime.restart();
}


function JSONLength(obj) {
	var size = 0, key;
	for (key in obj) {
	if (obj.hasOwnProperty(key)) size++;
	}
	return size;
};