<template>
    <div>
        <br />
        <br />
        <br />
        <h1 align="center">LOGIN</h1>
        <div align="center">
            <br />
            <input type="text" v-model="username"></input>
            <br />
            <br />
            <input type="text" v-model="password"></input>
            <br />
            <br />
            <button @click="log1()">
                Iniciar sección
            </button>
        </div>
    </div>
</template>
<script>
import axios from "axios";
export default {
    data() {
        return {
            username: "",
            password: "",
            state: false,
            alert: false,
        };
    },
  methods: {
    async log1() {
      try {
        let result = await axios.post("https://backend-phi-gules.vercel.app/login", {
          username: this.username,
          password: this.password,
        });
        
        if (result.data.success) {
          this.username = ""
          this.password = ""
          this.state = true
          localStorage.setItem("token", result.data.token)
          this.$router.push("/panel-general")
        }
      } catch (error) {
        console.log(error)
        this.alert = true
        setTimeout(() => {
          this.alert = false
        }, 5000)
        this.username = ""
        this.password = ""
      }
    }
  },
}
</script>