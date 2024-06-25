<template>
  <div>
    <div class="background">
      <div
        class="container"
        align="center"
        style="align-items: center; display: flex; justify-content: center"
      >
        <br />
        <h1 style="color: white">NUESTROS PRODUCTOS</h1>
        <br />
      </div>
    </div>
    <div class="row display">
      <div class="col-12 display">
        <div class="container display">
          <br />
          <input
            class="input1"
            type="text"
            v-model="buscar"
            placeholder="Buscar"
            @input="validate()"
          />
          <br />
          <br />
          <div class="filtro-precios">
            <label for="precioMin">Precio mínimo:</label>
            <input
              type="range"
              id="precioMin"
              v-model="precioMin"
              :min="precioMinRange"
              :max="precioMaxRange"
              @input="aplicarFiltroPrecio"
            />
            <span> S/. {{ precioMin }}</span>
            <br />
            <label for="precioMax">Precio máximo:</label>
            <input
              type="range"
              id="precioMax"
              v-model="precioMax"
              :min="precioMinRange"
              :max="precioMaxRange"
              @input="aplicarFiltroPrecio"
            />
            <span> S/. {{ precioMax }}</span>
          </div>
          <br />
          <br />
          <button @click="ordenarPorPrecioMax" class="button-precio">
            ver de mayor a menor precio
          </button>
          <br />
          <br />
          <button @click="ordenarPorPrecioMin" class="button-precio">
            ver de menor a mayor precio
          </button>
          <br />
          <br />
        </div>
      </div>
    </div>
    <div class="row">
      <div ref="scrollDiv"></div>
      <div class="col-3" style="background-color: rgba(234, 234, 234, 1)">
        <div :class="{ fixed: isFixed }">
          <div class="container">
            <br />
            <input
              class="input1"
              type="text"
              v-model="buscar"
              placeholder="Buscar"
              @input="validate()"
            />
            <br />
            <br />
            <div class="filtro-precios2">
              <label for="precioMin">Precio mínimo:</label>
              <input
                type="range"
                id="precioMin"
                v-model="precioMin"
                :min="precioMinRange"
                :max="precioMaxRange"
                @input="aplicarFiltroPrecio"
              />
              <span> S/. {{ precioMin }}</span>
              <br />
              <label for="precioMax">Precio máximo:</label>
              <input
                type="range"
                id="precioMax"
                v-model="precioMax"
                :min="precioMinRange"
                :max="precioMaxRange"
                @input="aplicarFiltroPrecio"
              />
              <span> S/. {{ precioMax }}</span>
            </div>
            <br />
            <button @click="ordenarPorPrecioMax" class="button-precio">
              ver de mayor a menor precio
            </button>
            <br />
            <br />
            <button @click="ordenarPorPrecioMin" class="button-precio">
              ver de menor a mayor precio
            </button>
            <br />
            <br />
            <NuxtLink to="/productos" class="link">
              Productos ({{ productos_totales }})
            </NuxtLink>
            <br />
            <NuxtLink to="/productos/anillos" class="link">
              Anillos ({{ anillos_totales }})
            </NuxtLink>
            <br />
            <NuxtLink to="/productos/aretes" class="link">
              Aretes ({{ aretes_totales }})
            </NuxtLink>
            <br />
            <NuxtLink to="/productos/collares" class="link">
              Collares ({{ collares_totales }})
            </NuxtLink>
            <br />
            <NuxtLink to="/productos/pulseras" class="link">
              Pulseras ({{ pulseras_totales }})
            </NuxtLink>
          </div>
        </div>
      </div>
      <div class="col-9">
        <br />
        <div class="container">
          <div class="columns">
            <NuxtLink
              v-for="producto in productosFiltrados"
              :key="producto.producto_id"
              class="card"
              :to="producto.url"
            >
              <picture>
                <source
                  :srcset="producto.fotos[0].srcset"
                  class="imagen"
                  style="width: 100%; height: 250px; object-fit: contain"
                  :alt="producto.nombre"
                  loading="lazy"
                />
                <img
                  :src="producto.fotos[0].src"
                  style="width: 100%; height: 250px; object-fit: contain"
                  :alt="producto.nombre"
                  loading="lazy"
                />
              </picture>
              <div class="container">
                <br />
                <h2 align="center" class="nomb">{{ producto.titulo }}</h2>
                <div style="display: flex; justify-content: center">
                  <p
                    align="center"
                    style="
                      color: grey;
                      text-decoration: line-through;
                      margin: 0 10px;
                    "
                  >
                    {{ producto.precio_sin_descuento }}
                  </p>
                  <p
                    align="center"
                    style="color: black; font-size: 35px; margin: 0"
                  >
                    S/.{{ producto.precio }}
                  </p>
                </div>
                <br />
              </div>
              <div class="efect"></div>
            </NuxtLink>
            <br />
          </div>
          <div align="center">
            <ul>
              <li
                v-for="pageNumber in totalPages"
                :key="pageNumber"
                @click="currentPage = pageNumber"
              >
                <a :class="{ active: currentPage === pageNumber }">{{
                  pageNumber
                }}</a>
              </li>
            </ul>
          </div>
        </div>
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
  .col-3 {
    display: none;
  }
  .col-9 {
    width: 100%;
  }
}
@media screen and (min-width: 501px) and (max-width: 600px) {
  .columns {
    display: grid;
    grid-template-columns: repeat(1, minmax(0, 1fr));
    column-gap: 20px;
  }
  .col-3,
  .fixed {
    width: 35%;
  }
  .col-9 {
    width: 65%;
  }
  .display {
    display: none;
  }
}
@media screen and (min-width: 601px) and (max-width: 960px) {
  .columns {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    column-gap: 20px;
  }
  .col-3,
  .fixed {
    width: 25%;
  }
  .col-9 {
    width: 75%;
  }
  .display {
    display: none;
  }
}
@media screen and (min-width: 961px) {
  .columns {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    column-gap: 20px;
  }
  .col-3,
  .fixed {
    width: 25%;
  }
  .col-9 {
    width: 75%;
  }
  .fixed {
    width: 25%;
  }
  .display {
    display: none;
  }
}
.button-precio {
  width: 100%;
  background-color: black;
  color: white;
  border-radius: 5px;
  border-color: transparent;
  padding: 3px;
  transition: transform 0.3s ease, font-weight 0.3s ease;
  cursor: pointer;
}
.button-precio:hover {
  transform: scale(1.05);
  font-weight: bold;
}
.col-12 {
  width: 100%;
}
ul {
  list-style-type: none;
  display: flex;
  justify-content: center;
}
li {
  border: 1px solid rgba(0, 0, 0, 0.3);
  min-width: 40px;
  min-height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background-color 0.3s ease;
}
li:hover {
  background-color: rgba(0, 0, 0, 0.2);
}
input[type="range"] {
  -webkit-appearance: none;
  width: 80%;
  height: 10px;
  border-radius: 5px;
  outline: none;
  border: 1px solid rgb(177, 177, 177);
}
input[type="range"]::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: black;
  cursor: pointer;
}
input[type="range"]::-webkit-slider-thumb:hover {
  background: #333;
}
.background {
  background-image: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)),
    url("/public/inicio/parte1/ima1.webp");
  height: 150px;
}
.link {
  font-size: 20px;
  opacity: 0.7;
  color: rgb(0, 0, 0);
  text-decoration: none;
  transition: opacity 0.3s;
}
.link.router-link-exact-active {
  opacity: 1;
}
.link:hover {
  opacity: 1;
}
.container {
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
  height: 100%;
}
.input1 {
  width: 100%;
}
.row {
  display: flex;
  flex-wrap: wrap;
  margin-left: 0;
  margin-right: 0;
  height: 100%;
}
h1 {
  margin: 0;
}
h2 {
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
.fixed {
  position: fixed;
  bottom: 400px;
  top: 60px;
  left: 0;
  z-index: 9999;
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
      buscar: "",
      productos_totales: 0,
      anillos_totales: 0,
      aretes_totales: 0,
      collares_totales: 0,
      pulseras_totales: 0,
      precioMin: null,
      precioMax: null,
      precioMinRange: 0,
      precioMaxRange: 200,
      currentPage: 1,
      itemsPerPage: 12,
      isFixed: false,
      productos: [],
    };
  },
  computed: {
    productosFiltrados() {
      let productosFiltrados = this.filtro;

      if (this.precioMin !== null) {
        productosFiltrados = productosFiltrados.filter((producto) => {
          const precio = parseFloat(producto.precio);
          return precio >= this.precioMin;
        });
      }

      if (this.precioMax !== null) {
        productosFiltrados = productosFiltrados.filter((producto) => {
          const precio = parseFloat(producto.precio);
          return precio <= this.precioMax;
        });
      }

      return productosFiltrados.slice(
        this.offset,
        this.offset + this.itemsPerPage
      );
    },
    filtro() {
      return this.productos.filter((producto) =>
        producto.titulo
          .toLowerCase()
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "")
          .includes(
            this.buscar
              .toLowerCase()
              .normalize("NFD")
              .replace(/[\u0300-\u036f]/g, "")
          )
      );
    },
    totalPages() {
      return Math.ceil(this.filtro.length / this.itemsPerPage);
    },
    offset() {
      return (this.currentPage - 1) * this.itemsPerPage;
    },
  },
  methods: {
    handleScroll1() {
      const scrollDiv = this.$refs.scrollDiv;

      if (scrollDiv) {
        const rect = scrollDiv.getBoundingClientRect();

        if (rect.top <= 60) {
          this.isFixed = true;
        } else {
          this.isFixed = false;
        }
      }
    },
    aplicarFiltroPrecio() {
      this.currentPage = 1;
    },
    ordenarPorPrecioMin() {
      this.productos.sort(
        (a, b) => parseFloat(a.precio) - parseFloat(b.precio)
      );
    },
    ordenarPorPrecioMax() {
      this.productos.sort(
        (a, b) => parseFloat(b.precio) - parseFloat(a.precio)
      );
    },
    validate() {
      this.buscar = this.buscar.replace(/[^a-zA-Z0-9]/g, "");
    },
    Total_productos() {
      const { $data } = this.$nuxt;
      this.datos = $data;

      this.productos = this.datos;
    },
    Contar_productos() {
      const { $data } = this.$nuxt;
      this.datos = $data;

      this.productos_totales = this.datos.length;
      this.anillos_totales = this.datos.filter(
        (item) => item.tipo === "anillos"
      ).length;
      this.aretes_totales = this.datos.filter(
        (item) => item.tipo === "aretes"
      ).length;
      this.collares_totales = this.datos.filter(
        (item) => item.tipo === "collares"
      ).length;
      this.pulseras_totales = this.datos.filter(
        (item) => item.tipo === "pulseras"
      ).length;
    },
  },
  created() {
    this.Total_productos();
    this.Contar_productos();
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll1);
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.handleScroll1);
  },
};
</script>

<script setup>
useHead({
  title: "Qillari | Productos",
  meta: [
    {
      name: "robots",
      content: "index, follow",
    },
    {
      name: "description",
      content:
        "Brillando como la luna en la noche, nuestras joyas capturan la esencia celestial.",
    },
    {
      property: "site_name",
      content: "Qillari | Joyería Peruana",
    },
    {
      property: "og:title",
      content: "Qillari | Productos",
    },
    {
      property: "og:description",
      content:
        "Brillando como la luna en la noche, nuestras joyas capturan la esencia celestial.",
    },
    {
      property: "og:image",
      content: "/logo.png",
    },
    {
      property: "og:url",
      content: "/productos/",
    },
    {
      name: "twitter:card",
      content: "summary_large_image",
    },
    {
      name: "twitter:tittle",
      content: "Qillari | Productos",
    },
    {
      name: "twitter:description",
      content:
        "Brillando como la luna en la noche, nuestras joyas capturan la esencia celestial.",
    },
    {
      name: "twitter:image",
      content: "/logo.png",
    },
  ],
  link: [
    {
      rel: "canonical",
      href: "https://qillari.com/productos/",
    },
  ],
});
</script>
