template.defaults.imports.formatString = function(typestr, type) {

	if(type == 'notification') {
		if(typestr == 'order') {
			return '../images/ddxx.png'
		} else {
			return '../images/xtxx.png'
		}
	} else if(type == 'datestr') {
		var datetime = moment(typestr).format('YYYY-MM-DD HH:mm:ss');
		return datetime;
	} else if(type == 'condition') {
		if(typestr) {
			return typestr;
		} else {
			return '无'
		}

	} else {
		return typestr;
	}

}

template.defaults.imports.formatDate = function(datastr) {
	var datetime = moment(datastr).format('YYYY-MM-DD HH:mm:ss');
	return datetime;
}

template.defaults.imports.formatDateEndDate = function(datastr) {
	var datetime = moment(datastr).format('YYYY-MM-DD');
	return datetime;
}

template.defaults.imports.formatIntervalStart = function(datastr) {
	var datetime = moment(datastr).format('YYYY-MM-DD HH:mm');
	return datetime;
}

template.defaults.imports.formatIntervalEnd = function(datastr) {
	var datetime = moment(datastr).format('HH:mm');
	return datetime;
}

template.defaults.imports.formatDangqianTime = function(datastr) {
	var dateddd=new Date();
	var datetime = moment(dateddd).format('YYYY-MM-DD HH:mm:ss');
//	alert(datatime);
	return datetime;
}
template.defaults.imports.formatHttpString = function(str) {

	if(str==""){
		str="../images/wode/txmrt.png";
		return str;
	}
	if(str.indexOf("client") < 0){
		str="../images/wode/txmrt.png";
		return str;
	}
	if(str != null && str != '' && (str.indexOf("client\\") == 0)) {
		return serverAddress + '/' + str.replace('client', '').replace(/\\/g, "\\");
		
	}
	if(str != null && str != '' && (str.indexOf("client/") == 0)) {
		return serverAddress + '/' + str.replace('client', '').replace(/\\/g, "/");
	}
	
}

template.defaults.imports.formatHttpString2 = function(str) {
	return serverAddress+str;
}

template.defaults.imports.formatDistance = function(distance) {
	return(distance / 1000).toFixed(2);
}
template.defaults.imports.formatJE = function(jiage) {
	return(jiage / 100).toFixed(2);
}
template.defaults.imports.formatStringLan = function(str, lan) {

	if($.getLength(str) > lan) {
		return $.cutstr(str, lan);
	} else {
		return str;
	}

}
template.defaults.imports.TYPEbijiao = function(str) {
	if(str == "unconfirm") {
		return true;
	} else
		return false;
}

template.defaults.imports.formatMsgStyle = function(id, msgFlag, datestr, createdOn) {
	if(moment(createdOn) < moment(datestr, "YYYY-MM-DD HH:mm:ss")) {
		return 'display: none;'
	}
	if(msgFlag && msgFlag[id]) {
		return 'display: none;'
	}
}
template.defaults.imports.formatMediaBody = function(id, msgFlag, datestr, createdOn) {

	if(moment(createdOn) < moment(datestr, "YYYY-MM-DD HH:mm:ss")) {
		return 'read-color'
	}
	if(msgFlag && msgFlag[id]) {
		return 'display:none;';
	}
}
//钱数乘以次数
template.defaults.imports.formatFloat = function(datestr, time) {
	return parseFloat(datestr) * parseFloat(time);
}
//求合计
template.defaults.imports.formatFloatHj = function(datestr, datestr2) {
	return parseFloat(datestr) + parseFloat(datestr2);
}

