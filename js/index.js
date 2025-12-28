// DOM元素获取
const loginFormCard = document.getElementById('login-form-card');
const registerFormCard = document.getElementById('register-form-card');
const showLoginFormBtn = document.getElementById('show-login-form');
const showRegisterFormBtn = document.getElementById('show-register-form');
const switchToRegister = document.getElementById('switch-to-register');
const switchToLogin = document.getElementById('switch-to-login');
const loginForm = document.getElementById('login-form');
const registerForm = document.getElementById('register-form');

// 页面加载时显示登录表单卡片（默认已显示）
window.addEventListener('DOMContentLoaded', () => {
    // 为图片设置备用内容
    const loginImg = document.getElementById('login-img');
    const registerImg = document.getElementById('register-img');
    
    // 设置备用图片URL
    const fallbackImage = 'https://images.unsplash.com/photo-1445205170230-053b83016050?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80';
    
    // 检查图片是否加载失败
    const checkImageLoad = (imgElement) => {
        const testImg = new Image();
        testImg.onload = function() {
            // 图片存在，无需处理
        };
        testImg.onerror = function() {
            // 图片不存在，使用备用图片
            imgElement.src = fallbackImage;
        };
        testImg.src = imgElement.src;
    };
    
    // 检查登录和注册卡片图片
    checkImageLoad(loginImg);
    checkImageLoad(registerImg);
});

// 显示注册表单（点击注册按钮）
showRegisterFormBtn.addEventListener('click', () => {
    // 隐藏登录表单
    loginFormCard.style.display = 'none';
    
    // 显示注册表单并添加滑动动画
    registerFormCard.style.display = 'block';
    setTimeout(() => {
        registerFormCard.classList.add('active');
    }, 10);
});

// 显示登录表单（点击登录按钮）
showLoginFormBtn.addEventListener('click', () => {
    // 隐藏注册表单
    registerFormCard.classList.remove('active');
    setTimeout(() => {
        registerFormCard.style.display = 'none';
        // 显示登录表单
        loginFormCard.style.display = 'block';
    }, 600);
});

// 在表单内切换（从登录表单切换到注册表单）
switchToRegister.addEventListener('click', () => {
    // 隐藏登录表单
    loginFormCard.style.display = 'none';
    
    // 显示注册表单并添加滑动动画
    registerFormCard.style.display = 'block';
    setTimeout(() => {
        registerFormCard.classList.add('active');
    }, 10);
});

// 在表单内切换（从注册表单切换到登录表单）
switchToLogin.addEventListener('click', () => {
    // 隐藏注册表单
    registerFormCard.classList.remove('active');
    setTimeout(() => {
        registerFormCard.style.display = 'none';
        // 显示登录表单
        loginFormCard.style.display = 'block';
    }, 600);
});


// 在登录表单提交事件中修改跳转
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;
    
    // 简单的验证
    if (username && password) {
        // 登录成功后跳转到首页
        window.location.href = 'index.html';
    } else {
        alert('请输入用户名和密码');
    }
});

// 注册表单提交
registerForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const username = document.getElementById('register-username').value;
    const password = document.getElementById('register-password').value;
    const confirmPassword = document.getElementById('confirm-password').value;
    
    // 简单的验证
    if (!username || !password || !confirmPassword) {
        alert('请填写所有字段');
        return;
    }
    
    if (password !== confirmPassword) {
        alert('两次输入的密码不一致');
        return;
    }
    
    alert(`注册成功！\n用户名: ${username}`);
    
    // 注册成功后自动切换到登录表单
    registerFormCard.classList.remove('active');
    setTimeout(() => {
        registerFormCard.style.display = 'none';
        loginFormCard.style.display = 'block';
    }, 600);
});

// 点击页面其他区域关闭表单
document.addEventListener('click', (e) => {
    const isFormCard = e.target.closest('.form-card');
    const isTriggerButton = e.target.closest('.btn') || e.target.closest('.form-switch a');
    
    if (!isFormCard && !isTriggerButton) {
        if (!loginFormCard.contains(e.target) && e.target !== showLoginFormBtn) {
            loginFormCard.style.display = 'none';
        }
        
        if (!registerFormCard.contains(e.target) && e.target !== showRegisterFormBtn) {
            registerFormCard.classList.remove('active');
            setTimeout(() => {
                registerFormCard.style.display = 'none';
            }, 600);
        }
    }
});