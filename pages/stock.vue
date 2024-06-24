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
            <input type="text" placeholder="ID" v-model="agregar_producto.id" />
            <br />
            <input type="text" placeholder="titulo" v-model="agregar_producto.titulo" />
            <br />
            <input type="text" placeholder="nombre_link" v-model="agregar_producto.nombre_link"  />
            <br />
            <input type="text" placeholder="descripcion" v-model="agregar_producto.descripcion" />
            <br />
            <select v-model="agregar_producto.tipo">
                <option value="anillos">anillos</option>
                <option value="aretes">aretes</option>
                <option value="pulseras">pulseras</option>
                <option value="collares">collares</option>
            </select>
            <br />
            <input type="number" placeholder="cantidad" v-model="agregar_producto.cantidad" />
            <br />
            <input type="number" step="0.01" placeholder="precio sin descuento" v-model="agregar_producto.precio_sin_descuento" />
            <br />
            <input type="number" step="0.01" placeholder="precio" v-model="agregar_producto.precio" />
            <br />
            <input type="text" placeholder="url" v-model="agregar_producto.url" />
            <br />
            <button @click="crear_producto()">
                confirmar
            </button>
        </div>
        <div v-if="boton_editar">
            <input type="text" placeholder="ID" v-model="editar_producto.id" />
            <br />
            <input type="text" placeholder="titulo" v-model="editar_producto.titulo" />
            <br />
            <input type="text" placeholder="nombre_link" v-model="editar_producto.nombre_link"  />
            <br />
            <input type="text" placeholder="descripcion" v-model="editar_producto.descripcion" />
            <br />
            <select v-model="editar_producto.tipo">
                <option value="anillos">anillos</option>
                <option value="aretes">aretes</option>
                <option value="pulseras">pulseras</option>
                <option value="collares">collares</option>
            </select>
            <br />
            <input type="number" placeholder="cantidad" v-model="editar_producto.cantidad" />
            <br />
            <input type="number" step="0.01" placeholder="precio sin descuento" v-model="editar_producto.precio_sin_descuento" />
            <br />
            <input type="number" step="0.01" placeholder="precio" v-model="editar_producto.precio" />
            <br />
            <input type="text" placeholder="url" v-model="editar_producto.url" />
            <br />
            <button @click="Editar_producto()">
                confirmar
            </button>
        </div>
        <div v-if="boton_eliminar">
            <input type="text" placeholder="ID" v-model="eliminar_producto_id" />
            <button @click="Eliminar_producto()">
                confirmar
            </button>
        </div>
        <br />
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>TITULO</th>
                    <th>NOMBRE_LINK</th>
                    <th>DRESCRIPCIÓN</th>
                    <th>TIPO</th>
                    <th>CANTIDAD</th>
                    <th>PRECIO_SIN_DESCUENTO</th>
                    <th>PRECIO</th>
                    <th>URL</th>
                    <th>ACCIONES</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in datos_totales" :key="item.id" align="center">
                    <td>{{ item.id }}</td>
                    <td>{{ item.titulo }}</td>
                    <td>{{ item.nombre_link }}</td>
                    <td>{{ item.descripcion }}</td>
                    <td>{{ item.tipo }}</td>
                    <td>{{ item.cantidad }}</td>
                    <td>{{ item.precio_sin_descuento }}</td>
                    <td>{{ item.precio }}</td>
                    <td>{{ item.url }}</td>
                    <td>
                        <button class="btn btn-primary" @click="editar_producto_input(item)">Editar</button>
                    </td>
                </tr>
            </tbody>
        </table>
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
table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

td, th {
  border: 1px solid #dddddd;
  text-align: center;
  padding: 8px;
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
            agregar_producto: {
                id: "",
                titulo: "",
                nombre_link: "",
                descripcion: "",
                tipo: "",
                cantidad: "",
                precio_sin_descuento: "",
                precio: "",
                url: ""
            },
            editar_producto: {
                id: "",
                titulo: "",
                nombre_link: "",
                descripcion: "",
                tipo: "",
                cantidad: "",
                precio_sin_descuento: "",
                precio: "",
                url: ""
            },
            eliminar_producto_id: ""
        };
    },
    methods: {
        async ver_productos() {
            try {
                const response = await axios.get("https://backend-phi-gules.vercel.app/crud-stock", {
                    params: {
                        cantidad: this.cantidad
                    }
                });
                this.datos_totales = response.data;
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        },
        async crear_producto() {
            try {
                axios.post("https://backend-phi-gules.vercel.app/crud-stock", {
                    id: this.agregar_producto.id,
                    titulo: this.agregar_producto.titulo,
                    nombre_link: this.agregar_producto.nombre_link,
                    descripcion: this.agregar_producto.descripcion,
                    tipo: this.agregar_producto.tipo,
                    cantidad: this.agregar_producto.cantidad,
                    precio_sin_descuento: this.agregar_producto.precio_sin_descuento,
                    precio: this.agregar_producto.precio,
                    url: this.agregar_producto.url,
                });
                this.ver_productos();
            }
            catch (error) {
                console.error(error);
            }
        },
        async Editar_producto() {
            try {
                axios.put("https://backend-phi-gules.vercel.app/crud-stock", {
                    id: this.editar_producto.id,
                    titulo: this.editar_producto.titulo,
                    nombre_link: this.editar_producto.nombre_link,
                    descripcion: this.editar_producto.descripcion,
                    tipo: this.editar_producto.tipo,
                    cantidad: this.editar_producto.cantidad,
                    precio_sin_descuento: this.editar_producto.precio_sin_descuento,
                    precio: this.editar_producto.precio,
                    url: this.editar_producto.url,
                });
                this.ver_productos();
            }
            catch (error) {
                console.error(error);
            }
        },
        async Eliminar_producto() {
            try {
                axios.delete("https://backend-phi-gules.vercel.app/crud-stock", {
                    params: {
                        id: this.eliminar_producto_id
                    }
                });
                this.ver_productos();
            }
            catch (error) {
                console.error(error);
            }
        },
        editar_producto_input(item) {
            this.editar_producto.id = item.id;
            this.editar_producto.titulo = item.titulo;
            this.editar_producto.nombre_link = item.nombre_link;
            this.editar_producto.descripcion = item.descripcion;
            this.editar_producto.tipo = item.tipo;
            this.editar_producto.cantidad = item.cantidad;
            this.editar_producto.precio_sin_descuento = item.precio_sin_descuento;
            this.editar_producto.precio = item.precio;
            this.editar_producto.url = item.url;
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
        this.ver_productos();
    }
};
</script>