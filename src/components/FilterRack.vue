<template>
    <el-card class="box-card filters" id="main-box" >
   
      <el-form ref="form" class="form" :model="form" label-position= "top" label-width="auto" >
        
        <el-form-item  label="Capacidad">
        
          <div class="block">

            <el-select  v-model="value" clearable placeholder="Seleccione Capacidad" >
              <el-option>

              </el-option>
            </el-select>
        
          </div>
        
        </el-form-item> 
        
        <el-form-item label="Fecha de Inicio">   
        
          <div class="block">
            
            <el-date-picker
                v-model="value1"
                type="date"
                placeholder="Seleccione fecha">
            </el-date-picker>
        
          </div>
        
        </el-form-item>
        
        <el-form-item label="Fecha de Termino">
        
          <div class="block">
            
            <el-date-picker
                v-model="value2"
                type="date"
                placeholder="Seleccione fecha">
            </el-date-picker>
        
          </div>
        
        </el-form-item>
        
        <el-form-item label="">
        
            <div class="block">

              <el-button  type="primary" icon="el-icon-search">Buscar</el-button>
          
            </div>
        
        </el-form-item>
        
        <el-form-item label="Habitaciones">
        
            <el-card class="box-card">
        
              <div v-for="o in 4" :key="o" class="text item">
              {{'List item ' + o }}
              </div>
        
            </el-card>
        
        </el-form-item>  
      
      </el-form>  
 
    </el-card>
</template>

<style>
    #main-box {
    height: 85vh;
  }
  .el-input__inner{
    width: 220px;
  }
  .form{
    text-align: left;
    padding: 5px; 
  }
    .block{
    text-align: center; 
  }
  .el-form-item__label{
    padding-left: 55px !important; 
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