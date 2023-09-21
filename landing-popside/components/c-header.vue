<template>
  <header role="banner" class="header" id="header">
    <nav class="container-big nav">
      <a href="./" class="logo" id="logo">
        <span class="sr-only">Popside</span>
        <svg class="icon" viewBox="0 0 133 32" xmlns="http://www.w3.org/2000/svg">
          <path class="logo-stroke"
            d="M17.66 10.512c0 6.468-4.213 10.426-10.553 10.426h-0.084v10.382h-7.022v-30.638h7.107c6.34 0 10.553 2.978 10.553 9.83zM10.77 10.512c0-3.192-1.362-4.893-3.66-4.893h-0.084v10.382h0.084c2.294 0 3.657-2.043 3.657-5.489z">
          </path>
          <path class="logo-stroke"
            d="M19.957 16.128c0-10.937 3.362-16.128 9.831-16.128 6.424 0 9.83 5.191 9.83 16.128 0 10.596-3.405 15.872-9.83 15.872-6.469 0-9.831-5.276-9.831-15.872zM32.17 16.128c0-7.191-0.808-10.723-2.341-10.723-1.659 0-2.425 3.533-2.425 10.723 0 7.022 0.766 10.469 2.425 10.469 1.533 0.005 2.341-3.44 2.341-10.469z">
          </path>
          <path class="logo-stroke"
            d="M60.979 10.512c0 6.468-4.213 10.426-10.553 10.426h-0.084v10.382h-7.022v-30.638h7.107c6.34 0 10.553 2.978 10.553 9.83zM54.089 10.512c0-3.192-1.362-4.893-3.66-4.893h-0.084v10.382h0.084c2.294 0 3.657-2.043 3.657-5.489z">
          </path>
          <path class="logo-stroke"
            d="M62.98 21.872l6.383-0.127c-0.172 3.49 0.935 5.064 2.213 5.064 1.531 0 1.872-1.319 1.872-2.553 0-2.043-1.278-3.915-4.554-6.638-3.192-2.639-5.448-5.32-5.448-9.873 0-5.022 3.789-7.751 8.469-7.751 5.362 0 8.681 3.15 8.469 9.404l-6.171 0.172c0.214-3.1-0.68-4.638-1.788-4.638s-1.872 0.897-1.872 2.642c0 1.872 0.639 3.235 3.831 5.958 4.042 3.445 6.468 6.297 6.468 10.679 0 4.427-3.064 7.787-8.808 7.787-5.916 0.002-9.447-2.813-9.063-10.126z">
          </path>
          <path d="M84.212 13.621h7.191v17.699h-7.191z"></path>
          <path
            d="M114.896 16.171c0 9.106-2.928 15.148-11.235 15.148h-7.361v-30.638h7.361c8.298 0 11.235 6.127 11.235 15.489zM107.49 16.171c0-6.001-0.935-10.553-3.831-10.553h-0.553v20.724h0.553c2.599 0 3.832-4.342 3.832-10.171z">
          </path>
          <path class="logo-stroke"
            d="M132.599 25.489v5.83h-13.999v-30.638h13.915v5.829h-6.469v6.469h6.128v5.527h-6.128v6.977z"></path>
          <path class="logo-dot" d="M83.474 5.017l4.336-4.336 4.336 4.336-4.336 4.336-4.336-4.336z"></path>
        </svg>
      </a>

      <button type="button" class="burger" id="burger">
        Menu<div id="b1"></div>
        <div id="b2"></div>
        <div id="b3"></div>
      </button>

      <ul class="menu" id="menu">
        <li>
          <a href="#concept" data-home="true">Concept</a>
        </li>
        <li>
          <a href="#expertise" data-home="true">Expertise</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { gsap, ScrollToPlugin } from 'gsap/all';

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

  animHeader(window.scrollY);
};

