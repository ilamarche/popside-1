import gsap from 'gsap';
import { DrawSVGPlugin } from 'gsap/DrawSVGPlugin';

const handleSvgs = () => {
    const svgs = document.querySelectorAll('.js-svg-wrapper');

    if (!svgs.length) return;

    const paths = document.querySelectorAll('.js-path');

    let lastScrollPos = 0;
    let tick = false;

    const animSvgs = (scrollPos) => {
        svgs.forEach(svg => {
            if (scrollPos + window.innerHeight > svg.offsetTop + 300) {
                gsap.to(svg.querySelectorAll('.js-path'), 0.5, { drawSVG: '100%' });
            }
        });
    };

    window.addEventListener('scroll', () => {
        lastScrollPos = window.scrollY;

        if (!tick) {
            window.requestAnimationFrame(() => {
                animSvgs(lastScrollPos);
                tick = false;
            });

            tick = true;
        }
    });

    gsap.registerPlugin(DrawSVGPlugin);
    gsap.set(paths, { drawSVG: 0 });
};

export default handleSvgs;
