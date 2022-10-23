function getNowFormatDay(nowDate) {
    var char = "-";
    if (nowDate == null) {
        nowDate = new Date();
    }
    var day = nowDate.getDate();
    var month = nowDate.getMonth() + 1;//注意月份需要+1
    var year = nowDate.getFullYear();
    //补全0，并拼接
    return year + char + completeDate(month) + char + completeDate(day);
}

/** @description 获取当前时间，格式YYYY-MM-DD HH:mm:ss */
function getNowFormatTime(): string {
    var nowDate = new Date();
    var colon = ":";
    var h = nowDate.getHours();
    var m = nowDate.getMinutes();
    var s = nowDate.getSeconds();
    //补全0，并拼接
    return getNowFormatDay(nowDate) + " " + completeDate(h) + colon + completeDate(m) + colon + completeDate(s);
}

//补全0
function completeDate(value) {
    return value < 10 ? "0" + value : value;
}

const getDiffer = (date1: Date, date2: Date): number => {
    return Math.abs(date1.getTime() - date2.getTime());
};

export {getNowFormatDay, getNowFormatTime, getDiffer};