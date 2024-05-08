<template>
  <div style="overflow-x: hidden">
    <div class="background">
      <div
        class="container"
        align="center"
        style="align-items: center; display: flex; justify-content: center"
      >
        <br />
        <br />
      </div>
    </div>
    <br />
    <div class="container">
      <div class="row">
        <div class="col-6 width1">
          <div class="padding">
            <div class="alert" v-if="data.stock == 0">
              <strong>¡Lo sentimos!</strong> Este producto está fuera de stock.
            </div>
            <h1 align="center">
              {{ producto.nombre }}
            </h1>
            <p align="justify">
              {{ producto.descripcion }}
            </p>
            <input
              type="number"
              id="cantidad"
              name="cantidad"
              min="0"
              :max="data.stock"
              aria-label="cantidad"
              v-model="producto.amount"
              style="margin-bottom: 6px"
              :disabled="data.stock == 0"
            />
            <div>
              <button
                @click="añadir()"
                style="margin-right: 2px"
                class="button"
                :disabled="data.stock == 0"
              >
                añadir al carrito
              </button>
            </div>
            <br />
          </div>
        </div>
        <div class="col-6 width2" style="display: flex">
          <div class="cuadrado-imagen">
            <img
              :src="producto.selectedImage.src"
              :srcset="producto.selectedImage.srcset"
              class="imagen"
            />
          </div>
          <div class="cuadrado-imagen2">
            <div
              v-for="(image, index) in producto.fotos"
              :key="index"
              @click="selectImage(image)"
              class="imagenes-dentro"
            >
              <img :src="image.src" :srcset="image.srcset" class="imagen" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <br />
  </div>
</template>

<script setup>
const route = useRoute();
const data = await axios.get(`https://backend-phi-gules.vercel.app/api/anillos/${route.params.id}`).then(response => response.data);
useHead({
  title: data.titulo,
  meta: [
    {
      name: "robots",
      content: "index, follow",
    },
    {
      name: "description",
      content: data.descripcion,
    },
    {
      property: "site_name",
      content: "Qillari | Joyería Peruana",
    },
    {
      property: "og:title",
      content: data.titulo,
    },
    {
      property: "og:description",
      content: data.descripcion,
    },
    {
      property: "og:image",
      content: data.fotos,
    },
    {
      property: "og:url",
      content: data.url,
    },
    {
      name: "twitter:card",
      content: "summary_large_image",
    },
    {
      name: "twitter:tittle",
      content: data.titulo,
    },
    {
      name: "twitter:description",
      content: data.descripcion,
    },
    {
      name: "twitter:image",
      content: data.url,
    },
  ],
  link: [
    {
      rel: "canonical",
      href: "https://qillari.com" + data.url,
    },
  ],
});
</script>

<script>
import axios from "axios";
export default {
  data() {
    return {
      producto: {
        id: "",
        nombre: "",
        descripcion: "",
        price: "",
        fotos: [],
        amount: 1,
        stock: "",
        selectedImage: "",
        stock: null,
      },
      carrito: [],
      preciototal: 0,
    };
  },
  methods: {
    añadir(valor) {
      let exists = false;
      for (const item of this.carrito) {
        if (item.id == this.producto.id) {
          item.totalamount = item.totalamount + this.producto.amount;
          this.preciototal =
            this.preciototal + this.producto.amount * this.producto.price;
          exists = true;
          break;
        }
      }

      if (!exists) {
        const productCopy = { ...this.producto };
        delete productCopy.amount;
        this.preciototal =
          this.preciototal + this.producto.amount * this.producto.price;
        this.carrito.push({
          ...productCopy,
          totalamount: this.producto.amount,
        });
      }
      this.$bus.$emit("productoAgregado", this.carrito);
      this.$bus.$emit("precioTotal", this.preciototal);
      this.$bus.$emit("valor");

      if (valor) {
        this.$router.push("/checkout");
      }
    },
    selectImage(image) {
      this.producto.selectedImage = image;
    },
    async productos() {
      const route = useRoute();
      const response = await axios.get(`https://backend-phi-gules.vercel.app/api/anillos/${route.params.id}`);
      this.producto.id = response.data.id;
      this.producto.nombre = response.data.nombre;
      this.producto.descripcion = response.data.descripcion;
      this.producto.price = response.data.precio;
      this.producto.fotos = response.data.fotos;
      this.producto.stock = response.data.stock;
      this.producto.selectedImage = this.producto.fotos[0];
    },
  },
  watch: {
    carrito: {
      handler(newValue) {
        localStorage.setItem("carrito", JSON.stringify(newValue));
      },
      deep: true,
    },
    preciototal: {
      handler(newValue) {
        localStorage.setItem("precioTotal", JSON.stringify(newValue));
      },
      deep: true,
    },
  },
  mounted() {
    this.productos();
    this.carrito = JSON.parse(localStorage.getItem("carrito") || "[]");
    this.preciototal = JSON.parse(localStorage.getItem("precioTotal") || 0);
    this.$bus.$on("productoEliminado", (carrito) => {
      this.carrito = carrito;
    });
    this.$bus.$on("precioeliminado", (preciototal) => {
      this.preciototal = preciototal;
    });
  },
};
</script>

