<template>
  <el-row>
    <el-col :span="24">
      <el-card class="box-card">
          <div slot="header" class="clearfix">
              <span>Reserva</span>
          </div>
          <div>
              <el-form ref="form" :model="form" label-width="120px">
                  <el-row>
                      <el-col :span="9">
                        <el-form-item label="Nombre">
                            <el-input placeholder="Ingrese nombre cliente" v-model="form.checkinName"></el-input>
                        </el-form-item>

                        <el-form-item label="Nª Documento">
                            <el-input placeholder="Ingrese número documento" v-model="form.documentNumber"></el-input>
                        </el-form-item>
                      </el-col>
                      <el-col :span="15">
                        <el-form-item label="Fechas">
                            <el-date-picker
                            v-model="form.date"
                            type="daterange"
                            range-separator="-"
                            start-placeholder="Inicio"
                            end-placeholder="Término"
                            >
                            </el-date-picker>
                        </el-form-item>

                        <el-form-item label="Habitación">
                            <el-select v-model="form.roomId" placeholder="Seleccione habitación">
                                <el-option
                                v-for="item in rooms"
                                :key="item.id"
                                :label="item.id"
                                :value="item.id">
                                </el-option>
                            </el-select>
                        </el-form-item>
                      </el-col>
                  </el-row>
                  <el-row class="button-row">
                      <el-button type="primary" plain @click="addRoom()">Añadir Habitación</el-button>
                    <el-button type="primary" @click="postReservation()">Reservar</el-button>
                  </el-row>
              </el-form>
            </div>
      </el-card>
    </el-col>
    Habitaciones a reservar: {{postRooms}}
    <hr>
  </el-row>
</template>

<script>
import axios from 'axios'
import moment from 'moment'
import "moment/locale/es"

export default {
    props: ['rooms2', 'reservations2'],
    data() {
        return {
            rooms: [],
            form: {
                id: '',
                date: [],
                finalPrice: 0,
                documentNumber: '',
                checkinName: '',
                code: '',
                roomId: null
            },
            date: '',
            value: '',
            postRooms: [],
            postDates: []
        }
    },
    methods: {
        onSubmit() {
            console.log('submit!')
        },
        addRoom() {
            this.postRooms.push(this.form.roomId);
            this.postDates.push(this.form.date);
        },
        postReservation() {
            for (let i = 0; i < this.postRooms.length; i++) {
                let start = moment(this.postDates[i][0]);
                let end = moment(this.postDates[i][1]);
                let code = makeid(10);
                axios({
                    method: "POST",
                    url: "http://157.230.12.110:8080/api/reservations/",
                    data: {
                        start: start,
                        end: end,
                        finalPrice: this.finalPrice,
                        checkinName: this.form.checkin_name,
                        lastName: this.lastName,
                        documentNumber: this.form.document_number,
                        code: code,
                        roomId: this.postRooms[i],
                    },
                    config: {
                        headers: {
                            "Content-Type": "application/json"
                            }
                    }
                    })
                    .then(response => {
                        console.log(response.data);
                        this.$notify({
                            title: "Reservation Created",
                            message: "It's now in the rack.",
                            type: "success"
                        });
                    })
                    .catch(error => this.$notify.error({
                        title: "Error",
                        message: "There was an error trying to create the reservation"
                    }));
                }
        },
        removeRoom() {
            if (this.list_rooms.length != 1) {
                this.list_rooms.splice(-1, 1)
            }
        },
        obtenerHabitaciones() {
            axios.get(`http://157.230.12.110:8080/api/rooms`).then(response => {
                this.rooms = response.data
            })
        },

        open() {
            const h = this.$createElement

            this.$notify({
                title: 'Reserva realizada',
                message: h('i', { style: 'color: cyan' }, 'This is a reminder'),
            })
        },
        post() {
            let today = moment();
            let tomorrow = today.clone().add(1, 'day');
            axios({
                method: "POST",
                url: "http://157.230.12.110:8080/api/reservations/",
                data: {
                    start: today,
                    end: tomorrow,
                    finalPrice: 100000,
                    documentNumber: '192642264',
                    checkinName: 'Leandro Pizarro',
                    code: 'L0BPJ530HB',
                    roomId: 2
                },
                config: {
                    headers: {
                        "Content-Type": "application/json"
                        }
                }
            })
            .then(response => {
                console.log(response.data);
                this.$notify({
                title: "Reservation Created",
                message: "It's now in the rack.",
                type: "success"
                });
            })
            .catch(error => this.$notify.error({
                title: "Error",
                message: "There was an error trying to create the reservation"
            }));
        }
    },
    created() {
        this.obtenerHabitaciones()
    }
}

function makeid(length) {
    var result = ''
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
    var charactersLength = characters.length
    for (var i = 0; i < length; i++) {
        result += characters.charAt(
            Math.floor(Math.random() * charactersLength)
        )
    }
    return result
}
</script>

<style>
.box-card {
    text-align: left;
    height: 20em;
}
/* .box-card > .el-card__body {
    padding: 0px;
    height: 100%;
} */

</style>