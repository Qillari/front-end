<template>
    <div class="container">
        <br />
        <br />
        <br />
        <br />
        <br />
        <div class="row">
            <div class="col">
                <div>
                    <highchart :options="chartOptions" style="width:100%;" />
                </div>
            </div>
            <div class="col">

                <highchart :options="chartOptions" style="width:100%; min-width: 100%" />

            </div>
        </div>
        <div class="row">
            <div class="col">
                <div>
                    <highchart :options="chartOptions" style="width:100%;" />
                </div>
            </div>
            <div class="col">

                <highchart :options="chartOptions" style="width:100%; min-width: 100%" />

            </div>
        </div>
        <div class="row">
            <div class="col">
                <div>
                    <highchart :options="chartOptions" style="width:100%;" />
                </div>
            </div>
            <div class="col">

                <highchart :options="chartOptions" style="width:100%; min-width: 100%" />

            </div>
        </div>
        <br />
        <div class="table-container">
            <table class="custom-table">
                <thead>
                    <tr>
                        <th>FECHA</th>
                        <th>ID_STOCK</th>
                        <th>COMPRAS_CANTIDAD_TOTAL</th>
                        <th>VENTAS_CANTIDAD_TOTAL</th>
                        <th>TOTAL_COMPRAS</th>
                        <th>TOTAL_VENTAS</th>
                        <th>TOTAL</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="item in datos_totales" :key="item.id" align="center">
                        <td>{{ item.fecha }}</td>
                        <td>{{ item.id_stock }}</td>
                        <td>{{ item.compra_cantidad_total }}</td>
                        <td>{{ item.venta_cantidad_total }}</td>
                        <td>{{ item.total_compras }}</td>
                        <td>{{ item.total_ventas }}</td>
                        <td>{{ item.total }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <br />
    </div>
</template>
<script>
import axios from "axios";
export default {
    data() {
        return {
            grafico1: {
                title: 'primer grafico',
                subtitle: 'More details here',
                caption: '',
                points: [10, 0, 8, 2, 6, 4, 5, 5],
                seriesColor: '',
                animationDuration: 1000,
                chartType: 'Column',
                seriesName: 'My Data',
                yAxis: 'My Values',
                xAxis: 'My Values',
                lastPointClicked: {
                    timestamp: '',
                    x: '',
                    y: ''
                },
                dato: false
            },
            datos_totales: [],
            cantidad: 0,
        }
    },
    methods: {
        async ver_compras() {
            try {
                const response = await axios.get("https://backend-phi-gules.vercel.app/ganancia-perdida", {
                    params: {
                        cantidad: this.cantidad
                    }
                });
                this.datos_totales = response.data;
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        },
    },
    computed: {
        chartOptions() {
            return {
                accessibility: { enabled: false },
                caption: {
                    text: this.grafico1.caption
                },
                chart: {
                    className: 'my-chart',
                    type: this.grafico1.chartType.toLowerCase()
                },
                plotOptions: {
                    series: {
                        cursor: 'pointer',
                        point: {
                            events: {
                                click() {
                                    this.$emit('pointClicked', this)
                                }
                            }
                        }
                    }
                },
                yAxis: [{
                    title: {
                        text: this.grafico1.yAxis,
                        style: {
                            color: '#000000'
                        }
                    }
                }],
                xAxis: [{
                    title: {
                        text: this.grafico1.xAxis,
                        style: {
                            color: '#000000'
                        }
                    }
                }],
                title: {
                    text: `${this.grafico1.title} ` +
                        (this.grafico1.lastPointClicked.timestamp !== ''
                            ? `(Point clicked: ${this.grafico1.lastPointClicked.timestamp})`
                            : '')
                },
                subtitle: {
                    text: `${this.grafico1.subtitle}`
                },
                series: [{
                    type: '',
                    name: this.grafico1.seriesName,
                    data: Array.from(this.grafico1.points),
                }],
                credits: {
                    enabled: false
                }
            }
        }
    },
    created() {
        this.ver_compras();
    }
}
</script>

<style scoped>
.container {
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
    height: 100%;
    width: 95%;
}

.row {
    display: flex;
    flex-wrap: wrap;
    margin-left: 0;
    margin-right: 0;
    height: 100%;
    min-width: 100%;
}

.col {
    width: 50%;
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