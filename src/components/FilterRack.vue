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
          <el-button type="primary" icon="el-icon-search">Buscar</el-button>
        </div>
      </el-form-item>

      <el-form-item>
        <el-card class="box-card">
          <el-table :data="habitaciones" style="width: 100%">
            <el-table-column prop="id" label="N°Habitación" width="auto"></el-table-column>
            <el-table-column prop="price" label="Precio" width="auto"></el-table-column>
          </el-table>
        </el-card>
      </el-form-item>
    </el-form>
  </el-card>
</template>

<style>
#main-box {
    height: 85vh;
}
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

#forms-box {
    display: flex;
    flex-direction: column;
    align-items: center;
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
    },
    created() {
        axios.get(`http://157.230.12.110:8080/api/rooms`).then(response => {
            this.habitaciones = response.data
        })
        axios
            .get(`http://157.230.12.110:8080/api/room_types`)
            .then(response => {
                this.type_rooms = response.data
            })
    },
}
</script>