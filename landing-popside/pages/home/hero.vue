<template>
  <header class="hero home-hero" ref="hero" id="hero">
    <div class="container">
      <video class="hero-background" autoplay muted poster="~/assets/img/hero-background-1.png">
        <source src="~/assets/video/hero-background-1.mp4" type="video/mp4">
      </video>
      <video class="hero-background" muted poster="~/assets/img/hero-background-2.png">
        <source src="~/assets/video/hero-background-2.mp4" type="video/mp4">
      </video>
      <LottieAnimation ref="lplayer" class="hero-transition" :auto-play="false" :animation-data="TransitionJSON" />
      <h1 class="hero-title" id="title">
        <span>(Re)</span>
        Découvrons<br> le réel
      </h1>
    </div>
  </header>
</template>
  
<script setup lang="ts">
import { LottieAnimation } from "lottie-web-vue"
import TransitionJSON from "~/assets/video/transition.json"

let lplayer = ref()
let hero = ref()

const handleLoad = () => {
  const heroLottie = document.querySelector('.hero-transition');
  const heroBackgrounds = document.querySelectorAll('.hero-background');
  let indexCurrentBackground = 0;

  function handleResize() {
    const ratio = TransitionJSON.w / TransitionJSON.h;
    if (ratio < hero.value.offsetWidth / hero.value.offsetHeight) {
      heroLottie.style.width = `${hero.value.offsetWidth}px`;
      heroLottie.style.height = `${hero.value.offsetWidth / ratio}px`;
    } else {
      heroLottie.style.width = `${hero.value.offsetHeight * ratio}px`;
      heroLottie.style.height = `${hero.value.offsetHeight}px`;
    }
  }

  handleResize();
  window.addEventListener('resize', handleResize);

  heroBackgrounds.forEach((background) => {
    background.style.zIndex = -1;
    background.addEventListener('ended', () => {
      indexCurrentBackground = indexCurrentBackground === heroBackgrounds.length - 1 ? 0 : indexCurrentBackground + 1;
      lplayer.value.goToAndPlay(0, true);
      setTimeout(() => {
        background.style.zIndex = -1;
        heroBackgrounds[indexCurrentBackground].style.zIndex = 0;
        heroBackgrounds[indexCurrentBackground].play();
      }, 500);
    });
  });
  heroBackgrounds[0].style.zIndex = 0;
};

onMounted(() => {
  handleLoad();
});

</script>
  
<style lang="scss">
.hero {
  padding: 140px 0 70px;
  position: relative;
  overflow: hidden;
  color: #fff;

  &.hero-small {
    .container {
      max-width: 1000px;
    }
  }

  &.home-hero {
    height: 100vh;
    padding: 0;
  }

  &-transition {
    width: 100vw;
    height: 100vh;
    object-fit: cover;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
  }

  &-background {
    width: 100vw;
    height: 100vh;
    object-fit: cover;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
  }

  &-title {
    z-index: 1;
    bottom: 12.5rem;
    position: absolute;

    >span {
      position: absolute;
      top: 5px;
      left: -2em;
      font-size: 0.25em;
    }
  }

  &-subtitle {
    position: relative;
    margin: 20px 0 0;
    z-index: 1;
    font-size: 2.5rem;
    line-height: 1.4;
    font-weight: 400;
  }

  &-circle {
    margin: -10%;
  }
}

@media (min-width: $phone) {
  .hero {
    padding-top: 180px;
  }
}

@media (max-height: $tablet) and (orientation: landscape) {
  .hero {
    &-title {
      bottom: 5rem;
      font-size: 5rem;
    }
  }
}

@media (min-width: $desktop-small) {
  .hero {
    display: flex;
    align-items: center;
    padding: 200px 0 70px;

    &-subtitle {
      max-width: 50%;
    }
  }
}

@media (min-width: $desktop) {
  .hero {
    &-subtitle {
      max-width: 35%;
    }
  }
}
</style>
  