import 'styles.scss';
import Menu from './Menu.js';

export const nav = document.getElementById('nav');
export const menuTop = nav.offsetTop;
export const links = document.querySelectorAll('li a');

window.addEventListener('scroll', () => {
    const menu = new Menu;
    menu.init();
}, false,)