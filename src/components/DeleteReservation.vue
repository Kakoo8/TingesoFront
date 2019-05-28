<template>


    <el-col :span="10">
        <el-card class="box-card3">
            <el-form   >
                <el-col >
                <el-row>

                <el-form-item label="Numero de reserva">
                    <el-input placeholder="Ingrese el numero de reserva" v-model="numeroReserva"></el-input>
                </el-form-item>
                
                
                <el-form-item >

                    
                    <el-button type="primary" icon="el-icon-delete" v-on:click="eliminarReserva(numeroReserva)">Eliminar</el-button>
                
                </el-form-item>

                </el-row>
                </el-col>
            
            </el-form>
        </el-card>
    </el-col>               

</template>

<script>
import axios from 'axios'
export default {
    data() {
        return {

           numeroReserva: '',
            
            reservations:[],
        }
    },
    methods: {
        eliminarReserva(numeroReserva) {

            axios
                .delete('http://157.230.12.110:8080/api/reservations/'+{numeroReserva}, {
                    
                })
                .then(response => {
                     this.$notify({
               title: "Reserva Eliminada",
               message: "La reserva fue eliminada correctamente",
               type: "success"
             });

                })
                 .catch(error =>
            this.$notify.error({
              title: "Error",
              message: "No se pudo procesar su solicitud. Error: " + error.message
            })
          )
        },
        onSubmit() {
            console.log('submit!')
        },
    },    
    created(){
              
            axios.get(`http://157.230.12.110:8080/api/reservations`).then(response => {
                this.reservations = response.data
            })
        
    }
}
</script>