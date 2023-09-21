import handleHeader from './header';
// import handleCatchphrase from './catchphrase';

const handleLoad = () => {
    const hero = document.getElementById('hero');
    const header = document.getElementById('header');
    const heroBackgrounds = document.querySelectorAll('.hero-background');
    const lottiePlayer = document.querySelector('.hero-transition');
    let indexCurrentBackground = 0;
    handleHeader(header, hero);

    function handleResize() {
        const animData = lottiePlayer._lottie.animationData;
        const ratio = animData.w / animData.h;
        if (ratio < hero.offsetWidth / hero.offsetHeight) {
            lottiePlayer.style.width = `${hero.offsetWidth}px`;
            lottiePlayer.style.height = `${hero.offsetWidth / ratio}px`;
        } else {
            lottiePlayer.style.width = `${hero.offsetHeight * ratio}px`;
            lottiePlayer.style.height = `${hero.offsetHeight}px`;
        }
    }

    handleResize();
    window.addEventListener('resize', handleResize);

    heroBackgrounds.forEach((background) => {
        background.style.zIndex = -1;
        background.addEventListener('ended', () => {
            background.style.zIndex = -1;
            indexCurrentBackground = indexCurrentBackground === heroBackgrounds.length - 1 ? 0 : indexCurrentBackground + 1;
            lottiePlayer._lottie.stop();
            lottiePlayer._lottie.play();
            heroBackgrounds[indexCurrentBackground].style.zIndex = 0;
            heroBackgrounds[indexCurrentBackground].play();
        });
    });
    heroBackgrounds[0].style.zIndex = 0;
};

export default handleLoad;
