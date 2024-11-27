let imglist = document.getElementById('imglist');
let prev = document.querySelector('.prev');
let next = document.querySelector('.next');
let ico = document.getElementById('icolist').getElementsByTagName('li');
let icolist = document.getElementById('icolist');
var left = 0;
var timer;
run();
function run() {
    if (left <= -6000) {
        left = 0;
    }
    var m = Math.floor(-left / 1500);
    imglist.style.marginLeft = left + 'px';
    var n = (left % 1500 == 0) ? 1200 : 10;
    left -= 10;
    timer = setTimeout(run, n);
    icochange(m);
}
function imgchange(n) {
    let it = -(n * 1500);
    imglist.style.marginLeft = it + 'px';
    left = it;
}
prev.addEventListener('click', function () {
    let prevgo = Math.floor(-left / 1500) - 1;
    if (prevgo == -1) {
        prevgo = 3;
    }
    imgchange(prevgo);
});
next.addEventListener('click', function () {
    let nextgo = Math.floor(-left / 1500) + 1;
    if (nextgo == 5) {
        nextgo = 0;
    }
    imgchange(nextgo);
});
function icochange(m) {
    for (let i = 0; i < ico.length; i++) {
        ico[i].style.background = '';
        if (m < ico.length) {
            ico[m].style.background = 'red';
        }
    }
}
icolist.addEventListener('click', function (e) {
    let t = e.target.innerHTML - 1;
    imgchange(t);
    icochange(t);
});
imglist.addEventListener('mouseover', function () {
    clearTimeout(timer);
});
imglist.addEventListener('mouseout', function () {
    run();
});
