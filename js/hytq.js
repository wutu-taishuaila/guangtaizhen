var weatherModule = (function () {
  var weather_html = "" +
    '<div class="weather">'
    + '<h5 class="weather-today">'
    + '<span class="weather-thiscity">-</span>'
    + '&nbsp;&nbsp;星期<span class="weather-day"></span>&nbsp;&nbsp;'
    + '<span class="weather-year"></span>年'
    + '<span class="weather-month"></span>月'
    + '<span class="weather-date"></span>日'
    + '<span class="weather-choosecity">选择城市：<input type="text" name="city" class="weather-city" value="华阴" maxlength="8"></span>'
    + '<span class="weather-update">更新</span></h5>'
    + '<div class="weather-todayinfo">'
    + '<h1 class="weather-todayinfo-temprange">~</h1>'
    + '<p class="weather-todayinfo-type">-</p>'
    + '<p class="weather-todayinfo-wind">-</p>'
    + '<p>实时空气质量：<span class="weather-todayinfo-aqi">-</span></p>'
    + '</div>'
    + '<div class="weather-todayotherinfo">'
    + '<p class="weather-todayotherinfo-time">更新中。。。</p>'
    + '<p>实时：<span class="weather-todayotherinfo-nowtemp"></span></p>'
    + '<h5>空气质量提示：</h5>'
    + '<p class="weather-todayotherinfo-airinfo"></p>'
    + '<h5>穿衣指数:</h5>'
    + '<p class="weather-todayotherinfo-clothe"></p>'
    + '<h5>紫外线指数:</h5>'
    + '<p class="weather-todayotherinfo-ray"></p>'
    + '</div>'
    + '<div class="weather-future">'
    + '<ul>'
    + '<li class="weather-future-item1">'
    + '<h6 class="date">-</h6>'
    + '<h3 class="temprange">~</h3>'
    + '<p class="type">-</p>'
    + '<p class="wind">-</p>'
    + '</li>'
    + '<li class="weather-future-item2">'
    + '<h6 class="date">-</h6>'
    + '<h3 class="temprange">~</h3>'
    + '<p class="type">-</p>'
    + '<p class="wind">-</p>'
    + '</li>'
    + '</ul>'
    + '</div>'
    + '</div>',

    jqueryMap = {},
    setJqueryMap,
    updateDate,
    updateWeather,
    initModule;
  setJqueryMap = function ($container) {
    jqueryMap.$today_day = $container.find('.weather-day');
    jqueryMap.$today_year = $container.find('.weather-year');
    jqueryMap.$today_month = $container.find('.weather-month');
    jqueryMap.$today_date = $container.find('.weather-date');
    jqueryMap.$city = $container.find('.weather-city');
    jqueryMap.$this_city = $container.find('.weather-thiscity');
    jqueryMap.$update_time = $container.find('.weather-todayotherinfo-time');
    jqueryMap.$now_temp = $container.find('.weather-todayotherinfo-nowtemp');
    jqueryMap.$ray_info = $container.find('.weather-todayotherinfo-ray');
    jqueryMap.$air_info = $container.find('.weather-todayotherinfo-airinfo');
    jqueryMap.$clothe_info = $container.find('.weather-todayotherinfo-clothe');
    jqueryMap.$temp_range = $container.find('.weather-todayinfo-temprange');
    jqueryMap.$temp_type = $container.find('.weather-todayinfo-type');
    jqueryMap.$temp_wind = $container.find('.weather-todayinfo-wind');
    jqueryMap.$temp_aqi = $container.find('.weather-todayinfo-aqi');
    jqueryMap.$future_list = $container.find('.weather-future li');
    jqueryMap.$update_weather = $container.find('.weather-update');
  };
  updateDate = function () {
    var now = new Date(),
      day = now.getDay(),
      year = now.getFullYear(),
      month = now.getMonth(),
      date = now.getDate(),
      time = now.toLocaleTimeString(),
      day2week = "";

    switch (day) {
      case 0:
        day2week = "日";
        break;
      case 1:
        day2week = "一";
        break;
      case 2:
        day2week = "二";
        break;
      case 3:
        day2week = "三";
        break;
      case 4:
        day2week = "四";
        break;
      case 5:
        day2week = "五";
        break;
      case 6:
        day2week = "六";
        break;
    }

    jqueryMap.$today_day.text(day2week);
    jqueryMap.$today_year.text(year);
    jqueryMap.$today_month.text(month + 1);
    jqueryMap.$today_date.text(date);
  };

  updateWeather = function () {
    var city = jqueryMap.$city.val() || "华阴";
    // var url = "https://www.tianqiapi.com/api/?appid=91766733&appsecret=znImL7Lw";
    var url = "https://api.msn.cn/weather/weathertrends?apiKey=j5i4gDqHL6nGYwx5wi5kRhXjtf2c5qgFX9fzfk0TOo";
    var sendData = "version=v1&city=" + city;
    $.ajax({
      url: url,
      data: sendData,
      dataType: 'JSON',
      success: function (info) {
        console.log(info)

        if (info.city != city) {
          jqueryMap.$this_city.text("无效的城市");
          setTimeout(function () {
            jqueryMap.$city.val("").focus();
            console.log('wrong cityname:' + city)
            updateWeather()
          }, 1000)
        } else {
          var today = info.data[0],
            temprange = today.tem2 + "~" + today.tem1;

          jqueryMap.$this_city.text(city);
          jqueryMap.$update_time.text("数据更新时间：" + info.update_time);
          jqueryMap.$now_temp.text(today.tem);
          jqueryMap.$air_info.text(today.air_tips)
          jqueryMap.$clothe_info.text(today.index[3].desc)
          jqueryMap.$ray_info.text(today.index[0].desc)

          jqueryMap.$temp_range.text(temprange);
          jqueryMap.$temp_type.text(today.wea);
          jqueryMap.$temp_wind.text("风力：" + today.win_speed);
          jqueryMap.$temp_aqi.text(today.air_level)

          jqueryMap.$future_list.each(function (index, item) {

            $(this).find('.date').text(info.data[index + 1].day);
            $(this).find('.temprange').text(info.data[index + 1].tem2 + "~" + info.data[index + 1].tem1);
            $(this).find('.type').text(info.data[index + 1].wea);
            $(this).find('.wind').text(info.data[index + 1].win[0]);
          })
        }
      }
    });
  };

  initModule = function ($container) {
    $container.append(weather_html);
    setJqueryMap($container);
    updateDate();
    updateWeather();

    jqueryMap.$update_weather.click(function () {
      updateWeather();
    });

    jqueryMap.$city.keyup(function (e) {
      if (e.keyCode === 13) {
        updateWeather();
      }
      return false;
    });

    setInterval(function () {
      updateWeather();
    }, 86400);
  };
  return {
    initModule: initModule
  };
}());
