class Moment {
  /**
   *Creates an instance of Moment.
   * @param {*} [arg=Date.now()]
   * @memberof Moment
   */
  constructor(arg = Date.now()) {
    this.date = new Date(arg);
  }
  /**
   *
   * 时间格式化
   * 使用： new Moment().format("YYYY/MM/DD HH:mm:ss")
   * @param {string} formatStr 时间字符串模板
   * @returns
   * @memberof Moment
   */
  format(formatStr) {
    const date = this.date;
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const week = date.getDay();
    const hour = date.getHours();
    const minute = date.getMinutes();
    const second = date.getSeconds();

    return formatStr.replace(
      /Y{2,4}|M{1,2}|D{1,2}|d{1,4}|H{1,2}|m{1,2}|s{1,2}/g,
      (match) => {
        console.log(match);
        switch (match) {
          case "YY":
            return String(year).slice(-2);
          case "YYY":
          case "YYYY":
            return String(year);
          case "M":
            return String(month);
          case "MM":
            return String(month).padStart(2, "0");
          case "D":
            return String(day);
          case "DD":
            return String(day).padStart(2, "0");
          case "d":
            return String(week);
          case "dd":
            return weeks[week];
          case "ddd":
            return "周" + weeks[week];
          case "dddd":
            return "星期" + weeks[week];
          case "H":
            return String(hour);
          case "HH":
            return String(hour).padStart(2, "0");
          case "m":
            return String(minute);
          case "mm":
            return String(minute).padStart(2, "0");
          case "s":
            return String(second);
          case "ss":
            return String(second).padStart(2, "0");
          default:
            return match;
        }
      }
    );
  }
/**
 *  时间倒计时
 * @param {number} endTime 结束时间戳
 * @param {string} formatStr 时间字符串模板
 * @memberof Moment
 * 注意： 使用的时候如果省略了某些参数，则不能正确返回结果
 */
countDownParse(endTime,formatStr){
    let startTime = Date.now()
    if(String(endTime).length === 10){
        endTime = endTime * 1000
    }
    let timediff = Math.round((endTime - startTime) / 1000)
    console.log(timediff)
	var day = Math.floor(timediff / 3600 / 24);
	var hour = Math.floor(timediff / 3600 % 24);
	var minute = Math.floor(timediff / 60 % 60);
    var second = timediff % 60;
    return formatStr.replace(
        /D{1,2}|H{1,2}|m{1,2}|s{1,2}/g,
        (match) => {
          switch (match) {
            case "M":
              return String(month);
            case "MM":
              return String(month).padStart(2, "0");
            case "D":
              return String(day);
            case "DD":
              return String(day).padStart(2, "0");
            case "H":
              return String(hour);
            case "HH":
              return String(hour).padStart(2, "0");
            case "m":
              return String(minute);
            case "mm":
              return String(minute).padStart(2, "0");
            case "s":
              return String(second);
            case "ss":
              return String(second).padStart(2, "0");
            default:
              return match;
          }
        }
      );
  }
}
console.log(new Moment().countDownParse(1597569709,'H时mm分ss秒'));
