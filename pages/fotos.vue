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
            <input type="text" placeholder="ID" v-model="agregar_foto.id" />
            <br />
            <input type="text" placeholder="src1" v-model="agregar_foto.src1" />
            <br />
            <input type="text" placeholder="srcset1" v-model="agregar_foto.srcset1"  />
            <br />
            <input type="text" placeholder="src2" v-model="agregar_foto.src2" />
            <br />
            <input type="number" placeholder="srcset2" v-model="agregar_foto.srcset2" />
            <br />
            <input type="text" placeholder="src3" v-model="agregar_foto.src3" />
            <br />
            <input type="text" placeholder="srcset3" v-model="agregar_foto.srcset3" />
            <br />
            <button @click="Crear_fotos()">
                confirmar
            </button>
        </div>
        <div v-if="boton_editar">
            <input type="text" placeholder="ID" v-model="editar_foto.id" />
            <br />
            <input type="text" placeholder="src1" v-model="editar_foto.src1" />
            <br />
            <input type="text" placeholder="srcset1" v-model="editar_foto.srcset1"  />
            <br />
            <input type="text" placeholder="src2" v-model="editar_foto.src2" />
            <br />
            <input type="number" placeholder="srcset2" v-model="editar_foto.srcset2" />
            <br />
            <input type="text" placeholder="src3" v-model="editar_foto.src3" />
            <br />
            <input type="text" placeholder="srcset3" v-model="editar_foto.srcset3" />
            <br />
            <button @click="Editar_fotos()">
                confirmar
            </button>
        </div>
        <div v-if="boton_eliminar">
            <input type="text" placeholder="ID" v-model="eliminar_foto_id" />
            <button @click="Eliminar_fotos()">
                confirmar
            </button>
        </div>
        <br />
        <div class="table-container">
            <table class="custom-table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>SRC1</th>
                        <th>SRCSET1</th>
                        <th>SRC2</th>
                        <th>SRCSET2</th>
                        <th>SRC3</th>
                        <th>SRCSET3</th>
                        <th>ACCIONES</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="item in datos_totales" :key="item.id" align="center">
                        <td>{{ item.producto_id }}</td>
                        <td>{{ item.src1 }}</td>
                        <td>{{ item.srcset1 }}</td>
                        <td>{{ item.src2 }}</td>
                        <td>{{ item.srcset2 }}</td>
                        <td>{{ item.src3 }}</td>
                        <td>{{ item.srcset3 }}</td>
                        <td>
                            <button class="btn btn-primary" @click="editar_foto_input(item)">Editar</button>
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
            agregar_foto: {
                producto_id: "",
                src1: "",
                srcset1: "",
                src2: "",
                srcset2: "",
                src3: "",
                srcset3: "",
            },
            editar_foto: {
                producto_id: "",
                src1: "",
                srcset1: "",
                src2: "",
                srcset2: "",
                src3: "",
                srcset3: "",
            },
            eliminar_foto_id: ""
        };
    },
    methods: {
        async ver_fotos() {
            try {
                const response = await axios.get("https://backend-phi-gules.vercel.app/crud-fotos");
                this.datos_totales = response.data;
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        },
        async Crear_fotos() {
            try {
                axios.post("https://backend-phi-gules.vercel.app/crud-fotos", {
                    producto_id: this.agregar_foto.producto_id,
                    src1: this.agregar_foto.src1,
                    srcset1: this.agregar_foto.srcset1,
                    src2: this.agregar_foto.src2,
                    srcset2: this.agregar_foto.srcset2,
                    src3: this.agregar_foto.src3,
                    srcset3: this.agregar_foto.srcset3,
                });
                this.ver_fotos();
            }
            catch (error) {
                console.error(error);
            }
        },
        async Editar_fotos() {
            try {
                axios.put("https://backend-phi-gules.vercel.app/crud-fotos", {
                    producto_id: this.agregar_foto.producto_id,
                    src1: this.agregar_foto.src1,
                    srcset1: this.agregar_foto.srcset1,
                    src2: this.agregar_foto.src2,
                    srcset2: this.agregar_foto.srcset2,
                    src3: this.agregar_foto.src3,
                    srcset3: this.agregar_foto.srcset3,
                });
                this.ver_fotos();
            }
            catch (error) {
                console.error(error);
            }
        },
        async Eliminar_fotos() {
            try {
                axios.delete("https://backend-phi-gules.vercel.app/crud-fotos", {
                    params: {
                        id: this.eliminar_foto_id
                    }
                });
                this.ver_fotos();
            }
            catch (error) {
                console.error(error);
            }
        },
        editar_foto_input(item) {
            this.editar_foto.id = item.producto_id;
            this.editar_foto.src1 = item.src1;
            this.editar_foto.srcset1 = item.srcset1;
            this.editar_foto.src2 = item.src2;
            this.editar_foto.srcset2 = item.srcset2;
            this.editar_foto.src3 = item.src3;
            this.editar_foto.srcset3 = item.srcset3;
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
        this.ver_fotos();
    }
};
</script>