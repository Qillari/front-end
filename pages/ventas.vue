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
        <button @click="editar_true()">
            Editar producto
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
        <div v-if="boton_editar">
            <input type="text" placeholder="Id" v-model="editar_ventas.id" />
            <br />
            <input type="text" placeholder="Id Stock" v-model="editar_ventas.id_stock" />
            <br />
            <input type="text" placeholder="Fecha/Hora" v-model="editar_ventas.fecha_hora"  />
            <br />
            <input type="text" placeholder="Estado" v-model="editar_ventas.estado" />
            <br />
            <input type="number" placeholder="Cantidad" v-model="editar_ventas.cantidad" />
            <br />
            <input type="text" placeholder="Total" v-model="editar_ventas.total" />
            <br />
            <button @click="Editar_ventas()">
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
                        <th>ID_STOCK</th>
                        <th>FECHA_HORA</th>
                        <th>ESTADO</th>
                        <th>CANTIDAD</th>
                        <th>TOTAL</th>
                        <th>ACCIONES</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="item in datos_totales" :key="item.id" align="center">
                        <td>{{ item.id }}</td>
                        <td>{{ item.id_stock }}</td>
                        <td>{{ item.fecha_hora }}</td>
                        <td>{{ item.estado }}</td>
                        <td>{{ item.cantidad }}</td>
                        <td>{{ item.total }}</td>
                        <td>
                            <button class="btn btn-primary" @click="editar_ventas_input(item)">Editar</button>
                        </td>
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
            boton_editar: false,
            boton_eliminar: false,
            agregar_ventas: {
                id: "",
                id_stock: "",
                fecha_hora: "",
                estado: "",
                cantidad: "",
                total: "",
            },
            editar_ventas: {
                id: "",
                id_stock: "",
                fecha_hora: "",
                estado: "",
                cantidad: "",
                total: "",
            },
            eliminar_ventas_id: ""
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
                    id_stock: this.agregar_ventas.id_stock,
                    fecha_hora: this.agregar_ventas.fecha_hora,
                    estado: this.agregar_ventas.estado,
                    cantidad: this.agregar_ventas.cantidad,
                    total: this.agregar_ventas.total,
                });
                this.ver_ventas();
            }
            catch (error) {
                console.error(error);
            }
        },
        async Editar_ventas() {
            try {
                axios.put("https://backend-phi-gules.vercel.app/crud-ventas", {
                    id: this.agregar_ventas.id,
                    id_stock: this.agregar_ventas.id_stock,
                    fecha_hora: this.agregar_ventas.fecha_hora,
                    estado: this.agregar_ventas.estado,
                    cantidad: this.agregar_ventas.cantidad,
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
                        id: this.eliminar_ventas_id
                    }
                });
                this.ver_ventas();
            }
            catch (error) {
                console.error(error);
            }
        },
        editar_ventas_input(item) {
            this.editar_ventas.id = item.id;
            this.editar_ventas.id_stock = item.id_stock;
            this.editar_ventas.fecha_hora = item.fecha_hora;
            this.editar_ventas.estado = item.estado;
            this.editar_ventas.cantidad = item.cantidad;
            this.editar_ventas.total = item.total
        },
        agregar_true() {
            this.boton_agregar = !this.boton_agregar;
            this.boton_editar = false;
            this.boton_eliminar = false;
        },
        editar_true() {
            this.boton_editar = !this.boton_editar;
            this.boton_agregar = false;
            this.boton_eliminar = false;
        },
        eliminar_true() {
            this.boton_eliminar = !this.boton_eliminar;
            this.boton_editar = false;
            this.boton_agregar = false;
        },
    },
    created() {
        this.ver_ventas();
    }
};
</script>