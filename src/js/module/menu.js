import { gsap, ScrollToPlugin } from 'gsap/all';

const handleMenu = () => {
    const menu = document.getElementById('menu');
    const burger = document.getElementById('burger');

    if (!menu || !burger) return;

    const main = document.getElementById('main');

    const b1 = burger.querySelector('#b1');
    const b2 = burger.querySelector('#b2');
    const b3 = burger.querySelector('#b3');

    const items = menu.querySelectorAll('li');
    const links = menu.querySelectorAll('a');

    const tl = gsap.timeline({ paused: true });

    const closeMenu = () => {
        tl.reverse();

        gsap.to(menu, 0.3, {
            opacity: 0,
            onComplete: () => {
                gsap.set(items, { y: -10, opacity: 0 });
                gsap.set(menu, { visibility: 'hidden' });
            }
        });

        main.classList.remove('menu-on');
    };

    const openMenu = () => {
        tl.play();

        gsap.to(menu, 0.3, { visibility: 'visible', opacity: 1, delay: 0.25, ease: 'power1.inOut' });
        gsap.to(items, 0.2, { y: 0, opacity: 1, stagger: 0.1, delay: 0.25, ease: 'power1.inOut' });

        main.classList.add('menu-on');
    };

    gsap.registerPlugin(ScrollToPlugin);

    tl.to(burger, 0.1, { rotation: -135, scaleX: 0.2, ease: 'power1.inOut' }, 0);
    tl.to(b1, 0.1, { y: 12, ease: 'power1.inOut' }, 0);
    tl.to(b3, 0.1, { y: -12, ease: 'power1.inOut' }, 0);
    tl.set(b2, { rotation: -90, scaleX: 0, ease: 'power1.inOut' });
    tl.to(burger, 0.2, { scaleX: 1, delay: 0.2, ease: 'power1.inOut' });
    tl.to(b2, 0.2, { scaleX: 1, ease: 'power1.inOut' });

    burger.addEventListener('click', () => {
        main.classList.contains('menu-on') ? closeMenu() : openMenu();
    }, false);

    menu.addEventListener('click', closeMenu, false);

    links.forEach(link => link.addEventListener('click', e => {
        e.preventDefault();
        gsap.to(window, 0.5, { scrollTo: e.target.hash, ease: 'power1.inOut' });
    }, false));
};

export default handleMenu;
