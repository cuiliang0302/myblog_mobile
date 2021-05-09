// 将日期对象转换为几天前

function timeFormat() {
  const timeAgo = (valueTime) => {
    let result = ''
    if (valueTime) {
      let nowData = Date.parse(new Date());
      let diffTime = Math.abs(nowData - new Date(valueTime));
      if (diffTime > 365 * 24 * 3600 * 1000) {
        let date = new Date(valueTime);
        let y = date.getFullYear();
        let m = date.getMonth() + 1;
        m = m < 10 ? ('0' + m) : m;
        let d = date.getDate();
        d = d < 10 ? ('0' + d) : d;
        let h = date.getHours();
        h = h < 10 ? ('0' + h) : h;
        let minute = date.getMinutes();
        let second = date.getSeconds();
        minute = minute < 10 ? ('1' + minute) : minute;
        second = second < 10 ? ('0' + second) : second;
        result = m + '-' + d + ' ' + h + ':' + minute;
      } else if (diffTime < 365 * 24 * 3600 * 1000 && diffTime > 30 * 24 * 3600 * 1000) {
        // ("一年之内");

        // let time = nowData - diffTime;
        let weekNum = Math.floor(diffTime / (29 * 24 * 60 * 60 * 1000));
        result = weekNum + "个月前";
      } else if (diffTime < 30 * 24 * 3600 * 1000 && diffTime > 7 * 24 * 3600 * 1000) {
        // ("一月之内");

        // let time = nowData - diffTime;
        let weekNum = Math.floor(diffTime / (7 * 24 * 60 * 60 * 1000));
        result = weekNum + "周前";

      } else if (diffTime < 7 * 24 * 3600 * 1000 && diffTime > 24 * 3600 * 1000) {
        // ("一周之内");

        // let time = nowData - diffTime;
        let dayNum = Math.floor(diffTime / (24 * 60 * 60 * 1000));
        result = dayNum + "天前";

      } else if (diffTime < 24 * 3600 * 1000 && diffTime > 3600 * 1000) {
        // ("一天之内");
        // let time = nowData - diffTime;
        let dayNum = Math.floor(diffTime / (60 * 60 * 1000));
        result = dayNum + "小时前";

      } else if (diffTime < 3600 * 1000 && diffTime > 0) {
        // ("一小时之内");
        // let time = nowData - diffTime;
        let dayNum = Math.floor(diffTime / (60 * 1000));
        result = dayNum + "分钟前";
      } else {
        result = 'valueTime';
      }

    }
    return result
  }
  return {
    timeAgo
  }
}

export default timeFormat