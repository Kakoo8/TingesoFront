<template>
  <el-row>
    <el-col :span="24">
      <el-card class="box-card">
        <el-form
          class="box-card-form"
          ref="form"
          :model="form"
          label-position="top"
          label-width="auto"
        >
          <el-col class="leftCard" :span="12" id="col">
            <div>
              <h2>Reserva</h2>
              <label>Nombre</label>
              <el-input placeholder="nombre" v-model="form.checkin_name"></el-input>
              <label>Nº documento</label>
              <el-input placeholder="Nº documento" v-model="form.document_number"></el-input>
              <div class="total-button">
                <el-button type="primary" @click="agregarReserva()">Reservar</el-button>
              </div>
            </div>
          </el-col>
          <el-col class="rightCard" :span="12" id="col">
            <div>
              <div class="title-buttons">
                <span>Seleccione Habitación y fechas</span>
                <div>
                  <el-button type="success" icon="el-icon-plus" @click="addRoom()" circle></el-button>
                  <el-button
                    v-if="list_rooms.length != 1"
                    type="danger"
                    icon="el-icon-minus"
                    @click="removeRoom()"
                    circle
                  ></el-button>
                </div>
              </div>
              <div class="scroll-container">
                <div class="rooms-container" v-for="(list_room, index) in list_rooms" :key="index">
                  <label class="label">Fechas</label>
                  <el-date-picker
                    v-model="list_rooms.date"
                    type="daterange"
                    range-separator="To"
                    start-placeholder="Start date"
                    end-placeholder="End date"
                  ></el-date-picker>
                  <label class="label">Habitación</label>
                  <el-select v-model="list_room.value" placeholder="Select" id="selector-bedrooms">
                    <el-option
                      v-for="item in rooms"
                      :key="item.id"
                      :label="item.id"
                      :value="item.id"
                    ></el-option>
                  </el-select>
                </div>
              </div>
            </div>
          </el-col>
        </el-form>
      </el-card>
    </el-col>
  </el-row>
</template>

<script>
import axios from 'axios'
export default {
    props: ['rooms2', 'reservations2'],
    data() {
        return {
            form: {
                id: '',
                start: '',
                end: '',
                finalPrice: '',
                document_number: '',
                checkin_name: '',
                code: '',
                room_id: '',
            },
            date: '',
            value: '',
            rooms: [],
            list_rooms: [
                {
                    date: '',
                    value: '',
                },
            ],
        }
    },
    methods: {
        onSubmit() {
            console.log('submit!')
        },
        agregarReserva() {
            this.axios
                .post('http://157.230.12.110:8080/api/reservations', {
                    checkinName: this.form.checkin_name,
                    lastName: this.lastName,
                    start: this.form.start,
                    end: this.form.end,
                    finalPrice: this.form.finalPrice,
                    documentNumber: this.form.document_number,
                    checkinName: this.form.checkin_name,
                    code: this.form.code,
                    roomId: this.form.room_id,
                })
                .then(response => {
                    console.log(response.data)
                    this.form.checkin_name = ''
                    this.form.document_number = ''
                })
        },
        addRoom() {
            this.list_rooms.push({
                date: '',
                value: '',
            })
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
    },
    created() {
        console.log(this.rooms2)
        console.log(this.reservations2)
        this.obtenerHabitaciones()
    },
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
    height: 18em;
}
.box-card > .el-card__body {
    padding: 0px;
    height: 100%;
}

.box-card-form {
    height: 100%;
}

.leftCard {
    height: 100%;
    padding: 1.3em !important;
}

.leftCard > div {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}

.leftCard > div > h2 {
    margin-bottom: 0.2em !important;
    margin-left: 0px !important;
    margin-right: 0px !important;
    margin-top: 0px !important;
}

.leftCard > div > .el-input {
    width: 100% !important;
    margin-bottom: 0.5em;
}

.leftCard > div > .el-input > input {
    width: 100% !important;
}

.leftCard > div > .total-button > button {
    margin-top: 0.5em;
    width: 10em;
}
.leftCard > div > .total-button {
    width: 100% !important;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
}

.leftCard > div > .total-button > span {
    font-weight: bold;
    font-size: 1.2em;
}

.rightCard {
    height: 100%;
    padding: 1.3em !important;
}

.rightCard > div {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}

.rightCard > div > .title-buttons {
    margin-bottom: 0.5em !important;
    margin-left: 0px !important;
    margin-right: 0px !important;
    margin-top: 0px !important;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    align-items: center;
}

.rightCard > div > .title-buttons > span {
    background-color: #409eff;
    color: white;
    padding-left: 0.6em;
    padding-right: 0.6em;
    padding-top: 0.3em;
    padding-bottom: 0.3em;
    border-radius: 0.7em;
    font-weight: bold;
}
.rightCard > div > .scroll-container > .rooms-container > .el-input {
    width: 100% !important;
    margin-bottom: 0.5em;
}

.rightCard > div > .scroll-container > .rooms-container > .el-input > input {
    width: 100% !important;
}

.rightCard > div > .scroll-container > .rooms-container > button {
    width: 100% !important;
    margin-top: 0.5em;
}

.rightCard > div > .scroll-container > .rooms-container > .el-date-editor {
    width: 100% !important;
    margin-bottom: 0.5em;
}

.rightCard > div > .scroll-container > .rooms-container > .el-select {
    width: 100% !important;
}

.rightCard > div > .scroll-container {
    width: 100%;
    height: 16vh;
    overflow-y: scroll;
}
.rightCard
    > div
    > .scroll-container
    > .rooms-container
    > .el-select
    > .el-input {
    width: 100% !important;
}

.rightCard
    > div
    > .scroll-container
    > .rooms-container
    > .el-select
    > .el-input
    > input {
    width: 100% !important;
}

.rooms-container {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-content: flex-start;
    margin-bottom: 0.7em;
    padding-bottom: 1em;
    border-bottom: 1px solid #f2f2f2;
}

.label {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
}

#selector-bedrooms {
    width: 350px;
}

#total {
    padding-left: 15%;
}

#sendButton {
    padding-left: 25%;
    padding-top: 0%;
}

#col {
    padding: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
}
</style>