let yzbj = document.querySelector('.yzbj');
const topNav = document.querySelector('.topNav');
const gotop = document.querySelector('.gotop');
const scrollDistance = document.querySelector('.scroll-distance');
function all() {
    scrollDistance.style.display = 'none';
    window.addEventListener('scroll', () => {
        // 2-1 将页面的垂直滚动高度存储在scrollHeight变量中
        let scrollHeight = window.pageYOffset;
        // 显示页面的滚动高度
        scrollDistance.textContent = scrollHeight;
        // 2-2完 当页面垂直滚动高度大于300时显示右下角的回到顶端，否则不显示
        if (scrollHeight > 1) {
            // 避免滚动持续触发
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
        // 3 文档平滑滚动到页面顶端，使用scroll(选项)方法
        window.scroll({
            top: 0,
            behavior: 'smooth'
        })
    });
}
function yz() {
    if (localStorage.getItem('*') == '已登录') {
        yzbj.innerHTML = '<a href="personal.html"class="dangqiang">个人信息</a>';
    }
}
export { topNav, gotop, scrollDistance, yzbj, yz, all }

//tttttt

import { topNav, gotop, scrollDistance, yzbj, yz, all } from './js/all.mjs';
yz();
all();
