<template>
  <el-card class="box-card filters" id="main-box">
    <el-form ref="form" label-position="top" label-width="auto">
      <div id="forms-box">
        <el-form-item label="Tipo de Habitacion">
          <div class="block">
            <el-select v-model="value" placeholder="Seleccione tipo">
              <el-option
                v-for="item in type_rooms"
                :key="item.id"
                :label="item.name"
                :value="item.id"
              ></el-option>
            </el-select>
          </div>
        </el-form-item>
        <el-form-item label="Fecha de Inicio">
          <div class="block">
            <el-date-picker
              @input="validateEndDate"
              v-model="task.start_at"
              type="date"
              placeholder="Seleccione fecha"
            ></el-date-picker>
          </div>
        </el-form-item>

        <el-form-item label="Fecha de Termino">
          <div class="block">
            <el-date-picker
              v-model="task.end_at"
              :picker-options="dueDatePickerOptions"
              type="date"
              placeholder="Seleccione fecha"
            ></el-date-picker>
          </div>
        </el-form-item>
      </div>
      <el-form-item>
        <div class="block">
          <el-button type="primary" icon="el-icon-search" v-on:click="filterbyType(value)">Buscar</el-button>
        </div>
      </el-form-item>

      <el-form-item>
        <el-card class="box-card" id="show-rooms">
          <el-table :data="filtered" style="width: 100%">
            <div>
              <el-table-column prop="id" label="N° Habitación" width="auto"></el-table-column>
              <el-table-column prop="price" label="Precio" width="auto"></el-table-column>
            </div>
          </el-table>
        </el-card>
      </el-form-item>
    </el-form>
  </el-card>
</template>

<style>
.el-input__inner {
    width: 220px;
}
.form {
    text-align: left;
    padding: 5px;
}
.block {
    text-align: center;
}
#main-box {
    height: 85vh;
}
#forms-box {
    display: flex;
    flex-direction: column;
    align-items: center;
}

#show-rooms {
    overflow-y: scroll;
    height: 320px !important;
}
</style>

<script>
import axios from 'axios'

export default {
    data() {
        return {
            pickerOptions: {
                disabledDate(time) {
                    return time.getTime() > Date.now()
                },
            },
            task: {
                start_at: new Date(),
                end_at: new Date(),
            },
            dueDatePickerOptions: {
                disabledDate: this.disabledDueDate,
            },
            habitaciones: [],
            type_rooms: [],
            filtered:[],
            value: '',
            startValue: '',
            endValue: '',
        }
    },
    methods: {
        disabledDueDate(time) {
            return time.getTime() < this.task.start_at
        },
        validateEndDate() {
            if (this.task.start_at > this.task.due_at) {
                this.task.due_at = this.task.start_at
            }
        },
        filterbyType(value){
          var data_filter = this.habitaciones.filter( element => element.roomTypeId ==value)
          console.log(data_filter)
          this.filtered=data_filter
          console.log("aprete el boton")
          
        },
    },
    created() {
        axios.get(`http://157.230.12.110:8080/api/rooms`).then(response => {
            this.habitaciones = response.data
            this.filtered=this.habitaciones
        })
        axios
            .get(`http://157.230.12.110:8080/api/room_types`)
            .then(response => {
                this.type_rooms = response.data
            })
    },
}
</script>