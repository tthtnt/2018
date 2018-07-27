/**
 * 获取指定格式的时间
 * @param dt 日期的对象
 * @returns {string} 返回的是字符串的日期时间
 */
function getDate() {
    var dt = new Date();
    // 获取年
    var year = dt.getFullYear();
    // 获取月
    var month = dt.getMonth() + 1;
    // 获取日
    var day = dt.getDate();

    month = month < 10 ? "0" + month : month;
    day = day < 10 ? "0" + day : day;
    return year+"年"+month+"月"+day+"日";
}