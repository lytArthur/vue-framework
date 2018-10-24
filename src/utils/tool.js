
/**
    * 让时间戳按照指定的日期格式显示的方法
    * @author wanggang
    * @param  { String } 格式字符串
    * @return { String } 返回生成的日期时间字符串
    * @example
    * let d       = +new Date();
    * let pattern = "YYYY-MM-DD";
    * return formatDate(d, pattern);
    *
    *
    *
    */
   export function formatDate(timestamp,pattern) {
    /*
    * eg:pattern="YYYY-MM-DD hh:mm:ss";
    * 
    */
    var d  = new Date(timestamp);
    var o = {
        "W+" : d.getDay() == 0 ? 7 : d.getDay(),       //week
        "M+" : d.getMonth() + 1,                       //month
        "D+" : d.getDate(),                            //day
        "d+" : d.getDate(),                            //day
        "h+" : d.getHours(),                           //hour
        "m+" : d.getMinutes(),                         //minute
        "s+" : d.getSeconds(),                         //second
        "q+" : Math.floor((d.getMonth() + 3) / 3),     //quarter
        "S"  : d.getMilliseconds(),                    //millisecond
        "f+" : d.getMilliseconds()
    }

    if (/(Y+)/.test(pattern) || /(y+)/.test(pattern)) {
        pattern = pattern.replace(RegExp.$1, (d.getFullYear() + "").substr(4 - RegExp.$1.length));
    }

    for (var k in o) {
        if (new RegExp("(" + k + ")").test(pattern)) {
            pattern = pattern.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length));
        }
    }
    return pattern;
}

/** 
    * 获取url的参数
    * @param  { string }  name
    * @return { String }  返回取到后的值
    */
export function getUrlParam(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return unescape(r[2]); return "";
}

/**
    * 生成随机数的方法
    * @param  { Number } min 生成随机数的最小值
    * @param  { Number } max 生成随机数的最大值
    * @return { Number } 返回生成的随机数
    */

export function getRandom() {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

/*** 返回字节数 ***/
export function byteLength(value) {
    return value.replace(/[^\x00-\xff]/g, "**").length;
}

/*** 检查是否包含汉字 ***/
export function isInChinese(value) {
    return (value.length != value.replace(/[^\x00-\xff]/g, "**").length);
}

/*** 判断是否为数字 ***/
export function isNumber(s) {
    return /^[0-9]*$/.test(s);
}

/*** JS对货币格式化函数 ***/
export function CurrencyFilter(num) {
    return (+num || 0).toString().replace(/^-?\d+/g, m => m.replace(/(?=(?!\b)(\d{3})+$)/g, ','))
    //return (123456789).toLocaleString('en-US')  // 1,234,567,890
}
