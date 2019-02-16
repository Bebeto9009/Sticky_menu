import 'styles.scss';
import Menu from './Menu.js';

// document.addEventListener('DOMContentLoaded', function(){
//     const menu = new Menu;
//     menu.init();
// }, false);

export const nav = document.getElementById('nav');
export const menuTop = nav.offsetTop;
console.log('init nav', nav)
console.log('init menuTop', menuTop);

window.addEventListener('scroll', (e) => {
    const menu = new Menu;
    menu.init();
}, false,)