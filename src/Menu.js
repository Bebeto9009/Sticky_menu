import { menuTop, links } from './index.js';

export default class Menu {

    stickmenu(){
        if (window.scrollY >= menuTop){
            document.body.classList.add('sticky-nav');
        } else {
            document.body.classList.remove('sticky-nav');
        }
    }

    watchmenu() {
        let currentScroll = window.scrollY;

        links.forEach(link => {
            let section = document.querySelector(link.hash);

            if (
                section.offsetTop <= currentScroll &&
                section.offsetTop + section.offsetHeight > currentScroll)
            {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        })
    }

    init() {
        this.stickmenu();
        this.watchmenu();
    }
};