//求退款
template.defaults.imports.formatFloatTK = function(datestr, datestr2) {
	return (parseFloat(datestr)*(100-parseFloat(datestr2)))/(100*100);
}
template.defaults.imports.formatmiaosu = function(str) {
	if(str == "") {
		return "无"
	} else {
		return str;
	}
}
template.defaults.imports.ishushi = function(str) {
	switch(str) {
		case "nurse":
			str = "护士";
			break;
		case "doctor":
			str = "医生";
			break;
	}
	return str;
}
template.defaults.imports.isJSONkong = function(strJSON) {
	if(typeof strJSON == 'object' && strJSON ){
		return jQuery.isEmptyObject(strJSON);
	}
	else{
		return false;
	}
}
template.defaults.imports.tihuanPhone = function(str) {
	return(str.substring(0, 3) + "****" + str.substring(7, 11));
}
var templateRegister = {

	common: {
		id: 'common',
		src: '../template/notification/common.tl'
	},
	orderListALL: {
		id: 'orderListALL',
		src: '../template/order/order_list_all.tl',
		desc: '订单全部列表'
	},
	orderListWaitpay: {
		id: 'orderListWaitpay',
		src: '../template/order/order_list_waitpay.tl',
		desc: '订单待付款'
	},
	fdtmemberlistul: {
		id: 'fdtmemberlistul',
		src: '../template/familydoctor/fdt_member_list_ul.tl'
	},
	fdtbaseinfolistul: {
		id: 'fdtbaseinfolistul',
		src: '../template/familydoctor/fdt_baseinfo_list_ul.tl'
	},
	doctorRemindingHistory: {
		id: 'doctorRemindingHistory',
		src: '../template/familydoctor/doctor_reminding_history.tl',
		desc: '患者就诊记录'
	},
	myaccount_cost: {
		id: 'myaccount_cost',
		src: '../template/myaccount/myaccount_cost.tl',
		desc: '账户消费记录'
	},
	myaccount_list: {
		id: 'myaccount_list',
		src: '../template/myaccount/myaccount_list.tl',
		desc: '账户退款记录'
	},
	diagnosisBehaviorList: {
		id: 'diagnosisBehaviorList',
		src: '../template/familydoctor/diagnosis_behavior_list.tl',
		desc: '诊疗行为列表'
	},
	ordera: {
		id: 'ordera',
		src: '../template/order/order_list_xiangqing.tl',
		desc: '订单详情'
	},
	orderd:{
		id: 'orderd',
		src: '../template/order/order_list_xiangqing_orderid.tl',
		desc: '订单id'
	},
	orderb: {
		id: 'orderb',
		src: '../template/order/order_list_huishi_huli.tl',
		desc: '护理记录'
	},
	orderc: {
		id: 'orderc',
		src: '../template/order/order_list_button.tl',
		desc: '订单详情付款按钮'
	},
	healthness: {
		id: 'healthness',
		src: '../template/familydoctor/healthness_data_list.tl',
		desc: '健康数据列表'
	},
	homeposition: {
		id: 'homeposition',
		src: '../template/familydoctor/home_position.tl',
		desc: '健康数据列表'
	},
	doctorArticlesList: {
		id: 'doctorArticlesList',
		src: '../template/familydoctor/doctor_articles_list.tl',
		desc: '健康数据列表'
	},
	text_replay:{
		id: 'text_replay',
		src: '../template/text/text_replay.tl',
		desc: '获取文章回复列表'
	},
	fuyao_query:{
		id: 'fuyao_query',
		src: '../template/text/fuyao_query.tl',
		desc: '获取服药提醒列表'
	},
	illness_select:{
		id:"illness_select",
		src:'../template/order/order_illness.tl',
		desc:'下单疾病选择查询'
	},
	order_spares:{
		id:"order_spares",
		src:'../template/order/order_spares.tl',
		desc:'备品包查询'
	},
	articleList: {
		id: 'articleList',
		src: '../template/article/article_my_list.tl',
		desc: '服务列表'
	},
	articleAllList: {
		id: 'articleAllList',
		src: '../template/article/article_list.tl',
		desc: '服务列表'
	},

	articleDtlHeader: {
		id: 'articleDtlHeader',
		src: '../template/article/article_dtl_header.tl',
		desc: '服务列表'
	},
	articleDtlBody: {
		id: 'articleDtlBody',
		src: '../template/article/article_dtl_body.tl',
		desc: '服务列表'
	},
	articleDtlFooter: {
		id: 'articleDtlFooter',
		src: '../template/article/article_dtl_footer.tl',
		desc: '服务列表'
	},
	docLIST:{
		id:"docLIST",
		src:'../template/doctor/doc_list.tl',
		desc:'医护列表信息'
	},
	docMESSAGE:{
		id:"docMESSAGE",
		src:'../template/doctor/doc_message.tl',
		desc:'医护信息'
	},
	docSHUJV:{
		id:"docSHUJV",
		src:'../template/doctor/doc_shujv.tl',
		desc:'医护相关数据'
	},
	huadong_main:{
		id:"huadong_main",
		src:'../template/text/huadong_main.tl',
		desc:'首页公告栏'
	},
	lunbo_main:{
		id:"lunbo_main",
		src:'../template/text/lunbo_image.tl',
		desc:'首页轮播图'
	},
	kefu_question:{
		id:"kefu_question",
		src:'../template/text/kefu_question.tl',
		desc:'客服问题'
	},
	tuijian_item:{
		id:"tuijian_item",
		src:'../template/text/tuijian_item.tl',
		desc:'推荐项目展示'
	},
	online_answer_xiangqing:{
		id:"online_answer_xiangqing",
		src:'../template/order/online_answer_order_list_xiangqing.tl',
		desc:'在线问题解读详情'
	},
	online_answer_xiangqing_img:{
		id:"online_answer_xiangqing_img",
		src:'../template/order/online_answer_order_list_img.tl',
		desc:'在线问题解读图片展示'
	},
	online_answer_xiangqing_orderd:{
		id:"online_answer_xiangqing_orderd",
		src:'../template/order/online_answer_order_list_ordered.tl',
		desc:'护士抢单'
	},
	online_answer_xiangqing_doctor:{
		id:"online_answer_xiangqing_doctor",
		src:'../template/order/online_answer_order_doctor.tl',
		desc:'护士抢单'
	}
}