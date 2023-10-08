<template>
  <main role="main" class="main" id="main">
    <Hero />
    <Concept />
    <Trust />
    <Expertise />
    <Team />
    <UseCases />
    <Contact />
  </main>
</template>

<script setup lang="ts">
import Hero from "./home/hero.vue";
import Concept from "./home/concept.vue";
import Trust from "./home/trust.vue";
import Expertise from "./home/expertise.vue";
import Team from "./home/team.vue";
import UseCases from "./home/use-cases.vue";
import Contact from "./home/contact.vue";
import { onMounted, nextTick } from "vue";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const handleShapes = () => {
  const shapesLeft = document.querySelectorAll("div.shape-left");
  const shapesRight = document.querySelectorAll("div.shape-right");
  const shapesPulse = document.querySelectorAll("div.shape-pulse");
  const shapesRotate = document.querySelectorAll("div.shape-rotate");

  shapesLeft.forEach((shape) => {
    gsap.to(shape, {
      x: 50,
      scrollTrigger: {
        trigger: shape,
        start: "top 90%",
        end: "top 10%",
        scrub: true,
        pin: false,
      },
    });
  });
  shapesRight.forEach((shape) => {
    gsap.to(shape, {
      x: -50,
      yoyo: true,
      scrollTrigger: {
        trigger: shape,
        start: "top 90%",
        end: "top 10%",
        scrub: true,
        pin: false,
      },
    });
  });
  shapesPulse.forEach((shape) => {
    gsap.to(shape, {
      scale: 1.06,
      repeat: -1,
      yoyo: true,
      ease: gsap.easeNone,
    });
  });
  shapesRotate.forEach((shape) => {
    gsap.to(shape, {
      rotation: 360,
      repeat: -1,
      duration: 6,
      yoyo: true,
      ease: gsap.easeNone,
    });
  });
};

const handleOpacity = (contents: NodeList) => {
  if (!contents.length) return;

  contents.forEach((content: Node) => {
    gsap.to(content, {
      opacity: 1,
      scrollTrigger: {
        trigger: content,
        start: "top 95%",
        end: "top 5%",
        scrub: 1,
        pin: false,
      },
    });
  });
};

nextTick(() => {
  handleShapes();
  handleOpacity(document.querySelectorAll("p"));
  handleOpacity(document.querySelectorAll("h2"));
  handleOpacity(document.querySelectorAll("h3"));
  handleOpacity(document.querySelectorAll("img"));
});
</script>

<style>
p, h2, h3, img {
  opacity: 0;
}

.shape-left {
  margin-right: 50px;
}

.shape-right {
  margin-left: 50px;
}
</style>
