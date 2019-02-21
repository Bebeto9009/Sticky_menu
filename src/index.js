import 'styles.scss';
import Menu from './Menu.js';

window.addEventListener('load', () => {
    const menu = new Menu(document.getElementById('nav'));
    menu.init();
}, false);

