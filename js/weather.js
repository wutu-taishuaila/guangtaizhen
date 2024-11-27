
const weather= document.querySelector('.weather');
const dayImgUrl= 'https://weather.cma.cn/assets/w/1/day/d';
const nightImgUrl= 'https://weather.cma.cn/assets/w/1/night/n';
const imgUrl= 'https://weather.cma.cn/static/img/w/icon/w';
//https://weather.cma.cn/web/weather/57055.html
//来源网址http://www.cma.gov.cn/
//http://t.weather.sojson.com/api/weather/city/101110501
// 获取天气情况
fetch('http://weather.cma.cn/api/weather/view' + '?rnd=' + Date.now())
.then(response => response.json())
.then(data => {
  let msg= '';
  const location= data.data.location;
  const today= data.data.daily[0];
  const now= data.data.now;
  const alarm= data.data.alarm;
  const lastUpdate= data.data.lastUpdate;
  msg+= `<p>当前所在地：西安 ${lastUpdate}发布`;
  msg+= `<p>当前温度：${now.temperature}℃`;
  msg+= ` ~ ${today.nightWindDirection}${today.nightWindScale}`;
  msg+= `<p>${today.dayText} ~ ${today.nightText}<p>`;
  msg+= `<a class="ion-ios-sunny" style="hight="20px"">`;
  msg+= ` ~  <a class="ion-ios-partlysunny">`;
  weather.innerHTML= msg;
});
// function show(data) {
//   var t1 = document.getElementById("weather");
//   var arr = data.weather;
//   var str = ``;
//       str += `<tr>
//                   ${arr[0].date}<br>
//                   ${arr[1].weather}<br>
//                   ${arr[1].wind}<br>
//                   ${arr[1].temp}<br>
//               </tr>`;
  
//   t1.innerHTML = str;
// }
// window.onload = function () {
//           var script = document.createElement("script");
//           script.src = `https://query.asilu.com/weather/baidu/?city=渭南&callback=show`;
//           document.body.appendChild(script);
// }