
const article = document.querySelector('p');
const tipsPanel = document.querySelector('.tips-panel');
const copySelected = document.querySelector('.copy-selected');
const searchSelected = document.querySelector('.search-selected');
const translateSelected = document.querySelector('.translate-selected');
const speechSelected = document.querySelector('.speech-selected');
let selectedText = '';
article.addEventListener('mouseup', (e) => {
    let selection = document.getSelection();
    if (!selection.isCollapsed) {

        selectedText = selection.toString();
        tipsPanel.hidden = false;

        tipsPanel.style.left = e.clientX + 'px';

        tipsPanel.style.top = e.clientY + 18 + 'px';
    }
    e.stopPropagation();
    e.preventDefault();
});
article.addEventListener('mousedown', () => {
    if (!tipsPanel.hidden) {
        tipsPanel.hidden = true;
    }
});
document.addEventListener('mouseup', () => {
    if (!tipsPanel.hidden) {
        tipsPanel.hidden = true;
    }
});
copySelected.addEventListener('click', () => {
    navigator.clipboard.writeText(selectedText);
});
searchSelected.addEventListener('click', () => {

    window.open('https://bing.com/search?q=' + selectedText, '_blank');
});
translateSelected.addEventListener('click', () => {
    window.open('https://translate.google.cn/?sl=auto&text=' + selectedText, '_blank');
});
speechSelected.addEventListener('click', () => {
    let utterance = new SpeechSynthesisUtterance(selectedText);
    window.speechSynthesis.speak(utterance);
});


// <!--textarea高度自适应-->

$(function () {
    $('.content').flexText();
});


// <!--textarea限制字数-->
function keyUP(t) {
    var len = $(t).val().length;
    if (len > 139) {
        $(t).val($(t).val().substring(0, 140));
    }
}
// <!--点击评论创建评论条-->
$('.commentAll').on('click', '.plBtn', function () {
    if (localStorage.getItem('*') == null) {
        alert('请登录后再评论!');
    }
    else {
        var name = localStorage.key(0);
        var myDate = new Date();
        //获取当前年
        var year = myDate.getFullYear();
        //获取当前月
        var month = myDate.getMonth() + 1;
        //获取当前日
        var date = myDate.getDate();
        var h = myDate.getHours();       //获取当前小时数(0-23)
        var m = myDate.getMinutes();     //获取当前分钟数(0-59)
        if (m < 10) m = '0' + m;
        var s = myDate.getSeconds();
        if (s < 10) s = '0' + s;
        var now = year + '-' + month + "-" + date + " " + h + ':' + m + ":" + s;
        //获取输入内容
        var oSize = $(this).siblings('.flex-text-wrap').find('.comment-input').val();
        console.log(oSize);
        //动态创建评论模块
        Html = '<div class="comment-show-con clearfix"><div class="comment-show-con-img pull-left">' +
            '<img src="image/header-img-comment_03.png" alt=""></div> ' +
            '<div class="comment-show-con-list pull-left clearfix">' +
            '<div class="pl-text clearfix"> <a href="#" class="comment-size-name">' + name + ': </a> ' +
            '<span class="my-pl-con">&nbsp;' + oSize + '</span> </div> <div class="date-dz"> ' +
            '<span class="date-dz-left pull-left comment-time">' + now + '</span> ' +
            '<div class="date-dz-right pull-right comment-pl-block">' + '<a href="javascript:;" id="delete" class="ion-ios-trash">' +
            '</a> <br>' +
            '<a href="javascript:;" class="date-dz-z pull-left">' +
            '<i class="date-dz-z-click-red"></i>赞 (<i class="z-num">0</i>)</a> ' +
            '</div> </div><div class="hf-list-con">' +
            '</div></div> </div>';
        if (oSize.replace(/(^\s*)|(\s*$)/g, "") != '' ) {
            $(this).parents('.reviewArea ').siblings('.comment-show').prepend(Html);
            $(this).siblings('.flex-text-wrap').find('.comment-input').prop('value', '').siblings('pre').find('span').text('');
        }
       

        //删除评论
        var delet = document.getElementById('delete');
        delet.addEventListener('click', (e) => {

            if (e.target.tagName == 'A') {

                const deletedEl = e.target.parentElement.parentElement.parentElement.parentElement;

                deletedEl.remove();
            }
        });
    }
});

// <!--点赞-->
$('.comment-show').on('click', '.date-dz-z', function () {
    var zNum = $(this).find('.z-num').html();
    if ($(this).is('.date-dz-z-click')) {
        zNum--;
        $(this).removeClass('date-dz-z-click red');
        $(this).find('.z-num').html(zNum);
        $(this).find('.date-dz-z-click-red').removeClass('red');
    } else {
        zNum++;
        $(this).addClass('date-dz-z-click');
        $(this).find('.z-num').html(zNum);
        $(this).find('.date-dz-z-click-red').addClass('red');
    }
})


let valuesIndex= 0;
document.addEventListener('click', function(e){
  // 1 两个实参分别为：通过event对象获取鼠标单击时距离视口左上角的水平和垂直距离。
  createTip(e.clientX, e.clientY);
});
function createTip(x, y){
  const values = ["华山官网评论区","文明旅游！","规范评论！","留下你的评论吧！","华山欢迎你！"];
  const tip= document.createElement('span');
  valuesIndex= (valuesIndex + 1) % values.length;
  tip.textContent= values[valuesIndex];
  tip.className= 'tip';
  document.body.appendChild(tip);
  y-= tip.offsetHeight;
  tip.style.cssText= `left: ${x}px; top: ${y}px;`;
  setTimeout(()=>tip.remove(), 2000);
}

//图片放大缩小功能
    window.onload = function () {
        var wrap = document.getElementById("wrap");
        var black = document.getElementById("black");
        var big = document.getElementById("big");
        var left = document.getElementById("left");
        var right = document.getElementById("right");
        var img = document.getElementById("img");
        var link = wrap.getElementsByTagName("a");
        var cur = 0;
        for (var i = 0; i < link.length; i++) {
            link[i].index = i;
            link[i].onclick = function () {
                var src = this.href;
                cur = this.index;
                black.style.display = "block";
                big.style.display = "block";
                big.style.left = big.style.top = "50%";
                big.style.marginLeft = -big.offsetWidth / 2 + "px";
                big.style.marginTop = -big.offsetHeight / 2 + "px";
                img.src = src;
                left.addEventListener('click',function () {

                    cur--;
                    if (cur < 0) {
                        cur = link.length - 1;
                    }
                    img.src = link[cur].href;

                })
                right.addEventListener( 'click',function () {

                    cur++;
                    if (cur >= link.length) {
                        cur = 0;
                    }
                    img.src = link[cur].href;

                })
                return false;
            }
        }
        black.onclick = function () {
            black.style.display = "none";
            big.style.display = "none";
        }

    }
