let mains = document.querySelectorAll('.main>div');
let lis = document.querySelectorAll('.leftNav li');
let personal = document.querySelector('.leftNav li:nth-child(1)');
let ticket = document.querySelector('.leftNav li:nth-child(2)');
let exit = document.querySelector('.leftNav li:nth-child(3)');
let p2 = document.querySelector('.rank');
let p3 = document.querySelector('.date');
let p4 = document.querySelector('.amount');
let first = document.querySelector('.first');
let ticket1 = document.querySelector('.ticket');

var menuButton = document.querySelector('.menu-button');
var openMenu = function () {
  swiper.slidePrev();
};
var swiper = new Swiper('.swiper', {
  slidesPerView: 'auto',
  initialSlide: 1,
  resistanceRatio: 0,
  slideToClickedSlide: true,
  on: {
    slideChangeTransitionStart: function () {
      var slider = this;
      if (slider.activeIndex === 0) {
        menuButton.classList.add('cross');
        // required because of slideToClickedSlide
        menuButton.removeEventListener('click', openMenu, true);
      } else {
        menuButton.classList.remove('cross');
      }
    },
    slideChangeTransitionEnd: function () {
      var slider = this;
      if (slider.activeIndex === 1) {
        menuButton.addEventListener('click', openMenu, true);
      }
    },
  },
});


personal.addEventListener('click', () => {
  change(0);
});
ticket.addEventListener('click', () => {
  change(1);
});
exit.addEventListener('click', () => {
  localStorage.removeItem('*');
});
function change(t) {
  for (let n of mains) {
    n.style.display = 'none';
  }
  for (let y of lis) {
    y.style.color = 'white';
  }
  mains[t].style.display = 'block';
  lis[t].style.color = 'black';
}
first.innerHTML = `${localStorage.key(0)}`;
if (localStorage.getItem('z订单编号') == null) {
  ticket1.innerHTML = '暂无购票信息！';
}
else {
  p2.innerHTML += `${localStorage.getItem('z订单编号')}`;
  p3.innerHTML += `${localStorage.getItem('z购买日期')}`;
  p4.innerHTML += `${localStorage.getItem('z购买数量')}`;
}

const body = document.body;
const printArea = document.querySelector('.printArea');

let originalContent = body.innerHTML;
document.querySelector('.print').addEventListener('click', () => {
  body.innerHTML = printArea.innerHTML;
  window.print();
  body.innerHTML = originalContent;
});