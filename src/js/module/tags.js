import gsap from 'gsap';

const handleTags = () => {
    const tags = document.getElementById('tags');
    
    if (!tags) return;

    const list = tags.querySelector('.js-tags');
    const list2 = list.cloneNode(true);

    const dur = 60;

    tags.appendChild(list2);

    const anim1 = gsap.to(list, dur, {
        x: '-100%',
        ease: 'none',
        onComplete: () => gsap.fromTo(list, dur, { x: '100%' }, { x: 0, ease: 'none' }),
        repeat: -1
    });

    const anim2 = gsap.fromTo(list2, dur, { x: 0 }, {
        x: '-100%',
        ease: 'none',
        onComplete: () => gsap.to(list2, dur, { x: '-200%', ease: 'none' }),
        repeat: -1
    });

    tags.addEventListener('mouseenter', () => {
        anim1.pause();
        anim2.pause();
    });

    tags.addEventListener('mouseleave', () => {
        anim1.resume();
        anim2.resume();
    });
};

export default handleTags;
