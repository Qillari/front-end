<template>
  <div>
    <div class="alert-fixed" role="alert" v-if="error">
      Hubo un error
      <div class="progress-bar"></div>
    </div>
    <div class="alert-fixed" role="alert" v-if="rechazado">
      Se rechazo el pago
      <div class="progress-bar"></div>
    </div>
    <Loading v-if="loading" />
    <div class="background">
      <div
        class="container"
        align="center"
        style="align-items: center; display: flex; justify-content: center"
      >
        <br />
        <h1 style="color: white">Checkout</h1>
        <br />
      </div>
    </div>
    <br />
    <div class="container">
      <div class="row">
        <div class="col-6">
          <button class="button width1" align="justify" @click="fun_form()">
            <div class="flex">
              <p>Pagar Con tarjeta</p>
              <p v-if="!form">+</p>
              <p v-if="form">-</p>
            </div>
          </button>
          <hr
            align="left"
            style="border: 1px solid rgba(0, 0, 0, 0.2)"
            class="width1"
          />
          <div v-show="form" class="width1">
            <form id="form-checkout">
              <div id="form-checkout__cardNumber" class="input"></div>
              <br />
              <div id="form-checkout__expirationDate" class="input"></div>
              <br />
              <div id="form-checkout__securityCode" class="input"></div>
              <br />
              <input type="text" id="form-checkout__cardholderName" />
              <br />
              <select id="form-checkout__issuer" style="display: none"></select>
              <select
                id="form-checkout__installments"
                style="display: none"
              ></select>
              <select id="form-checkout__identificationType"></select>
              <br />
              <input type="text" id="form-checkout__identificationNumber" />
              <br />
              <input
                type="email"
                id="form-checkout__cardholderEmail"
                v-model="email"
              />
              <br />
              <div class="input-select">
                <p style="margin-right: 10px">Departamento</p>
                <select v-model="selectedProduct" @change="updatePrice">
                  <option value="7.9">Lima Metropolitana</option>
                  <option value="10.9">Huaral</option>
                  <option value="10.9">Cañete</option>
                  <option value="10.9">Chincha</option>
                  <option value="10.9">Canta</option>
                  <option value="12.9">Cusco</option>
                  <option value="12.9">La Libertad</option>
                  <option value="12.9">Ayacucho</option>
                  <option value="12.9">Áncash</option>
                  <option value="12.9">Junín</option>
                  <option value="12.9">Huacho</option>
                  <option value="12.9">Huánuco</option>
                  <option value="12.9">Ica</option>
                  <option value="12.9">Piura</option>
                  <option value="12.9">Arequipa</option>
                  <option value="12.9">Lambayeque</option>
                  <option value="14.9">Pasco</option>
                  <option value="14.9">Cajamarca</option>
                  <option value="14.9">Huancavelica</option>
                  <option value="14.9">Barranca</option>
                  <option value="16.9">Tumbes</option>
                  <option value="16.9">Juliaca</option>
                  <option value="16.9">Moquegua</option>
                  <option value="16.9">Ucayali</option>
                  <option value="16.9">Tacna</option>
                  <option value="16.9">San Martín</option>
                  <option value="17.9">Apurimac</option>
                  <option value="17.9">Madre de Dios</option>
                  <option value="18.9">Loreto</option>
                  <option value="18.9">Amazonas</option>
                </select>
              </div>
              <br />
              <input
                type="text"
                placeholder="Dirección"
                v-model="name_street1"
              />
              <br />
              <button
                type="submit"
                id="form-checkout__submit"
                class="button_check"
              >
                Pagar
              </button>
            </form>
            <br />
          </div>
          <button class="button width1" @click="fun_yape()">
            <div class="flex">
              <p>Pagar Con Yape</p>
              <p v-if="!yape">+</p>
              <p v-if="yape">-</p>
            </div>
          </button>
          <hr
            align="left"
            style="border: 1px solid rgba(0, 0, 0, 0.2)"
            class="width1"
          />
          <div v-show="yape" class="width1">
            <p>1. Agrega tus datos</p>
            <p>2. Agrega la imagen del pago realizado a través de Yape.</p>
            <p>
              3. Después, presiona el botón Enviar. Recibirás un correo
              electrónico de confirmación de tu pedido con los productos
              seleccionados
            </p>
            <br />
            <input
              type="email"
              name="email"
              placeholder="Correo electrónico"
              v-model="email"
              class="input"
            />
            <br />
            <br />
            <input
              type="text"
              id="telefono"
              name="telefono"
              pattern="[0-9]+"
              title="Solo se permiten números y el símbolo '+'"
              placeholder="Número de Celular"
              v-model="telefono"
              class="input"
            />
            <br />
            <br />
            <div class="input-select">
              <p style="margin-right: 10px">Departamento</p>
              <select v-model="selectedProduct" @change="updatePrice">
                <option value="7.9">Lima Metropolitana</option>
                <option value="10.9">Huaral</option>
                <option value="10.9">Cañete</option>
                <option value="10.9">Chincha</option>
                <option value="10.9">Canta</option>
                <option value="12.9">Cusco</option>
                <option value="12.9">La Libertad</option>
                <option value="12.9">Ayacucho</option>
                <option value="12.9">Áncash</option>
                <option value="12.9">Junín</option>
                <option value="12.9">Huacho</option>
                <option value="12.9">Huánuco</option>
                <option value="12.9">Ica</option>
                <option value="12.9">Piura</option>
                <option value="12.9">Arequipa</option>
                <option value="12.9">Lambayeque</option>
                <option value="14.9">Pasco</option>
                <option value="14.9">Cajamarca</option>
                <option value="14.9">Huancavelica</option>
                <option value="14.9">Barranca</option>
                <option value="16.9">Tumbes</option>
                <option value="16.9">Juliaca</option>
                <option value="16.9">Moquegua</option>
                <option value="16.9">Ucayali</option>
                <option value="16.9">Tacna</option>
                <option value="16.9">San Martín</option>
                <option value="17.9">Apurimac</option>
                <option value="17.9">Madre de Dios</option>
                <option value="18.9">Loreto</option>
                <option value="18.9">Amazonas</option>
              </select>
            </div>
            <br />
            <input
              type="text"
              placeholder="Dirección"
              v-model="direccion"
              class="input"
            />
            <br />
            <br />
            <input
              type="file"
              name="adjunto"
              accept="image/*"
              @change="imagen_yape"
            />
            <br />
            <br />
            <button @click="yape1()" class="button_check">Enviar</button>
            <br />
            <br />
            <div align="center" style="width: 100%">
              <img src="/yape.jpg" style="object-fit: contain; width: 70%" />
            </div>
          </div>
          <br />
        </div>
        <div class="col-6">
          <div class="card">
            <div class="container">
              <div align="center">
                <br />
                <h2>Productos</h2>
                <p>Precio: {{ preciototal }}</p>
                <p>Envió: {{ precio_envio }}</p>
                <hr />
                <p>Total: {{ preciototal + precio_envio }}</p>
              </div>
              <hr
                align="left"
                style="width: 100%; border: 1px solid rgba(0, 0, 0, 0.1)"
              />
              <div style="max-height: 70vh; overflow-y: scroll">
                <div
                  v-for="(item, index) in carrito"
                  :key="'cart-product-' + index"
                >
                  <div
                    style="
                      display: flex;
                      align-items: center;
                      margin-bottom: 10px;
                    "
                  >
                    <div style="width: 100px; height: 100px">
                      <img
                        :src="item.fotos[0].src"
                        style="width: 100%; height: 100%"
                      />
                    </div>
                    <div style="width: 100%">
                      <div
                        style="display: flex; justify-content: space-between"
                      >
                        <h5>
                          {{ item.nombre }}
                        </h5>
                        <button class="but" @click="removeFromCart(item)">
                          X
                        </button>
                      </div>
                      <p>
                        {{ item.price }} x {{ item.totalamount }} unidades =
                        {{ item.price * item.totalamount }}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <br />
            </div>
          </div>
          <br />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@media screen and (max-width: 600px) {
  .col-6 {
    width: 100%;
  }

  .width1 {
    width: 100%;
  }
  .alert-fixed {
    min-width: 87%;
    right: 0;
  }
}

