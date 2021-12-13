import gsap from 'gsap';

import handleHeader from './header';
import handleCatchphrase from './catchphrase';

const handleLoad = () => {
    const hero = document.getElementById('hero');
    const shapes = document.getElementById('shapes');
    const header = document.getElementById('header');
    const catchphrase = document.getElementById('catchphrase');

    if (!shapes) return;

    const elts = shapes.querySelectorAll('.js-shape');
    const arcs = [elts[0], elts[1], elts[2]];

    const title = document.getElementById('shapes-title');

    gsap.set(arcs, { opacity: 0, x: -70, scaleX: 0.8, transformOrigin: '0 50%' });
    gsap.set(elts[3], { opacity: 0, x: -100 });
    gsap.set(title, { opacity: 0, y: 10 });

    gsap.set(header, { y: '-100%' });
    gsap.set(catchphrase, { y: '100% ' });

    gsap.to(arcs, 0.7, { opacity: 1, x: 0, scaleX: 1, stagger: 0.15, delay: 0.2, ease: 'power1.inOut' });
    gsap.to(elts[3], 0.7, {
        opacity: 1,
        x: 0,
        delay: 0.9,
        ease: 'power1.inOut',
        onComplete: () => {
            gsap.to(title, 0.3, { opacity: 1, y: 0 });

            gsap.set(header, {
                y: 0,
                delay: 0.35,
                clearProps: 'y',
                onComplete: handleHeader,
                onCompleteParams: [header, hero]
            });
            gsap.to(catchphrase, 0.5, {
                y: 0,
                delay: 1,
                ease: 'power1.inOut',
                onComplete: handleCatchphrase,
                onCompleteParams: [catchphrase]
            });
            gsap.to(hero, 0.5, { height: '95vh', delay: 1.4 });
        }
    });
};

export default handleLoad;
