<template>
    <el-card class="box-card">
    <el-select  v-model="value" clearable placeholder="Capacidad">
    <el-option>

    </el-option>
    </el-select>
    <div class="block">
        
        
        <el-date-picker
            v-model="value1"
            type="date"
            placeholder="Fecha Inicio">
        </el-date-picker>
    </div>
    <div class="block">
        
        <el-date-picker
            v-model="value2"
            type="date"
            placeholder="Fecha Termino">
        </el-date-picker>
  </div>
        <el-button type="primary" icon="el-icon-search">Buscar</el-button>

        <el-card class="box-card">
            <div v-for="o in 4" :key="o" class="text item">
            {{'List item ' + o }}
            </div>
        </el-card>
    </el-card>
</template>

<style>
    .el-card {
    min-height: 700px;
    max-height: 700px;
  }
</style>

<script>
  export default {
    data() {
      return {
        pickerOptions: {
          disabledDate(time) {
            return time.getTime() > Date.now();
          },
          
        },
        value1: '',
        value2: '',
      };
    }
  };
</script>