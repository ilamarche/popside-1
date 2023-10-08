<template>
  <header class="hero home-hero" ref="hero" id="hero">
    <div class="container">
      <video class="hero-background" autoplay muted playsinline poster="~/assets/img/hero-background-1.png">
        <source src="~/assets/video/hero-background-1.mp4" type="video/mp4" />
      </video>
      <video class="hero-background" muted playsinline poster="~/assets/img/hero-background-2.png">
        <source src="~/assets/video/hero-background-2.mp4" type="video/mp4" />
      </video>
      <video class="hero-background" muted playsinline poster="~/assets/img/hero-background-3.png">
        <source src="~/assets/video/hero-background-3.mp4" type="video/mp4" />
      </video>
      <video class="hero-background" muted playsinline poster="~/assets/img/hero-background-4.png">
        <source src="~/assets/video/hero-background-4.mp4" type="video/mp4" />
      </video>
      <LottieAnimation ref="lplayer" class="hero-transition" :auto-play="false" :animation-data="TransitionJSON" />
      <LottieAnimation class="hero-transition" :auto-play="false" :animation-data="HabillageJSON" />
      <h1 class="hero-title" id="title">
        <span>(Re)</span>
        Découvrons<br />
        le réel
      </h1>
      <div class="shape-1 shape-white"></div>
      <div class="shape-2 shape-tertiary"></div>
      <div class="shape-3 shape-tertiary"></div>
      <div class="shape-4 shape-tertiary"></div>
      <div class="shape-5 shape-white"></div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { LottieAnimation } from "lottie-web-vue";
import TransitionJSON from "~/assets/video/transition.json";
import HabillageJSON from "~/assets/video/habillage.json";

let lplayer = ref();
let hero = ref();

const handleLoad = () => {
  const heroLottie = document.querySelectorAll(".hero-transition");
  const heroBackgrounds = document.querySelectorAll(".hero-background");
  let indexCurrentBackground = 0;

  function handleResize() {
    const ratio = TransitionJSON.w / TransitionJSON.h;
    const isHeroRatioBigger =
      hero.value.offsetWidth / hero.value.offsetHeight > ratio;
    heroLottie.forEach((lottie) => {
      lottie.style.width = `${isHeroRatioBigger
          ? hero.value.offsetWidth
          : hero.value.offsetHeight * ratio
        }px`;
      lottie.style.height = `${isHeroRatioBigger
          ? hero.value.offsetWidth / ratio
          : hero.value.offsetHeight
        }px`;
    });
  }

  handleResize();
  window.addEventListener("resize", handleResize);

  heroBackgrounds.forEach((background) => {
    background.style.zIndex = -1;
    background.addEventListener("ended", () => {
      indexCurrentBackground =
        indexCurrentBackground === heroBackgrounds.length - 1
          ? 0
          : indexCurrentBackground + 1;
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

const stylishLottie = () => {
  const resize = () => {
    if (window.innerWidth > 1680 && g.style.display !== "block") {
      g.style.display = "none";
    } else if (window.innerWidth <= 1680 && g.style.display === "none") {
      g.style.display = "block";
    }
  };
  const heroLottie = document.querySelectorAll(".hero-transition")[1];
  const g = heroLottie.querySelectorAll("g")[10];
  window.addEventListener("resize", resize);
  resize();
};

onMounted(() => {
  handleLoad();
  stylishLottie();
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
    height: 100dvh;
    padding: 0;
  }

  &-transition {
    width: 100vw;
    height: 100vh;
    height: 100dvh;
    object-fit: cover;
    position: absolute;
    left: 0;
    bottom: 0;
  }

  &-background {
    width: 100vw;
    height: 100vh;
    height: 100dvh;
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

@media (max-width: $phone) {
  .hero {
    &-transition:nth-of-type(2) {
      transform: scale(0.7);
      transform-origin: left bottom;
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
