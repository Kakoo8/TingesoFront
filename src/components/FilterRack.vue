<template>
  <el-card class="box-card filters" id="main-box">
    <el-form ref="form"  label-position="top" label-width="auto">
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
            <el-date-picker v-model="value1" type="date" placeholder="Seleccione fecha"></el-date-picker>
          </div>
        </el-form-item>

        <el-form-item label="Fecha de Termino">
          <div class="block">
            <el-date-picker v-model="value2" type="date" placeholder="Seleccione fecha"></el-date-picker>
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
            habitaciones: [],
            type_rooms: [],
            value: '',
            value1: '',
            value2: '',
        }
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