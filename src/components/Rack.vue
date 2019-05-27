<template>
  <el-col :span="24" id="rack">
    <el-card class="box-card" id="rack-box">
      <el-button type="primary" v-on:click="getAll()" round > NO PUDE HACER FUNCIONAR EL BOTON  </el-button>
      <p>{{reservas}}</p>
    </el-card>
  </el-col>
</template>

<script>
import axios from 'axios'

export default {
    data() {
        return {
        rooms: '',
        reservas:[],
        };
    },

    props: [],
    created(){

        axios.get(`http://157.230.12.110:8080/api/reservations`)
            .then( response => {
                this.reservas = response.data
            })
    },
    methods: {
        getAll() {
            axios.get('http://157.230.12.110:8080/api/rooms').then(response => {
                this.rooms = response.data
            })
        },
    },
}
</script>

<style>
#rack {
    padding-top: 0px;
    padding-bottom: 10px;
}
#rack-box {
    height: 56vh;
}
#register {
    height: 25vh;
}
</style>
