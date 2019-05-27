<template>
  <el-row>
    <el-col :span="24">
      <el-card class="box-card">
        <el-row>
          <el-form ref="form" :model="form" label-width="120px">
            <el-col :span="12">
              <el-row>
                <el-form-item label="Nombre">
                  <el-input v-model="form.name"></el-input>
                </el-form-item>
                <el-form-item label="Nº documento">
                  <el-input v-model="form.ci"></el-input>
                </el-form-item>
              </el-row>
            </el-col>
            <el-col :span="12">
              <el-form-item label="Default">
                <el-date-picker
                  v-model="date"
                  type="daterange"
                  range-separator="To"
                  start-placeholder="Start date"
                  end-placeholder="End date"
                ></el-date-picker>
              </el-form-item>
              <el-form-item label="Habitaciones">
                <el-select v-model="value" placeholder="Select" id="selector-bedrooms">
                  <el-option v-for="item in rooms" :key="item.id" :label="item.id" :value="item.id"></el-option>
                </el-select>
              </el-form-item>
              <el-row>
                <el-col :span="12" id="total">Total</el-col>
                <el-col :span="12" id="sendButton">
                  <el-button type="primary">Primary</el-button>
                </el-col>
              </el-row>
            </el-col>
          </el-form>
        </el-row>
      </el-card>
    </el-col>
  </el-row>
</template>

<script>
export default {
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
        }
    },
    methods: {
        onSubmit() {
            console.log('submit!')
        },
        agregarReserva() {
            this.$axios
                .post('http://157.230.12.110:8080/api/reservations', {
                    checkin_name: this.form.checkin_name,
                    lastName: this.lastName,
                    start: this.form.start,
                    end: this.form.end,
                    finalPrice: this.form.finalPrice,
                    document_number: this.form.document_number,
                    checkin_name: this.form.checkin_name,
                    code: this.form.code,
                    room_id: this.form.room_id,
                })
                .then(response => {
                    console.log(response.data)
                    this.form.checkin_name = ''
                    this.form.document_number = ''
                })
        },
        obtenerHabitaciones() {
            this.$axios(`http://157.230.12.110:8080/api/rooms`).then(
                response => {
                    this.rooms = response.data
                }
            )
        },
    },
    create() {
        this.obtenerHabitaciones()
    },
}
</script>

<style>
.box-card {
    height: 25vh;
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
</style>