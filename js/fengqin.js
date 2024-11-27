let items1 = document.querySelectorAll('.container1 .item');
let items2 = document.querySelectorAll('.container2 .item');

// 设置选中态样式
function setActive(items, e) {
    // 遍历所有.item元素，移出active样式
    items.forEach((item) => {
        item.classList.remove('active');
    })
    // 为当前选中项添加active样式
    e.target.classList.add('active');
}
// 遍历所有.item元素，分别为其设置点击事件
items1.forEach((item) => {
    item.addEventListener('click', (e) => { setActive(items1, e) });
})
items2.forEach((item) => {
    item.addEventListener('click', (e) => { setActive(items2, e) });
})
