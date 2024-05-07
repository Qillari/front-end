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
        <swiper-slide>
          <div class="background1">
            <div class="container">
              <div class="row">
                <div class="col-4">
                  <div class="flex">
                    <h1>Brilla con elegancia</h1>
                    <button>Explora la colección</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="background2">
            <div class="container">
              <div class="row">
                <div class="col-4">
                  <div class="flex text1">
                    <h2>Vínculos inquebrantables, joyas eternas</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="background3">
            <div class="container">
              <div class="row">
                <div class="col-4" align="left">
                  <div class="flex text1">
                    <h2>Detalles que resaltan tu esencia</h2>
                    <button>Descubre tu estilo</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </swiper-slide>
      </swiper-container>
    </div>
  </div>
</template>

<style scoped>
@font-face {
  font-family: "Brittany";
  src: url("/BrittanySignature.ttf") format("truetype");
  /* Agrega otros formatos si los tienes */
}
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
  .text1 {
    display: none !important
  }
}
@media screen and (min-width: 721px) and (max-width: 960px) {
  .col-4 {
    width: 33.3333%;
  }
  button:hover {
    transform: scale(1.2);
    margin-left: 10px;
    font-weight: bold;
  }
}
@media screen and (min-width: 961px) {
  .col-4 {
    width: 33.3333%;
  }
  button:hover {
    transform: scale(1.2);
    margin-left: 10px;
    font-weight: bold;
  }
}
swiper-container {
  height: 80vh;
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
  transition: transform 0.3s ease, margin 0.3s ease, font-weight 0.3s ease;
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
h1,
h2 {
  color: white;
  font-family: "Brittany";
  font-size: 40px;
}
.background1 {
  height: 100%;
  background-size: cover;
  background-position: top; 
  background-image: url("/inicio/parte1/ima2-webp-compu.webp");
}
.background2 {
  height: 100%;
  background-size: cover;
  background-position: 50% 10%; 
  background-image: url("/inicio/parte1/ima3-webp-compu.webp");
}
.background3 {
  height: 100%;
  background-size: cover;
  background-position: top; 
  background-image: url("/inicio/parte1/ima4-webp-compu.webp");
}
.flex {
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
}
</style>

<script setup>
useHead({
  script: [
    {
      src: "https://cdn.jsdelivr.net/npm/swiper@11/swiper-element-bundle.min.js",
    },
  ],
});
</script>
