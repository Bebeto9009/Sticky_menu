class Menu {

    constructor(nav) {
        this.menuTop = nav.offsetTop;
        this.links = nav.querySelectorAll('li a');
    }

    stickmenu() {
        if (window.scrollY >= this.menuTop){
            document.body.classList.add('sticky-nav');
        } else {
            document.body.classList.remove('sticky-nav');
        }
    }

    watchmenu() {
        let currentScroll = window.scrollY;

        this.links.forEach(link => {
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

    events() {
        window.addEventListener('scroll', () => {
            this.stickmenu();
            this.watchmenu();
        }, false);
    }

    init() {
        this.events();
    }
}

export default Menu;
