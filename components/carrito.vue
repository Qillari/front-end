<template>
  <div style="position: relative">
    <button
      @click="toggleSidebar"
      title="Menu de inicio"
      class="button-navigation"
      style="position: relative; z-index: 1"
    >
      <img src="/carrito.png" class="menu" alt="carrito" />
    </button>
    <div
      class="offcanvas-overlay"
      :class="{ active: showSidebar }"
      @click="toggleSidebar"
    ></div>
    <div :class="{ active: showSidebar }" class="offcanvas">
      <div align="right">
        <button
          style="padding-top: 15px; font-size: 30px"
          class="close-button"
          @click="toggleSidebar"
        >
          &times;
        </button>
      </div>
      <div class="container">
        <div style="max-height: 60vh; overflow-y: scroll">
          <div
            v-for="(item, index) in carrito"
            :key="'cart-product-' + index"
            style=""
          >
            <div style="display: flex; align-items: center">
              <div style="width: 80px; height: 80px">
                <img :src="item.fotos[0].src" style="width: 100%; height: 100%" />
              </div>
              <div>
                <div style="display: flex; justify-content: space-between">
                  <h5>
                    {{ item.nombre }}
                  </h5>
                  <button class="but" @click="removeFromCart(item)">X</button>
                </div>
                <p>
                  {{ item.price }} x {{ item.totalamount }} unidades =
                  {{ item.price * item.totalamount }}
                </p>
              </div>
            </div>
            <br />
          </div>
        </div>
        <div align="center">
          <h2>Precio Total: {{ preciototal }}</h2>
          <NuxtLink to="/checkout">
            <button class="but1">COMPRAR</button>
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      preciototal: 0,
      carrito: [],
      showSidebar: false,
    };
  },
  methods: {
    removeFromCart(product) {
      const productIndex = this.carrito.findIndex(
        (item) => item.id == product.id
      );
      this.carrito[productIndex].totalamount -= 1;
      this.preciototal = this.preciototal - this.carrito[productIndex].price;
      if (this.carrito[productIndex].totalamount < 1) {
        this.carrito.splice(productIndex, 1);
      }
      this.$bus.$emit("productoEliminado", this.carrito);
      this.$bus.$emit("precioeliminado", this.preciototal);
    },
    funcion1() {
      this.carrito = JSON.parse(localStorage.getItem("carrito") || "[]");
      this.preciototal = JSON.parse(localStorage.getItem("precioTotal") || 0);
    },
    toggleSidebar() {
      this.showSidebar = !this.showSidebar;
      document.body.style.overflow = this.showSidebar ? "hidden" : "";
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
    this.funcion1();
    this.$bus.$on("productoAgregado", (carrito) => {
      this.carrito = carrito;
    });
    this.$bus.$on("precioTotal", (preciototal) => {
      this.preciototal = preciototal;
    });
    this.$bus.$on("productoEliminado", (carrito) => {
      this.carrito = carrito;
    });
    this.$bus.$on("precioeliminado", (preciototal) => {
      this.preciototal = preciototal;
    });
    this.$bus.$on("valor", () => {
      this.toggleSidebar();
    });
  },
};
</script>

<style scoped>
@media screen and (max-width: 600px) {
  .menu {
    max-width: 30px;
  }
}
h5 {
  margin: 0;
  padding: 0;
}
h1,
h2,
h5,
p {
  font-family: "Segoe UI";
}
.container {
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
  height: 100%;
}
.menu {
  height: 100%;
  width: 100%;
  max-height: 37px;
  object-fit: contain;
  filter: invert(100%);
}
.but {
  border: transparent;
  background-color: transparent;
  cursor: pointer;
  color: rgb(109, 109, 109);
  transition: color 0.3s ease;
}
.but:hover {
  color: rgb(0, 0, 0);
}
.but1 {
  width: 100%;
  height: 30px;
  margin-left: 0px;
  border-radius: 5px;
  background-color: rgba(0, 0, 0, 0.897);
  border-color: transparent;
  cursor: pointer;
  transition: transform 0.3s ease, margin 0.3s ease;
  color: white;
}
.but1:hover {
  transform: scale(1.05);
  font-weight: bold;
}
.button-navigation {
  border: none;
  cursor: pointer;
  background-color: transparent;
  opacity: 0.7;
  transition: opacity 0.3s;
}
.button-navigation:hover {
  opacity: 1;
}
.close-button {
  background-color: transparent;
  border: transparent;
  cursor: pointer;
}
.offcanvas {
  position: fixed;
  top: 0;
  right: -250px;
  width: 250px;
  height: 100%;
  background-color: #ffffff;
  transform: translateX(0);
  transition: transform 0.3s;
  z-index: 3;
}
.offcanvas.active {
  transform: translateX(-100%);
  transition: transform 0.3s;
}
.offcanvas-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.3s, visibility 0s linear 0.3s;
  z-index: 2;
}
.offcanvas-overlay.active {
  opacity: 1;
  visibility: visible;
  transition: opacity 0.3s;
}
</style>
