const burger = document.getElementsByClassName('burger')[0];
const closeMenu = document.getElementsByClassName('close');
const menu = document.querySelector('.nav-link-container');
const menuclose = document.getElementsByClassName('close')[0];

burger.addEventListener('click', () => {
    menu.classList.add('show-menu');
    burger.style.display = 'none';
    menuclose.style.display = 'block';
})
menuclose.addEventListener('click', () => {
    menu.classList.remove('show-menu');
    burger.style.display = 'block';
    menuclose.style.display = 'none';
})