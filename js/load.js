let yzbj = document.querySelector('.yzbj');
let login_title = document.querySelector('.login-title');
let register_title = document.querySelector('.register-title');
let login_box = document.querySelector('.login-box');
let register_box = document.querySelector('.register-box');
let btn1 = document.querySelector('.register-box button');
let btn2 = document.querySelector('.login-box button');
let pswd = document.querySelectorAll('[type=password]');
let text = document.querySelectorAll('[type=text]');
let eye1 = document.getElementById('eye1');
let eye2 = document.getElementById('eye2');
let eye3 = document.getElementById('eye3');
let errorMsg = document.querySelector('.error-msg');
let registerForm = document.querySelector('.register-form');
let loginForm = document.querySelector('.login-form');
let container = document.querySelector('.container');
let wait = document.querySelector('.wait');

(function () {
    if (localStorage.getItem('*') == '已登录') {
        yzbj.innerHTML = '<a href="personal.html">个人信息</a>';
    }
}())
login_title.addEventListener('click', () => {
    if (login_box.classList.contains('slide-up')) {
        register_box.classList.add('slide-up');
        login_box.classList.remove('slide-up');
    }
})
register_title.addEventListener('click', () => {
    if (register_box.classList.contains('slide-up')) {
        login_box.classList.add('slide-up');
        register_box.classList.remove('slide-up');
    }
})

btn1.addEventListener('mouseover', () => {
    btn1.style.color = 'black';
})
btn1.addEventListener('mouseout', () => {
    btn1.style.color = 'rgba(225, 225, 255, 0.8)';
})
btn2.addEventListener('mouseover', () => {
    btn2.style.color = 'black';
})
btn2.addEventListener('mouseout', () => {
    btn2.style.color = 'rgba(225, 225, 255, 0.8)';
})

pswd[0].addEventListener('focus', e => {
    if (e.target.type == 'password') {
        eye1.style.top = '50%';
        eye1.src = "image/eye-close.png";
    } else {
        eye1.src = "image/eye-open.png";
    }
})
pswd[1].addEventListener('focus', e => {
    if (e.target.type == 'password') {
        eye2.style.top = '65%';
        eye2.src = "image/eye-close.png";
    } else {
        eye2.src = "image/eye-open.png";
    }
})
pswd[2].addEventListener('focus', e => {
    if (e.target.type == 'password') {
        eye3.style.top = '58%';
        eye3.src = "image/eye-close.png";
    } else {
        eye3.src = "image/eye-open.png";
    }
})
eye1.addEventListener('mousedown', e => {
    if (pswd[0].type == 'password') {
        pswd[0].type = 'text';
        e.target.src = "image/eye-open.png";
    } else {
        pswd[0].type = 'password';
        e.target.src = "image/eye-close.png";
    }
})
eye1.addEventListener('mouseup', e => {
    if (pswd[0].type == 'password') {
        pswd[0].type = 'text';
        e.target.src = "image/eye-open.png";
    } else {
        pswd[0].type = 'password';
        e.target.src = "image/eye-close.png";
    }
})
eye2.addEventListener('mousedown', e => {
    if (pswd[1].type == 'password') {
        pswd[1].type = 'text';
        e.target.src = "image/eye-open.png";
    } else {
        pswd[1].type = 'password';
        e.target.src = "image/eye-close.png";
    }
})
eye2.addEventListener('mouseup', e => {
    if (pswd[1].type == 'password') {
        pswd[1].type = 'text';
        e.target.src = "image/eye-open.png";
    } else {
        pswd[1].type = 'password';
        e.target.src = "image/eye-close.png";
    }
})
eye3.addEventListener('mousedown', e => {
    if (pswd[2].type == 'password') {
        pswd[2].type = 'text';
        e.target.src = "image/eye-open.png";
    } else {
        pswd[2].type = 'password';
        e.target.src = "image/eye-close.png";
    }
})
eye3.addEventListener('mouseup', e => {
    if (pswd[2].type == 'password') {
        pswd[2].type = 'text';
        e.target.src = "image/eye-open.png";
    } else {
        pswd[2].type = 'password';
        e.target.src = "image/eye-close.png";
    }
})

registerForm.addEventListener('submit', e => {
    if (!checkForm1()) {
        e.preventDefault();
    }
    else {
        e.preventDefault();
        localStorage.setItem(`${text[0].value}`, `${pswd[1].value}`);
        alert('注册成功!');
    }
})
loginForm.addEventListener('submit', e => {
    if (!checkForm2()) {
        e.preventDefault();
    }
    else {
        if (localStorage.getItem(`${text[1].value}`) != pswd[2].value) {
            e.preventDefault();
            alert('账号或密码错误!');
        }
        else {
            e.preventDefault();
            localStorage.setItem('*', '已登录');
            container.style.display = 'none';
            wait.style.display = 'flex';
            alert('正在登录请稍后!');
            // setTimeout(()=>{window.location='http://159.75.100.10:8899/index.html';},3000);
            setTimeout(() => { window.location = 'http://192.168.88.106:8080/index.html'; }, 3000);
        }
        //file:///C:/Users/86130/Desktop/%E9%AB%98%E7%BA%A7html/%E9%AB%98%E7%BA%A7html/
    }
})
text[0].addEventListener('blur', () => { checkName(0) });
text[1].addEventListener('blur', () => { checkName(1) });
pswd[0].addEventListener('blur', () => { checkPwd(0) });
pswd[2].addEventListener('blur', checkPwd2);
function checkForm1() {
    let flag = checkName(0) && checkPwd(0) && checkPwd1();
    return flag;
}
function checkForm2() {
    let flag = checkName(1) && checkPwd2();
    return flag;
}
function checkName(i) {
    let reg = /^[\u4e00-\u9fa5]{2,5}$/;
    if (reg.test(text[i].value)) {
        errorMsg.innerHTML = '';
        return true;
    } else {
        errorMsg.innerHTML = '用户名应为汉字2-5个汉字';
        return false;
    }
}
function checkPwd(i) {
    let reg = /^(?=.*?[a-z])(?=.*?[A-Z])(?=.*?\d)[a-zA-Z\d]{8,10}$/;
    if (reg.test(pswd[i].value)) {
        errorMsg.innerHTML = '';
        return true;
    } else {
        if (!errorMsg.innerHTML) {
            errorMsg.innerHTML = '密码须包括数字、大小写英文字母，长度8-10位';
        }
        return false;
    }
}
function checkPwd1() {
    if (pswd[0].value == pswd[1].value) {
        errorMsg.innerHTML = '';
        return true;
    } else {
        if (!errorMsg.innerHTML) {
            errorMsg.innerHTML = '密码输入不一致,请仔细检查!';
        }
        return false;
    }
}
function checkPwd2() {
    if (pswd[2].value != '') {
        errorMsg.innerHTML = '';
        return true;
    } else {
        if (!errorMsg.innerHTML) {
            errorMsg.innerHTML = '密码未输入，请输入密码!';
        }
        return false;
    }
}