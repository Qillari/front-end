<template>
  <div style="position: relative; background-color: white">
    <div class="container">
      <br />
      <h2 class="texto" align="center">ALGUNAS DE NUESTRAS JOYAS</h2>
      <br />
      <div class="columns">
        <NuxtLink
          v-for="producto in productos"
          :key="producto"
          class="card"
          :to="producto.link"
          v-scrolls
        >
          <picture>
            <source
              :srcset="producto.srcset"
              class="imagen"
              media="(min-width: 500px)"
              style="width: 100%; height: 250px; object-fit: contain"
              :alt="producto.alt"
              loading="lazy"
            />
            <img
              :src="producto.ima"
              style="width: 100%; height: 250px; object-fit: contain"
              :alt="producto.alt"
              loading="lazy"
            />
          </picture>
          <div class="container">
            <br />
            <h3 align="center" class="nomb">{{ producto.nombre }}</h3>
            <div style="display: flex; justify-content: center;">
              <p align="center" style="color: grey; text-decoration: line-through; margin: 0 10px;">{{ producto.precio_descuento }}</p>
              <p align="center" style="color: black; font-size: 35px; margin: 0">S/. {{ producto.precio }}</p>
            </div>
            <br />
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
@media screen and (min-width: 501px) and (max-width: 720px) {
  .columns {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    column-gap: 20px;
  }
}
@media screen and (min-width: 721px) and (max-width: 960px) {
  .columns {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    column-gap: 20px;
  }
}
@media screen and (min-width: 961px) and (max-width: 1140px) {
  .columns {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    column-gap: 20px;
  }
}
@media screen and (min-width: 1141px) {
  .columns {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
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
}
.card {
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  cursor: pointer;
  position: relative;
  z-index: 2;
  margin-bottom: 20px;
  transition: transform 0.3s;
  color: black;
  text-decoration: none;
}
.card:hover {
  transform: translateY(-10px);
}
.texto {
  z-index: 2;
  position: relative;
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
          id: "000001",
          nombre: "Anillo Aurora",
          alt: "Anillo Aurora",
          ima: "/productos-webp/anillos/aurora.webp",
          srcset:
            "/productos-webp/anillos/aurora.webp 500w, /productos-webp/anillos/aurora.webp 1000w",
          link: "/productos/anillos/aurora",
          precio: 55,
          precio_descuento: 66,
        },
        {
          id: "000007",
          nombre: "Aretes Argollas tamaño L",
          ima: "/productos-webp/aretes/argollas-tamaño-l/ima1-opcion2.webp",
          alt: "Aretes Argollas tamaño L",
          srcset:
            "/productos-webp/aretes/argollas-tamaño-l/ima1-cel-opcion2.webp 500w, /productos-webp/aretes/argollas-tamaño-l/ima1-opcion2.webp 1000w",
          link: "/productos/aretes/argollas-tamano-l",
          precio: 94,
          precio_descuento: 112.9,
        },
        {
          id: "0000024",
          nombre: "Pulsera Arbol De La Vida Regulable",
          ima: "/productos-webp/pulseras/regulable-arbol-de-la-vida/ima1.webp",
          alt: "Pulsera Arbol De La Vida Regulable",
          srcset:
            "/productos-webp/pulseras/regulable-arbol-de-la-vida/ima1-cel.webp 500w, /productos-webp/pulseras/regulable-arbol-de-la-vida/ima1.webp 1000w",
          link: "/productos/pulseras/arbol-de-la-vida-regulable",
          precio: 110,
          precio_descuento: 137.9,
        },
      ],
    };
  },
};
</script>
