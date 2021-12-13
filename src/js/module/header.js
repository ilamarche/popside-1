const handleHeader = (header, hero) => {
    if (!header || !hero) return;

    let lastScrollPos = 0;
    let tick = false;

    const animHeader = (scrollPos) => {
        if (scrollPos > 50) {
            header.classList.add('small');
            header.classList.add('off');

            if (scrollPos > hero.getBoundingClientRect().height - 10) {
                header.classList.remove('off');
            }
        } else {
            header.classList.remove('small');
            header.classList.remove('off');
        }
    };

    window.addEventListener('scroll', () => {
        lastScrollPos = window.scrollY;

        if (!tick) {
            window.requestAnimationFrame(() => {
                animHeader(lastScrollPos);
                tick = false;
            });

            tick = true;
        }
    });
};

export default handleHeader;
