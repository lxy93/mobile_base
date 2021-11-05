const isAndroid = function(){
    /**
    * 判断是否为安卓
    */
    var u = navigator.userAgent.toLowerCase();
    var isAndroid = u.indexOf('android') > -1 || u.indexOf('adr') > -1;//android终端
    return isAndroid;  
}
const isIPhone = function(){
    /**
    * 判断是否为ios
    */
    var u = navigator.userAgent.toLowerCase();
    var isIOS = u.indexOf('iphone') > -1; //ios终端
    return isIOS;
};
const getQueryString = function(name){
    /**
    * 获取地址字段
    */
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return decodeURI(r[2]); return null;
}

export default {isAndroid,isIPhone,getQueryString}