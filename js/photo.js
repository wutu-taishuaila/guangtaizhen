document.querySelector('#image1').addEventListener('mouseenter',enterHandler);

document.querySelector('#image1').addEventListener('mousemove',moveHandler);

document.querySelector('#image1').addEventListener('mouseleave',leaveHandler);

document.querySelector('#image2').addEventListener('mouseenter',enterHandler);

document.querySelector('#image2').addEventListener('mousemove',moveHandler);

document.querySelector('#image2').addEventListener('mouseleave',leaveHandler);

document.querySelector('#image3').addEventListener('mouseenter',enterHandler);

document.querySelector('#image3').addEventListener('mousemove',moveHandler);

document.querySelector('#image3').addEventListener('mouseleave',leaveHandler);

function enterHandler(e) {
    e.target.setAttribute('zoomed',1);
} 

function moveHandler(e) {
    let rect = e.target.getBoundingClientRect();
    let x =e.offsetX;
    let y = e.offsetY;

    e.target.style.setProperty('--x',x);
    e.target.style.setProperty('--y',y);
} 

function leaveHandler(e) {
    e.target.removeAttribute('zoomed');
} 


