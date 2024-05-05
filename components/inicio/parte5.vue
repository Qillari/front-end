<template>
  <div>
    <Loading v-if="carga" />
    <div v-if="alert" class="fixed">
      <div class="alert alert-success">
        Se envió correctamente! 
        <span class="close">&times;</span>
        <div class="loading-bar"></div>
      </div>
    </div>
    <div align="center" class="container">
      <h2>LO ÚLTIMO DE QILLARI</h2 v-scrolls>
      <p v-scrolls>
        Sea el primero en conocer los nuevos y apasionantes diseños, los eventos
        especiales, las inauguraciones de tiendas y mucho más.
      </p>
      <div class="newsletter-form">
        <form @submit.prevent="form()" v-scrolls>
          <div class="input-group">
            <input type="email" v-model="correo" placeholder="Tu correo electrónico"
              @input="validate()" required />
            <button type="submit" :disabled="isButtonDisabled"
              :class="{ cursor: !isButtonDisabled }">Suscribirse</button>
          </div>
        </form>
        <br />
      </div>
    </div>
  </div>
</template>

<style scoped>
.fixed {
  position: fixed;
  top: 30px;
  right: 30px;
  z-index: 10000000000
}

.alert {
  padding: 15px;
  background-color: #dff0d8;
  border-color: #d6e9c6;
  color: #0f5132;
  border-radius: 4px;
  border: 1px solid transparent;
  margin-bottom: 20px;
  position: relative;
}

.loading-bar {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 3px;
  background-color: #00a10d;
  animation: loading 3s linear forwards;
  transform-origin: left;
}
.close {
      float: right;
      font-weight: bold;
      line-height: 20px;
      color: #000;
      text-shadow: 0 1px 0 #fff;
      opacity: .2;
    }

    .close:hover {
      color: #000;
      text-decoration: none;
      cursor: pointer;
      opacity: .5;
    }



@keyframes loading {
  0% {
    width: 100%;
  }

  100% {
    width: 0%;
  }
}

.cursor {
  cursor: pointer;
}

.container {
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
  height: 100%;
}

.newsletter-form {
  text-align: center;
  margin: auto;
  max-width: 500px;
}

.input-group input[type="email"] {
  flex: 1;
  padding-top: 10px;
  padding-bottom: 10px;
  margin-bottom: 10px;
  max-width: 100%
}

button {
  padding: 11.5px 20px;
  background-color: #000;
  color: #fff;
  border: none;
  height: 100%;
  transition: background-color 0.3s ease;
}

button:disabled {
  background-color: #999;
}

button:hover:not(:disabled) {
  background-color: #333;
}

@media screen and (max-width: 600px) {
  input[type="email"] {
    max-width: 100%;
    width: 100%;
    box-sizing: border-box;
  }

  button {
    max-width: 100%;
    width: 100%
  }
}

@media screen and (min-width: 601px) {
  .input-group {
    display: flex;
    justify-content: space-between;
  }
}

input,
button,
h2,
p {
  font-family: "Segoe UI";
}
</style>

<script>
import axios from "axios";

export default {
  data() {
    return {
      correo: "",
      carga: false,
      alert: false,
      Vinput1: false
    };
  },
  computed: {
    isButtonDisabled() {
      return (
        this.correo === ""
      );
    },
  },
  methods: {
    async form() {
      this.carga = true;
      try {
        let result = await axios.post(
          "https://qillari-back.vercel.app/correo-newsletter",
          {
            correo: this.correo,
          }
        );
        if (result.data.success) {
          this.carga = false;
          this.alert = true;
          setTimeout(() => {
            this.alert = false;
          }, 5000);
          this.correo = "";

        }
      } catch (error) {
        console.error(error);
        this.carga = false;
      }
    },
    validate() {
      this.correo = this.correo.replace(/[^a-zA-Z0-9@.]/g, '');
    }
  },
};
</script>