@media screen and (min-width: 601px) {
  .col-6 {
    width: 50%;
  }

  .width1 {
    width: 90%;
  }
}

h1,
h2,
h5,
p,
button {
  margin: 0;
}

.card {
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.3);
}

.input {
  width: 100%;
  height: 25px;
  border: 1px solid rgba(0, 0, 0, 0.8);
  border-radius: 3px;
}

.button {
  border: transparent;
  background: rgb(255, 255, 255);
  cursor: pointer;
}

.button_check {
  height: 30px;
  margin-left: 0px;
  border-radius: 5px;
  background-color: rgba(0, 0, 0, 0.897);
  border-color: transparent;
  cursor: pointer;
  transition: transform 0.3s ease, font-weight 0.3s ease;
  color: white;
  width: 100%;
}

.button_check:hover {
  transform: scale(1.01);
  font-weight: bold;
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

.flex {
  display: flex;
  justify-content: space-between;
}

#form-checkout {
  display: flex;
  flex-direction: column;
  width: 100%;
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
  height: 100%;
}

.background {
  background-image: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)),
    url("/public/inicio/parte1/ima1.webp");
  height: 150px;
}

.input-select {
  display: flex;
}

.alert-fixed {
  position: fixed;
  top: 20px;
  right: 20px;
  width: 30%;
  height: 40px;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease-in-out;
  background-color: #f44336; /* Rojo para alert-error */
  color: white;
  padding: 10px;
  box-sizing: border-box;
}

