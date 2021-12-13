import gsap from 'gsap';

const handleShapes = () => {
    const shapes = document.querySelectorAll('.js-shape-wrapper');

    if (!shapes.length) return;

    const circle = document.getElementById('shape-circle').querySelector('.js-shape-elts');
    const arcs = document.getElementById('shape-arcs').querySelectorAll('.js-shape-elts');
    const oval = document.getElementById('shape-oval').querySelector('.js-shape-elts');

    let observer = new IntersectionObserver(entries => { 
        entries.forEach(entry => {
            if (entry.intersectionRatio > 0) {
                gsap.fromTo(circle, 0.6, {scale: 0, transformOrigin: '50%'}, {scale: 1, opacity: 1, ease: 'bounce.out'});
                gsap.fromTo(arcs, 0.6, {scaleX: 0.8, x: -50, transformOrigin: '0 50%'}, {stagger: 0.1, x: 0, delay: 0.5, scaleX: 1, opacity: 1, ease: 'Power1.out'});
                gsap.fromTo(oval, 0.4, {scale: 0.5, rotation: -60, transformOrigin: '50%'}, {scale: 1, rotation: 0, opacity: 1, delay: 1, ease: 'Power1.out'});

                observer.unobserve(entry.target);
            }
        });
    },
    {
        threshold: 1.0
    });

    shapes.forEach(shape => observer.observe(shape));

    gsap.set([circle, arcs, oval], { opacity: 0 });
};

export default handleShapes;
