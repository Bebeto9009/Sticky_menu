import { nav, menuTop } from './index.js';


export default class Menu {
    constructor (){
    };

    watchmenu (){
        console.log('watchmenu menuPosition', menuTop);
        // this.menuTop = menu.offsetTop;
        // console.log('menuTop = ', this.menuTop);
        // console.log('scrollY = ' + window.scrollY);
        if (window.scrollY >= menuTop){
            console.log('scrollY >= menuTop', window.scrollY);
            document.body.classList.add('sticky-nav');
        } else {
            document.body.classList.remove('sticky-nav');
        }
    }

    // events() {
    //     this.watchmenu();
    // }

    init() {
        this.watchmenu();
    }
};

