import gsap from 'gsap';
import { DrawSVGPlugin } from 'gsap/DrawSVGPlugin';

const handleSvgs = () => {
    const svgs = document.querySelectorAll('.js-svg-wrapper');

    if (!svgs.length) return;

    const paths = document.querySelectorAll('.js-path');

    let observer = new IntersectionObserver(entries => { 
        entries.forEach(entry => {
            if (entry.intersectionRatio > 0.2) {
                gsap.to(entry.target.querySelectorAll('.js-path'), 0.5, { drawSVG: '100%' });
                observer.unobserve(entry.target);
            }
        });
    },
    {
        threshold: 1.0
    });

    svgs.forEach(svg => observer.observe(svg));

    gsap.registerPlugin(DrawSVGPlugin);
    gsap.set(paths, { drawSVG: 0 });
};

export default handleSvgs;
