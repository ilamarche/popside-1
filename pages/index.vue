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
import Hero from './home/hero.vue'
import Concept from './home/concept.vue'
import Trust from './home/trust.vue'
import Expertise from './home/expertise.vue'
import Team from './home/team.vue'
import UseCases from './home/use-cases.vue'
import Contact from './home/contact.vue'

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger);

const handleShapes = () => {
  const shapes = document.querySelectorAll("div[class^='shape-']");

  if (!shapes.length) return;

  shapes.forEach((shape) => {
    gsap.to(shape, {
      x: 50,
      scrollTrigger: {
        trigger: shape,
        start: "top 90%",
        end: "top 10%",
        scrub: true,
        id: "scrub"
      }
    })
  });
};

const handleTexts = () => {
  const texts = document.querySelectorAll("p");

  if (!texts.length) return;

  texts.forEach((text) => {
    gsap.to(text, {
      opacity: 1,
      scrollTrigger: {
        trigger: text,
        start: "top 90%",
        end: "top 10%",
        scrub: true,
        id: "scrub"
      }
    })
  });
};
onMounted(() => {
  handleShapes()
  handleTexts()
})
</script>

<style>
p {
  opacity: 0;
}
</style>