const topNav = document.querySelector('.topNav');
const gotop = document.querySelector('.gotop');
const scrollDistance = document.querySelector('.scroll-distance');
scrollDistance.style.display = 'none';
window.addEventListener('scroll', () => {
    let scrollHeight = window.pageYOffset;
    scrollDistance.textContent = scrollHeight;
    if (scrollHeight > 1) {

        if (topNav.className.includes('showNav')) return;
        topNav.classList.add('showNav');
        gotop.style.display = 'block';
    } else {
        if (!topNav.className.includes('showNav')) return;
        topNav.classList.remove('showNav');
        gotop.style.display = 'none';
    }
});
gotop.addEventListener('click', e => {
    e.preventDefault();
    window.scroll({
        top: 0,
        behavior: 'smooth'
    })
});
let yzbj = document.querySelector('.yzbj');
window.addEventListener('scroll', () => {
    let header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
});
(function () {
    if (localStorage.getItem('*') == '已登录') {
        yzbj.innerHTML = '<a href="personal.html">个人信息</a>';
    }
}())

var head = document.querySelector('.topNav li:nth-child(1)')
head.addEventListener('mouseover', () => {
    head.style.transform = 'scale(1.3, 1.3)';
})
head.addEventListener('mouseout', () => {
    head.style.transform = 'scale(1, 1)';
})
var head1 = document.querySelector('.topNav li:nth-child(2)')
head1.addEventListener('mouseover', () => {
    head1.style.transform = 'scale(1.3, 1.3)';
})
head1.addEventListener('mouseout', () => {
    head1.style.transform = 'scale(1, 1)';
})
var head2 = document.querySelector('.topNav li:nth-child(3)')
head2.addEventListener('mouseover', () => {
    head2.style.transform = 'scale(1.3, 1.3)';
})
head2.addEventListener('mouseout', () => {
    head2.style.transform = 'scale(1, 1)';
})
var head3 = document.querySelector('.topNav li:nth-child(4)')
head3.addEventListener('mouseover', () => {
    head3.style.transform = 'scale(1.3, 1.3)';
})
head3.addEventListener('mouseout', () => {
    head3.style.transform = 'scale(1, 1)';
})
var head4 = document.querySelector('.topNav li:nth-child(5)')
head4.addEventListener('mouseover', () => {
    head4.style.transform = 'scale(1.3, 1.3)';
})
head4.addEventListener('mouseout', () => {
    head4.style.transform = 'scale(1, 1)';
})

