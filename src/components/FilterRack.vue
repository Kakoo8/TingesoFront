<template>
    <el-card class="box-card filters" id="main-box" >
   
      <el-form ref="form" class="form" :model="form" label-position= "top" label-width="auto" >
        
        <el-form-item  label="Capacidad">
        
          <div class="block">

            <el-select  v-model="value" clearable placeholder="Seleccione Capacidad" >
              <el-option v-for="item in type_rooms"
                :key="item.id"
                :label="item.name"
                :value="item.id">
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
        
        <el-form-item >
        
            <div class="block">

              <el-button  type="primary" icon="el-icon-search">Buscar</el-button>
          
            </div>
        
        </el-form-item>
        
        <el-form-item >
            
            <el-card class="box-card" scrollable >
              <el-table
                :data="habitaciones"
                style="width: 100%">
                <el-table-column
                  prop="id"
                  label="N°Habitación"
                  sortable
                  width="auto">
                </el-table-column>
                <el-table-column
                  prop="price"
                  label="Precio"
                  width="auto"
                  sortable>
                </el-table-column>

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
import axios from 'axios';





  export default {
    data() {
      return {
        pickerOptions: {
          disabledDate(time) {
            return time.getTime() > Date.now();
          },
        habitaciones:[],
        type_room:[],  
        },
        value1: '',
        value2: '',
        
      };
    },
    created() {
        axios.get(`http://157.230.12.110:8080/api/rooms`)
            .then( response => {
                this.habitaciones = response.data
            })
        axios.get(`http://157.230.12.110:8080/api/room_types`)
            .then( response => {
                this.type_room = response.data
            })    
    },
  };
</script>