const handleMenu = () => {
  const menu = document.getElementById('menu');
  const burger = document.getElementById('burger');

  if (!menu || !burger) return;

  const main = document.getElementById('main');

  const b1 = burger.querySelector('#b1');
  const b2 = burger.querySelector('#b2');
  const b3 = burger.querySelector('#b3');

  const items = menu.querySelectorAll('li');
  const links = menu.querySelectorAll('a');

  const tl = gsap.timeline({ paused: true });

  const closeMenu = () => {
    tl.reverse();

    gsap.to(menu, 0.3, {
      opacity: 0,
      onComplete: () => {
        gsap.set(items, { y: -10, opacity: 0 });
        gsap.set(menu, { visibility: 'hidden' });
      }
    });

    main.classList.remove('menu-on');
  };

  const openMenu = () => {
    tl.play();

    gsap.to(menu, 0.3, { visibility: 'visible', opacity: 1, delay: 0.25, ease: 'power1.inOut' });
    gsap.to(items, 0.2, { y: 0, opacity: 1, stagger: 0.1, delay: 0.25, ease: 'power1.inOut' });

    main.classList.add('menu-on');
  };

  gsap.registerPlugin(ScrollToPlugin);

  tl.to(burger, 0.1, { rotation: -135, scaleX: 0.2, ease: 'power1.inOut' }, 0);
  tl.to(b1, 0.1, { y: 12, ease: 'power1.inOut' }, 0);
  tl.to(b3, 0.1, { y: -12, ease: 'power1.inOut' }, 0);
  tl.set(b2, { rotation: -90, scaleX: 0, ease: 'power1.inOut' });
  tl.to(burger, 0.2, { scaleX: 1, delay: 0.2, ease: 'power1.inOut' });
  tl.to(b2, 0.2, { scaleX: 1, ease: 'power1.inOut' });

  burger.addEventListener('click', () => {
    main.classList.contains('menu-on') ? closeMenu() : openMenu();
  }, false);

  menu.addEventListener('click', closeMenu, false);

  links.forEach(link => link.addEventListener('click', (e) => {
    if (e.target.dataset.home && location.pathname !== '/') {
      window.location.href = `./${e.target.hash}`;
      return;
    }

    e.preventDefault();
    gsap.to(window, 0.5, { scrollTo: e.target.hash, ease: 'power1.inOut' });
    e.target.blur();
  }, false));
};

onMounted(() => {
  const header = document.getElementById('header');
  const hero = document.getElementById('hero');

  handleHeader(header, hero);
  handleMenu();
});

</script>

<style lang="scss" scoped>
.header {
  width: 100%;
  padding: 0px 0 0;
  position: fixed;
  left: 0;
  z-index: 100;
  font-family: $mono;
  font-size: 3rem;
  color: #fff;
  transition: transform $transition;
  background: $primary;
  background: linear-gradient(180deg, rgba($primary, 0.3477766106442577) 0%, rgba($primary, 0) 100%);

  &.off {
    transform: translate3d(0, -100%, 0);
  }
}

.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  transition: transform $transition, background $transition;

  .small & {
    background: $primary;
    transform: translate3d(0, -0px, 0);

    &::after {
      top: auto;
      bottom: 0;
    }
  }

  &::after {
    content: '';
    height: 1px;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background: #fff;
    transition: $transition;
  }

  .logo {
    width: 137px;
    height: 33px;
    margin: 20px 0;
  }
}

.menu {
  margin: 0;
  position: absolute;
  top: 30vh;
  left: 0;
  right: 0;
  text-align: center;
  visibility: hidden;
  opacity: 0;

  >li {
    position: relative;
    margin: 0 0 10vh;
    opacity: 0;
    transform: translate3d(0, -10px, 0);
  }

  a {
    text-decoration: none;

    &::after {
      content: '';
      width: 9px;
      height: 9px;
      position: absolute;
      top: 8px;
      left: -20px;
      background: #fff;
      transform: rotate(45deg) scale(0);
      transition: 0.2s ease-out;
    }

    &:hover,
    &:focus {
      &::after {
        transform: rotate(45deg) scale(1);
      }
    }
  }
}

.burger {
  width: 31px;
  height: 30px;
  position: relative;
  margin: -1px 0 0;
  overflow: hidden;
  text-indent: -999em;

  >div {
    width: 100%;
    height: 6px;
    position: absolute;
    left: 0;
    background: #fff;

    &:first-child {
      top: 0;
    }

    &:nth-child(2) {
      top: 12px;
    }

    &:nth-child(3) {
      bottom: 0;
    }
  }
}

@media (min-width: $phone) {
  .header {
    font-size: 1.8rem;
  }

  .menu {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 50%;
    position: static;
    visibility: visible !important;
    opacity: 1 !important;

    >li {
      margin: 0;
      opacity: 1 !important;
      transform: none !important;
    }
  }

  .burger {
    display: none;
  }
}

@media (min-width: $tablet) {
  .menu {
    width: 35%;
  }
}
</style>