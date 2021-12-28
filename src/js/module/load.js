import gsap from 'gsap';

import handleHeader from './header';
// import handleCatchphrase from './catchphrase';

const handleLoad = () => {
    const hero = document.getElementById('hero');
    const shapes = document.getElementById('shapes');
    const header = document.getElementById('header');
    const catchphrase = document.getElementById('hero-subtitle');

    if (!shapes) {
        handleHeader(header, hero);
        return;
    }

    const elts = shapes.querySelectorAll('.js-shape');
    const arcs = [elts[0], elts[1], elts[2]];

    const title = document.getElementById('shapes-title');

    const map = (value, x1, y1, x2, y2) => (value - x1) * (y2 - x2) / (y1 - x1) + x2;

    const parallax = e => {
        const w = window.innerWidth / 2;
        const mouseX = e.clientX;

        return {
            x: (mouseX - w),
            y: (e.clientY - window.innerHeight / 2),
            scale: map((mouseX - w), -w, w, 0.9, 1.05)
        };
    };

    gsap.set(arcs, { opacity: 0, x: -50, scaleX: 0.8, transformOrigin: '0 50%' });
    gsap.set(elts[3], { opacity: 0, scale: 0.4, transformOrigin: '50%' });
    gsap.set([title, catchphrase], { opacity: 0, y: 20 });

    gsap.set(header, { y: '-100%' });

    gsap.to(arcs, 0.6, { opacity: 1, x: 0, scaleX: 1, stagger: 0.1, delay: 0.2, ease: 'power1.out' });
    gsap.to(elts[3], 0.6, {
        opacity: 1,
        scale: 1,
        delay: 0.5,
        ease: 'bounce.out',
        onComplete: () => {
            gsap.to([title, catchphrase], 0.5, { opacity: 1, y: 0, stagger: 0.15 });

            gsap.set(header, {
                y: 0,
                delay: 0.35,
                clearProps: 'y',
                onComplete: handleHeader,
                onCompleteParams: [header, hero]
            });

            if (window.innerWidth >= 960) {
                gsap.to(hero, 0.5, { height: '98vh', delay: 0.9 });

                hero.addEventListener('mousemove', e => {
                    const parallaxVals = parallax(e);
                    const lastArcX = parallaxVals.x * -0.005 > 0 ? 0 : parallaxVals.x * -0.005;

                    gsap.to(arcs[0], 0.2, { x: parallaxVals.x * -0.015, opacity: parallaxVals.scale });
                    gsap.to(arcs[1], 0.2, { x: parallaxVals.x * -0.01, opacity: parallaxVals.scale });
                    gsap.to(arcs[2], 0.2, { x: lastArcX, opacity: parallaxVals.scale });
                    gsap.to(elts[3], 0.2, { scale: parallaxVals.scale, opacity: parallaxVals.scale });
                });
            }
        }
    });
};

export default handleLoad;
