<template>
    <div style="overflow-x: hidden;">
        <LazyInicioParte1 />
        <LazyInicioParte2 />
        <LazyInicioParte3 />
        <LazyInicioParte5 />
    </div>
</template>

<script setup>
useHead({
  title: "Qillari | Joyería Peruana",
  meta: [
    {
      name: "robots",
      content: "index, follow",
    },
    {
      name: "description",
      content: "Brillando como la luna en la noche, nuestras joyas capturan la esencia celestial.",
    },
    {
      property: "site_name",
      content: "Qillari | Joyería Peruana",
    },
    {
      property: "og:title",
      content: "Qillari | Joyería Peruana",
    },
    {
      property: "og:description",
      content: "Brillando como la luna en la noche, nuestras joyas capturan la esencia celestial.",
    },
    {
      property: "og:image",
      content: "/logo.png",
    },
    {
      property: "og:url",
      content: "/",
    },
    {
      name: "twitter:card",
      content: "summary_large_image",
    },
    {
      name: "twitter:tittle",
      content: "Qillari | Joyería Peruana",
    },
    {
      name: "twitter:description",
      content: "Brillando como la luna en la noche, nuestras joyas capturan la esencia celestial.",
    },
    {
      name: "twitter:image",
      content: "/logo.png",
    },
  ],
  link: [
    {
      rel: 'canonical',
      href: 'https://qillari.com/',
    },
  ],
});
</script>