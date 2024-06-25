<template>
    <div class="container">
        <br />
        <br />
        <br />
        <br />
        <br />
        <button @click="agregar_true()">
            Agregar producto
        </button>
        <button @click="eliminar_true()">
            Eliminar producto
        </button>
        <br />
        <div v-if="boton_agregar">
            <input type="number" placeholder="Id" v-model="agregar_ventas.id" />
            <br />
            <input type="text" placeholder="Id Stock" v-model="agregar_ventas.id_stock" />
            <br />
            <input type="text" placeholder="Fecha/Hora" v-model="agregar_ventas.fecha_hora"  />
            <br />
            <input type="text" placeholder="Estado" v-model="agregar_ventas.estado" />
            <br />
            <input type="number" placeholder="Cantidad" v-model="agregar_ventas.cantidad" />
            <br />
            <input type="text" placeholder="Total" v-model="agregar_ventas.total" />
            <br />
            <button @click="Crear_ventas()">
                confirmar
            </button>
        </div>
        <div v-if="boton_eliminar">
            <input type="text" placeholder="ID" v-model="eliminar_ventas_id" />
            <button @click="Eliminar_ventas()">
                confirmar
            </button>
        </div>
        <br />
        <div class="table-container">
            <table class="custom-table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>FECHA_HORA</th>
                        <th>PRODUCTOS</th>
                        <th>ESTADO</th>
                        <th>TOTAL</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="item in datos_totales" :key="item.id" align="center">
                        <td>{{ item.id }}</td>
                        <td>{{ item.fecha_hora }}</td>
                        <td>{{ item.productos }}</td>
                        <td>{{ item.estado }}</td>
                        <td>{{ item.total }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<style scoped>
.container {
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
    height: 100%;
    width: 95%;
}
td, th {
  border: 1px solid #dddddd;
  text-align: center;
  padding: 8px;
}
.table-container {
  width: 100%; 
  overflow-x: auto; 
}
.custom-table {
  width: 100%; 
  border-collapse: collapse;
}

</style>

<script>
import axios from "axios";
export default {
    data() {
        return {
            datos_totales: [],
            cantidad: 0,
            boton_agregar: false,
            boton_eliminar: false,
            agregar_ventas: {
                id: "",
                fecha_hora: "",
                productos: "",
                estado: "",
                total: "",
            },
            editar_ventas: {
                id: "",
                fecha_hora: "",
                productos: "",
                estado: "",
                total: "",
            },
            eliminar_ventas_id: "",
            fecha: ""
        };
    },
    methods: {
        async ver_ventas() {
            try {
                const response = await axios.get("https://backend-phi-gules.vercel.app/crud-ventas", {
                    params: {
                        cantidad: this.cantidad
                    }
                });
                this.datos_totales = response.data;
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        },
        async Crear_ventas() {
            try {
                axios.post("https://backend-phi-gules.vercel.app/crud-ventas", {
                    id: this.agregar_ventas.id,
                    fecha_hora: this.agregar_ventas.fecha_hora,
                    productos: this.agregar_ventas.productos,
                    estado: this.agregar_ventas.estado,
                    total: this.agregar_ventas.total,
                });
                this.ver_ventas();
            }
            catch (error) {
                console.error(error);
            }
        },
        async Eliminar_ventas() {
            try {
                axios.delete("https://backend-phi-gules.vercel.app/crud-ventas", {
                    params: {
                        id: this.eliminar_ventas_id,
                        fecha: this.fecha
                    }
                });
                this.ver_ventas();
            }
            catch (error) {
                console.error(error);
            }
        },
        agregar_true() {
            this.boton_agregar = !this.boton_agregar;
            this.boton_eliminar = false;
        },
        eliminar_true() {
            this.boton_eliminar = !this.boton_eliminar;
            this.boton_agregar = false;
        },
    },
    created() {
        this.ver_ventas();
    }
};
</script>
<script setup>
definePageMeta({
    middleware:["auth"]
})
</script>