<style scoped>
@media screen and (max-width: 600px) {
  .col-6 {
    width: 100%;
  }
  .cuadrado-imagen {
    width: 75vw;
    height: 100%;
  }
  .cuadrado-imagen2 {
    width: 20vw;
    height: 100%;
  }
}
@media screen and (min-width: 601px) and (max-width: 960px) {
  .columns {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  .cuadrado-imagen {
    width: 75vw;
  }
  .cuadrado-imagen2 {
    width: 20vw;
  }
  .width1 {
    width: 30%;
  }
  .width2 {
    width: 70%;
  }
  .padding {
    padding-right: 10px;
  }
}
@media screen and (min-width: 961px) {
  .columns {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  .cuadrado-imagen {
    width: 75vw;
    height: 100%;
    min-width: 350px;
    max-width: 100%;
  }
  .cuadrado-imagen2 {
    width: 20vw;
    height: 100%;
    min-width: 50px;
    max-width: 100%;
  }
  .col-6 {
    width: 50%;
  }
  .padding {
    padding-right: 10px;
  }
}
.background {
  background-image: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)),
    url("/public/inicio/parte1/ima1.webp");
  height: 150px;
}
.columns {
  display: grid;
  column-gap: 20px;
}
.container {
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
  height: 100%;
  max-width: 100%;
}
.row {
  display: flex;
  flex-wrap: wrap;
  margin-left: 0;
  margin-right: 0;
  height: 100%;
}
.cuadrado-imagen {
  margin-right: 7px;
}
.cuadrado-imagen2 {
  margin-right: 20px;
}
.imagenes-dentro {
  cursor: pointer;
  margin-bottom: 10px;
}
.cuadrado-imagen,
.imagenes-dentro {
  border: 1px solid rgba(0, 0, 0, 0.2);
  transition: background-color 0.3s ease;
}
.imagenes-dentro:hover {
  background-color: rgba(203, 203, 203, 0.274);
}
.imagen {
  width: 100%;
  height: 100%;
  object-fit: contain;
}
.button {
  width: 160px;
  height: 30px;
  margin-left: 0px;
  border-radius: 5px;
  background-color: rgba(0, 0, 0, 0.897);
  border-color: transparent;
  cursor: pointer;
  transition: transform 0.3s ease, margin 0.3s ease;
  color: white;
}
.button:hover:not(:disabled) {
  transform: scale(1.2);
  margin-left: 10px;
  font-weight: bold;
}
button:disabled {
  background-color: #999;
  cursor: auto;
}
.alert {
  padding: 20px;
  background-color: #f44336;
  color: white;
  margin-bottom: 15px;
}

.closebtn {
  margin-left: 15px;
  color: white;
  font-weight: bold;
  float: right;
  font-size: 22px;
  line-height: 20px;
  cursor: pointer;
  transition: 0.3s;
}

.closebtn:hover {
  color: black;
}
</style>
