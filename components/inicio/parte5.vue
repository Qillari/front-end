<template>
  <div class="newsletter-form">
    <h2>LO ÚLTIMO DE QILLARI</h2 v-scrolls>
    <p v-scrolls>
      Sea el primero en conocer los nuevos y apasionantes diseños, los eventos
      especiales, las inauguraciones de tiendas y mucho más.
    </p>
    <form @submit.prevent="submitForm" v-scrolls>
      <div class="input-group">
        <input
          type="email"
          v-model="correo"
          placeholder="Tu correo electrónico"
          required
        />
        <button type="submit">Suscribirse</button>
      </div>
    </form>
    <br />
  </div>
</template>

<style scoped>
.newsletter-form {
  text-align: center;
  margin: auto;
  width: 90%;
  max-width: 500px;
}

.input-group {
  display: flex;
  justify-content: space-between;
}

input[type="email"] {
  flex: 1;
  padding: 10px;
  margin-bottom: 10px;
}

button {
  padding: 11.5px 20px;
  background-color: #000;
  color: #fff;
  border: none;
  cursor: pointer;
  height: 100%;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #333;
}

@media screen and (max-width: 600px) {
  input[type="email"],
  button {
    width: 100%;
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
      nombre: "",
      correo: "",
      texto: "",
      alert: false,
      Vinput1: true,
      Vinput2: true,
      Vinput3: true,
    };
  },
  computed: {
    isButtonDisabled() {
      return (
        !this.Vinput1 ||
        !this.Vinput2 ||
        !this.Vinput3 ||
        this.correo === "" ||
        this.nombre === "" ||
        this.texto === ""
      );
    },
  },
  methods: {
    async form() {
      try {
        let result = await axios.post(
          "https://qillari-back.vercel.app/correo1",
          {
            correo: this.correo,
            nombre: this.nombre,
            texto: this.texto,
          }
        );

        if (result.data.success) {
          this.alert = true;
          setTimeout(() => {
            this.alert = false;
          }, 5000);
          this.nombre = "";
          this.correo = "";
          this.texto = "";
        }
      } catch (error) {
        console.error(error);
      }
    },
    validate1() {
      this.Vinput1 = this.nombre !== "";
    },
    validate2() {
      const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
      this.Vinput2 = emailPattern.test(this.correo);
    },
    validate3() {
      this.Vinput3 = this.texto !== "";
    },
  },
};
</script>
