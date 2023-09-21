<template>
  <CHeader />
  <slot />
  <CFooter />
</template>

<script setup lang="ts">
useSeoMeta({
  charset: "utf-8",
  ogType: "website",
  ogUrl: "https://popside.fr",
  ogSiteName: "Popside",
  title: "Popside — Immersions numériques",
  ogTitle: "Popside — Immersions numériques",
  description:
    "Nous concevons des dispositifs numériques interactif pour tous les publics de musées, tourisme et marques.",
  ogDescription:
    "Nous concevons des dispositifs numériques interactif pour tous les publics de musées, tourisme et marques.",
  ogImage: "https://popside.fr/popside.png",
  twitterCard: "summary",
  msapplicationTileColor: "#ffffff",
  themeColor: "#ffffff",
  contentSecurityPolicy: {
    manifestSrc: "https://popside.fr/site.webmanifest",
  },
  robots: "index, follow",
  googlebot: null,
  googleSiteVerification: "rknZiUBaAg0LZM_2fQdao637jqhq-DqPzKdrxklJl7Q",
});
</script>

<style lang="scss">
html {
  background-color: $primary;
}
.wrapper {
  opacity: 0;
}

.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>
