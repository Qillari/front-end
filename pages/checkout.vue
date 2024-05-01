<template>
  <div>
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
              <input
                type="text"
                placeholder="Direccion"
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
            <p>1. Agrega tu correo electronico</p>
            <p>2. Agrega la imagen del pago realizado a través de Yape.</p>
            <p>
              3. Después, presiona el botón Enviar. Recibirás un correo
              electrónico de confirmación de tu pedido con los productos
              seleccionados
            </p>
            <br />
            <input
              type="email"
              name="correo"
              placeholder="Correo electrónico"
            />
            <br />
            <br />
            <input type="file" name="adjunto" accept="image/*" @change="imagen_yape" />
            <br />
            <br />
            <button v-if="imagen_de_pago">Enviar</button>
            <br />
            <br />
            <div align="center" style="width: 100%">
              <img src="/yape.jpg" style="object-fit: contain; width: 50%" />
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
                <p>
                  {{ preciototal }}
                </p>
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
  font-family: "Segoe UI";
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
  font-family: "Segoe UI";
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
</style>

<script>
import { loadMercadoPago } from "@mercadopago/sdk-js";
import axios from "axios";

export default {
  data() {
    return {
      name_street1: "",
      preciototal: 0,
      email: "",
      telefono: "",
      carrito: [],
      form: false,
      yape: false,
      loading: false,
      imagen_de_pago: null,
    };
  },
  methods: {
    async loadMercadoPago1() {
      await loadMercadoPago();
      const mp = new window.MercadoPago(
        "APP_USR-ec623ccc-56bb-4aac-92c0-5eb08f2aa0b7"
      );
      const cardForm = mp.cardForm({
        amount: this.preciototal + "",
        iframe: true,
        form: {
          id: "form-checkout",
          cardNumber: {
            id: "form-checkout__cardNumber",
            placeholder: "Numero de tarjeta",
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
              return console.warn(
                "Form Mounted handling error: ",
                error,
                localStorage.setItem("mercadopago", true)
              );
            console.log("Form mounted");
            localStorage.setItem("mercadopago", true);
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
                console.log(response);
                axios
                  .post("https://qillari-back.vercel.app/correo", {
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
                  });
              })
              .catch((error) => {
                console.log(error);
                this.loading = false;
              });
          },
        },
      });
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
      axios
        .post("https://backend-phi-gules.vercel.app/yape", {
          precio_total: this.preciototal,
          description: this.carrito,
          correo: this.correo,
          telefono: this.telefono,
          imagen: this.imagen,
          
        })
        .then((response) => {
          console.log(response);
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

      // Obtener la URL base64 del archivo
      this.imagen_de_pago = reader.result;
      console.log(this.imagen_de_pago)
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
  beforeMount() {
    if (localStorage.getItem("mercadopago")) {
      localStorage.removeItem("mercadopago");
      location.reload();
    }
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
    if (!localStorage.getItem("mercadopago")) {
      this.loadMercadoPago1();
    }
  },
};
</script>
