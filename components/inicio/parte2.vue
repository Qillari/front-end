<template>
  <div style="position: relative; background-color: white">
    <br />
    <div class="container">
      <div class="columns">
        <NuxtLink
          v-for="producto in productos"
          :key="producto"
          class="card"
          :style="{
            'background-image': `linear-gradient(to right, rgba(255,255,255,0), rgba(255,255,255,0)), url(${producto.ima})`,
          }"
          :to="producto.link"
          v-scrolls
        >
          <div class="container" style="position: relative">
            <h2>
              {{ producto.nombre }}
            </h2>
          </div>
          <div class="efect"></div>
        </NuxtLink>
        <br />
      </div>
    </div>
  </div>
</template>

<style scoped>
@media screen and (max-width: 500px) {
  .columns {
    display: grid;
    grid-template-columns: repeat(1, minmax(0, 1fr));
    column-gap: 20px;
  }
}
@media screen and (min-width: 501px) {
  .columns {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    column-gap: 20px;
  }
}
.container {
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
  height: 100%;
}
h2 {
  font-size: 35px;
  margin: 0;
  margin-bottom: 10px;
  color: white;
  position: absolute;
  bottom: 0;
  font-family: "Segoe UI";
}
.card {
  border-radius: 4px;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  cursor: pointer;
  position: relative;
  z-index: 2;
  margin-bottom: 20px;
  background-size: cover;
  background-position: center center;
  min-height: 300px;
  transition: transform 0.3s;
}
.card:hover {
  transform: translateY(-10px);
}
.centro {
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
}
.efect {
  background-color: rgba(0, 0, 0, 1);
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 2;
  top: 0;
  transition: opacity 0.3s;
}
.efect:hover {
  opacity: 0.1;
}
.before-enter {
  opacity: 0;
  transform: translateX(100px);
  transition: all 1s ease-out;
}
.enter {
  opacity: 1;
  transform: translateX(0px);
}
</style>

<script>
export default {
  data() {
    return {
      productos: [
        {
          nombre: "Aretes",
          ima: "/inicio/parte2/aretes.webp",
          link: "/productos/aretes",
          title: "",
        },
        {
          nombre: "Anillos",
          ima: "/inicio/parte2/anillos.webp",
          link: "/productos/anillos",
          title: "",
        },
        {
          nombre: "Collares",
          ima: "/inicio/parte2/collar.webp",
          link: "/productos/collares",
          title: "",
        },
        {
          nombre: "Pulsera",
          ima: "/inicio/parte2/pulsera.webp",
          link: "/productos/pulseras",
          title: "",
        },
      ],
    };
  },
};
</script>
