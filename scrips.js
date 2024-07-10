// JavaScript functionality for responsive navigation menu

document.addEventListener('DOMContentLoaded', () => {
    const nav = document.querySelector('nav');
    const navToggle = document.createElement('button');
    navToggle.innerText = 'Menu';
    navToggle.classList.add('nav-toggle');
    nav.prepend(navToggle);

    navToggle.addEventListener('click', () => {
        nav.classList.toggle('nav-open');
    });
});
