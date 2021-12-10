import gsap from 'gsap';

const handleCatchphrase = () => {
    const catchphrase = document.getElementById('catchphrase');

    if (!catchphrase) return;

    const phrase = catchphrase.querySelector('span');
    const phrase2 = phrase.cloneNode(true);

    const dur = 25;

    catchphrase.appendChild(phrase2);

    gsap.to(phrase, dur, { x: '-100%', ease: 'none', onComplete: () => {
        gsap.fromTo(phrase, dur, { x: '100%' }, { x: 0, ease: 'none' });
    }, repeat: -1 });

    gsap.fromTo(phrase2, dur, { x: 0 }, { x: '-100%', ease: 'none', onComplete: () => {
        gsap.to(phrase2, dur, { x: '-200%', ease: 'none' });
    }, repeat: -1 });
};

export default handleCatchphrase;
