<template>
  <div>
    <div>
      <swiper-container
          slides-per-view="1"
          speed="500"
          loop="true"
          autoplay-delay="2500"
          autoplay-disable-on-interaction="false"
        >
          <swiper-slide
            v-for="n in fondos"
          >
          <div :style="{ 'background-color': n }" style="width: 100%; height: 100%"></div>
        </swiper-slide>
        </swiper-container>
    </div>
  </div>
</template>

<style scoped>
@media screen and (max-width: 720px) {
  .col-6 {
    text-align: center;
  }
  h1 {
    text-align: justify;
  }
  button:hover {
    transform: scale(1.2);
    font-weight: bold;
  }
}
@media screen and (min-width: 721px) and (max-width: 960px) {
  .col-6 {
    width: 75%;
  }
  button:hover {
    transform: scale(1.2);
    margin-left: 10px;
    font-weight: bold;
  }
}
@media screen and (min-width: 961px) {
  .col-6 {
    width: 50%;
  }
  button:hover {
    transform: scale(1.2);
    margin-left: 10px;
    font-weight: bold;
  }
}
swiper-container {
  height: 100vh;
  width: 100%;
  position: relative;
  z-index: 1;
}
swiper-slide {
  width: 100%;
}
button {
  width: 160px;
  height: 30px;
  border-radius: 30px;
  background-color: rgba(255, 255, 255, 0.897);
  border-color: transparent;
  cursor: pointer;
  transition: transform 0.3s ease, margin 0.3s;
}
button:hover {
  transform: scale(1.2);
  margin-left: 10px;
  font-weight: bold;
}
.fixed {
  position: fixed;
  width: 100%;
  height: 80vh;
  min-height: 500px;
  background-image: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)),
    url("/public/inicio/parte1/ima1.webp");
}
.cuadro {
  position: relative;
  width: 100%;
  height: 80vh;
  min-height: 500px;
}
.container {
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
  height: 100%;
}
.row {
  display: flex;
  flex-wrap: wrap;
  margin-left: 0;
  margin-right: 0;
  align-items: center;
  height: 100%;
}
p,
h1 {
  color: white;
  font-family: "Segoe UI";
}
</style>

<script>
export default {
  data() {
    return {
      fondos: ["red", "blue", "grey"],
    };
  },
};
</script>

<script setup>
useHead({
  script: [
    {
      src: "https://cdn.jsdelivr.net/npm/swiper@11/swiper-element-bundle.min.js",
    },
  ],
});
</script>