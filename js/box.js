var lis=document.querySelector('.map').querySelectorAll('li');
       var divs=document.querySelector('.neirong').querySelectorAll('div');
       for(var i=0;i<lis.length;i++){
           lis[i].setAttribute('index',i);
           lis[i].onclick=function(){
               for(var i=0;i<lis.length;i++){
                   lis[i].className='';
               }
               this.className='choose';
               var index=this.getAttribute('index');
               for(var i=0;i<divs.length;i++){
                   divs[i].style.display='none';
               }
               divs[index].style.display='block';
           }
       }
//文本 展开全文
       const content = document.querySelector('.content');
        const shadeBox = document.querySelector('.shade-box');
        const showMore = document.querySelector('.show-more');
        const defaultLength = 150; //默认显示最大字数

        // 1-1 条件表达式为：如果文本长度大于150
        if (content.textContent.length > 150) {
            // 1-2 设置content的高度为8rem
            content.style.height = '8rem';
            // 1-3 怎么解决content元素内容溢出
            content.style.overflow = 'hidden';
            // 1-4 shadeBox未显示，如何解决
            shadeBox.style.display = 'block';
        }

        // 单击展开全文
        showMore.addEventListener('click', () => {
            // 2-1 content的高度如何解决
            content.style.height = 'auto';
            // 2-2 shadeBox是否应该继续显示，如何解决
            shadeBox.style.display = 'none';
        });
