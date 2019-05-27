<template>


    <el-col :span="10">
        <el-card class="box-card3">
            <el-form   >
                <el-col >
                <el-row>

                <el-form-item label="Numero de reserva">
                    <el-input placeholder="Ingrese el numero de reserva" v-model="document_number"></el-input>
                </el-form-item>
                <el-form-item label="Nombre en reserva">
                    <el-input placeholder="Ingrese el nombre registrado" v-model="chekin_name"></el-input>
                </el-form-item>
                
                <el-form-item >

                    
                    <el-button type="primary" icon="el-icon-delete">Eliminar</el-button>
                
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

            document_number: '',
            chekin_name:'',
        }
    },
    methods: {
        onSubmit() {
            console.log('submit!')
        },
    },    
}
</script>