window.onload = function () {
  var tabItem = document.getElementsByClassName('tab-item');
  var item = tabItem[0].getElementsByTagName('div');

  var tabContent = document.getElementsByClassName('tab-content');
  var content = tabContent[0].getElementsByClassName('content');

  for (let i = 0; i < item.length; i++) {
    item[i].index = i;
    item[i].onclick = function () {
      for (let j = 0; j < item.length; j++) {
        item[j].className = '';
        content[j].style.display = 'none';
      }
      this.className = 'active';
      content[item[i].index].style.display = 'block';
    }
  }
}


//获取所有+按钮
var increment = document.getElementsByClassName("increase ion-plus-round");

for (var i = 0; i < increment.length; i++) {
  //为a标签添加index属性，用于记录下标
  increment[i].index = i;

  //点击+数量增加的功能函数
  increment[i].onclick = function () {
    var flag = this.index;

    //获取当前按钮对应的数量框
    var q = document.getElementsByClassName("quantity")[flag];

    var newvalue = parseInt(q.value) + 1;

    q.setAttribute('value', newvalue);
  }
}
//获取所有-按钮
var decrement = document.getElementsByClassName('decrease ion-minus-round');

//点击-数量减少的功能函数
for (var j = 0; j < decrement.length; j++) {
  decrement[j].index = j;

  decrement[j].onclick = function () {
    var flag = this.index;
    //获取当前a标签对应的那个数量框
    var q = document.getElementsByClassName("quantity")[flag];

    if (parseInt(q.value) > 1) {
      var newvalue = parseInt(q.value) - 1;

      q.setAttribute('value', newvalue);

      changeSum(flag, newvalue);
    }
  }
}





let button = document.querySelectorAll('#buy');
let nowTime = new Date();
let endTime = nowTime.setSeconds(nowTime.getSeconds() + 12);
seckill(endTime, button[0]);
let timer = setInterval(function () {
  seckill(endTime, button[0]);
}, 1000);


function seckill(endTime, button) {
  nowTime = new Date();
  let remaining = Math.ceil((endTime - nowTime) / 1000);
  if (remaining > 0) {
    let d = parseInt(remaining / (24 * 60 * 60));
    let h = parseInt((remaining / (60 * 60)) % 24);
    let m = parseInt((remaining / 60) % 60);
    let s = parseInt(remaining % 60);
    d = d < 10 ? '0' + d : d;
    h = h < 10 ? '0' + h : h;
    m = m < 10 ? '0' + m : m;
    s = s < 10 ? '0' + s : s;
    button.innerHTML = '距本次活动开始时间还剩:' + d + '天' + h + '小时' + m + '分' + s + '秒';
  }
  else {

    clearInterval(timer);
    d = h = m = s = '00';
    button.innerHTML = '开始抢购';
    button.disabled = false;
  }
}


button[0].addEventListener('click', () => {
  let date = new Date();
  let num = document.querySelectorAll('[type=number]');
  if (localStorage.getItem('*') == null) {
    alert('请登录后再购票!');
  }
  else if (num[0].value > 0) {
    localStorage.setItem('z订单编号', date.getTime());
    localStorage.setItem('z购买日期', `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`);
    localStorage.setItem('z购买数量', num[0].value);
    function sendNotification() {
      new Notification("华山旅游网:", {
        body: '购票成功,祝你旅途愉快!',
        icon: 'https://pic1.zhuanstatic.com/zhuanzh/50b6ffe4-c7e3-4317-bc59-b2ec4931f325.png'
      })
    }
    if (window.Notification.permission == "granted") { // 判断是否有权限
      sendNotification();
    } else if (window.Notification.permission != "denied") {
      window.Notification.requestPermission(function (permission) { // 没有权限发起请求
        sendNotification();
      });
    }
  }
  else {
    alert('请选择购买数量!');
  }
});
button[1].addEventListener('click', () => {
  let date = new Date();
  let num = document.querySelectorAll('[type=number]');
  if (localStorage.getItem('*') == null) {
    alert('请登录后再购票!');
  }
  else if (num[1].value > 0) {
    localStorage.setItem('z订单编号', date.getTime());
    localStorage.setItem('z购买日期', `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`);
    localStorage.setItem('z购买数量', num[1].value);
    function sendNotification() {
      new Notification("华山旅游网:", {
        body: '购票成功,祝你旅途愉快!',
        icon: 'https://pic1.zhuanstatic.com/zhuanzh/50b6ffe4-c7e3-4317-bc59-b2ec4931f325.png'
      })
    }
    if (window.Notification.permission == "granted") { // 判断是否有权限
      sendNotification();
    } else if (window.Notification.permission != "denied") {
      window.Notification.requestPermission(function (permission) { // 没有权限发起请求
        sendNotification();
      });
    }
  }
  else {
    alert('请选择购买数量!');
  }
});
button[2].addEventListener('click', () => {
  let date = new Date();
  let num = document.querySelectorAll('[type=number]');
  if (localStorage.getItem('*') == null) {
    alert('请登录后再购票!');
  }
  else if (num[2].value > 0) {
    localStorage.setItem('z订单编号', date.getTime());
    localStorage.setItem('z购买日期', `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`);
    localStorage.setItem('z购买数量', num[2].value);
    function sendNotification() {
      new Notification("华山旅游网:", {
        body: '购票成功,祝你旅途愉快!',
        icon: 'https://pic1.zhuanstatic.com/zhuanzh/50b6ffe4-c7e3-4317-bc59-b2ec4931f325.png'
      })
    }
    if (window.Notification.permission == "granted") { // 判断是否有权限
      sendNotification();
    } else if (window.Notification.permission != "denied") {
      window.Notification.requestPermission(function (permission) { // 没有权限发起请求
        sendNotification();
      });
    }
  }
  else {
    alert('请选择购买数量!');
  }
});