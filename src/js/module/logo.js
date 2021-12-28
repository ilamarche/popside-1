import gsap from 'gsap';

const handleLogo = () => {
    const logo = document.getElementById('logo');

    if (!logo) return;

    const dot = logo.querySelector('.logo-dot');

    gsap.set(dot, { transformOrigin: '50%' });

    logo.addEventListener('mouseenter', () => {
        gsap.to(dot, 0.3, { rotation: '+=180' });
    });
};

export default handleLogo;