.alert-fixed .progress-bar {
  position: absolute;
  bottom: 0;
  left: 0;
  height: 5px;
  width: 100%;
  background-color: #9b1b12; /* Verde para la barra de progreso */
  animation: progress 5s linear forwards;
}

@keyframes progress {
  from {
    width: 100%;
  }
  to {
    width: 0;
  }
}
</style>

<script>
import { loadMercadoPago } from "@mercadopago/sdk-js";
import axios from "axios";
let cardForm;

export default {
  data() {
    return {
      name_street1: "",
      preciototal: 0,
      email: "",
      telefono: "",
      direccion: "",
      error: false,
      rechazado: false,
      carrito: [],
      form: false,
      yape: false,
      loading: false,
      imagen_de_pago: null,
      precio_envio: 0,
      selectedProduct: null,
    };
  },
  methods: {
    async loadMercadoPago1() {
      await loadMercadoPago();
      const mp = new window.MercadoPago(
        "TEST-39ec44cc-a65c-48be-beb2-0c2c9d892956"
      );
      if (!cardForm) {
        cardForm = mp.cardForm({
          amount: this.preciototal + this.precio_envio + "",
          iframe: true,
          form: {
            id: "form-checkout",
            cardNumber: {
              id: "form-checkout__cardNumber",
              placeholder: "Número de tarjeta",
            },
            expirationDate: {
              id: "form-checkout__expirationDate",
              placeholder: "MM/YY",
            },
            securityCode: {
              id: "form-checkout__securityCode",
              placeholder: "Código de seguridad",
            },
            cardholderName: {
              id: "form-checkout__cardholderName",
              placeholder: "Titular de la tarjeta",
            },
            issuer: {
              id: "form-checkout__issuer",
              placeholder: "Banco emisor",
            },
            installments: {
              id: "form-checkout__installments",
              placeholder: "Cuotas",
            },
            identificationType: {
              id: "form-checkout__identificationType",
              placeholder: "Tipo de documento",
            },
            identificationNumber: {
              id: "form-checkout__identificationNumber",
              placeholder: "Número del documento",
            },
            cardholderEmail: {
              id: "form-checkout__cardholderEmail",
              placeholder: "E-mail",
            },
          },
          callbacks: {
            onFormMounted: (error) => {
              if (error)
                return console.warn("Form Mounted handling error: ", error);
            },
            onSubmit: async (event) => {
              event.preventDefault();
              const {
                paymentMethodId: payment_method_id,
                issuerId: issuer_id,
                cardholderEmail: email,
                amount,
                token,
                installments = 1,
                identificationNumber,
                identificationType,
              } = cardForm.getCardFormData();

              this.loading = true;
              axios
                .post("https://backend-phi-gules.vercel.app/checkout", {
                  token,
                  issuer_id,
                  payment_method_id,
                  transaction_amount: Number(amount),
                  installments: Number(installments),
                  description: this.carrito,
                  payer: {
                    email,
                    identification: {
                      type: identificationType,
                      number: identificationNumber,
                    },
                    adress: {
                      street_name: this.name_street1,
                    },
                  },
                })
                .then((response) => {
                  if (response.data.status == "approved") {
                    axios.post(
                      "https://backend-phi-gules.vercel.app/venta-checkout",
                      {
                        carrito: this.carrito,
                        precio_total: this.preciototal,
                      }
                    );

                    axios
                      .post("https://backend-phi-gules.vercel.app/correo", {
                        carrito: this.carrito,
                        email: this.email,
                        street_name: this.name_street1,
                        preciototal: this.preciototal,
                      })
                      .then((response) => {
                        console.log(response);
                        localStorage.removeItem("carrito");
                        localStorage.removeItem("precioTotal");
                        this.carrito = [];
                        this.preciototal = 0;
                        this.$bus.$emit("productoEliminado", this.carrito);
                        this.$bus.$emit("precioeliminado", this.preciototal);
                        this.$router.push("/pago");
                        this.loading = false;
                      })
                      .catch((error) => {
                        console.log(error);
                        this.loading = false;
                      });
                  } else if (response.data.status == "rejected") {
                    this.loading = false;
                    this.rechazado = true;
                    setTimeout(() => {
                      this.rechazado = false;
                    }, 5000);
                  }
                })
                .catch((error) => {
                  console.log(error);
                  this.loading = false;
                  this.error = true;
                  setTimeout(() => {
                    this.error = false;
                  }, 5000);
                });
            },
          },
        });
      } else {
        cardForm.unmount();
        cardForm = mp.cardForm({
          amount: this.preciototal + this.precio_envio + "",
          iframe: true,
          form: {
            id: "form-checkout",
            cardNumber: {
              id: "form-checkout__cardNumber",
              placeholder: "Número de tarjeta",
            },
            expirationDate: {
              id: "form-checkout__expirationDate",
              placeholder: "MM/YY",
            },
            securityCode: {
              id: "form-checkout__securityCode",
              placeholder: "Código de seguridad",
            },
            cardholderName: {
              id: "form-checkout__cardholderName",
              placeholder: "Titular de la tarjeta",
            },
            issuer: {
              id: "form-checkout__issuer",
              placeholder: "Banco emisor",
            },
            installments: {
              id: "form-checkout__installments",
              placeholder: "Cuotas",
            },
            identificationType: {
              id: "form-checkout__identificationType",
              placeholder: "Tipo de documento",
            },
            identificationNumber: {
              id: "form-checkout__identificationNumber",
              placeholder: "Número del documento",
            },
            cardholderEmail: {
              id: "form-checkout__cardholderEmail",
              placeholder: "E-mail",
            },
          },
          callbacks: {
            onFormMounted: (error) => {
              if (error)
                return console.warn("Form Mounted handling error: ", error);
            },
            onSubmit: async (event) => {
              event.preventDefault();
              const {
                paymentMethodId: payment_method_id,
                issuerId: issuer_id,
                cardholderEmail: email,
                amount,
                token,
                installments = 1,
                identificationNumber,
                identificationType,
              } = cardForm.getCardFormData();

              this.loading = true;
              axios
                .post("https://backend-phi-gules.vercel.app/checkout", {
                  token,
                  issuer_id,
                  payment_method_id,
                  transaction_amount: Number(amount),
                  installments: Number(installments),
                  description: this.carrito,
                  payer: {
                    email,
                    identification: {
                      type: identificationType,
                      number: identificationNumber,
                    },
                    adress: {
                      street_name: this.name_street1,
                    },
                  },
                })
                .then((response) => {
                  if (response.data.status == "approved") {
                    axios.post(
                      "https://backend-phi-gules.vercel.app/venta-checkout",
                      {
                        carrito: this.carrito,
                        precio_total: this.preciototal,
                      }
                    );
                    axios
                      .post("https://backend-phi-gules.vercel.app/correo", {
                        carrito: this.carrito,
                        email: this.email,
                        street_name: this.name_street1,
                        preciototal: this.preciototal,
                      })
                      .then((response) => {
                        console.log(response);
                        localStorage.removeItem("carrito");
                        localStorage.removeItem("precioTotal");
                        this.carrito = [];
                        this.preciototal = 0;
                        this.$bus.$emit("productoEliminado", this.carrito);
                        this.$bus.$emit("precioeliminado", this.preciototal);
                        this.$router.push("/pago");
                        this.loading = false;
                      })
                      .catch((error) => {
                        console.log(error);
                        this.loading = false;
                      });
                  } else if (response.data.status == "rejected") {
                    this.loading = false;
                    this.rechazado = true;
                    setTimeout(() => {
                      this.rechazado = false;
                    }, 5000);
                  }
                })
                .catch((error) => {
                  console.log(error);
                  this.loading = false;
                  this.error = true;
                  setTimeout(() => {
                    this.error = false;
                  }, 5000);
                });
            },
          },
        });
      }
    },
    fun_form() {
      if (this.form == true) {
        this.form = false;
      } else {
        this.form = true;
      }
      this.yape = false;
    },
    fun_yape() {
      if (this.yape == true) {
        this.yape = false;
      } else {
        this.yape = true;
      }
      this.form = false;
    },
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
    yape1() {
      this.loading = true;
      axios
        .post("https://backend-phi-gules.vercel.app/yape", {
          preciototal: this.preciototal,
          carrito: this.carrito,
          email: this.email,
          telefono: this.telefono,
          direccion: this.direccion,
          imagen_de_pago: this.imagen_de_pago,
        })
        .then((response) => {
          console.log(response);
          this.loading = false;
          this.$router.push("/pago");
        });
    },
    async imagen_yape(event) {
      const file = event.target.files[0];
      const reader = new FileReader();
      await new Promise((resolve, reject) => {
        reader.onload = () => {
          resolve();
        };
        reader.readAsDataURL(file);
      });
      this.imagen_de_pago = reader.result;
    },
    updatePrice() {
      this.precio_envio = parseFloat(this.selectedProduct);
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
    this.carrito = JSON.parse(localStorage.getItem("carrito") || "[]");
    this.preciototal = JSON.parse(localStorage.getItem("precioTotal") || 0);
    this.$bus.$on("productoAgregado", (carrito) => {
      this.carrito = carrito;
    });
    this.$bus.$on("productoEliminado", (carrito) => {
      this.carrito = carrito;
    });
    this.$bus.$on("precioeliminado", (preciototal) => {
      this.preciototal = preciototal;
    });
    this.$bus.$on("precioTotal", (preciototal) => {
      this.preciototal = preciototal;
    });
    this.loadMercadoPago1();
  },
  setup() {
    useHead({
      title: "Qillari | Checkout",
      link: [
        {
          rel: "canonical",
          href: "https://qillari.com/checkout",
        },
      ],
    });
    onMounted(() => {
      document
        .getElementById("telefono")
        .addEventListener("input", function () {
          let input = this.value.replace(/[^\d\s]/g, "");
          input = "+" + input;
          this.value = input;
        });
    });
  },
};
</script>
