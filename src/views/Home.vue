<template>
  <div class="home">
    <el-container>
      <el-main>
        <el-row>
          <el-col :span="6" id="left-box">
            <FilterRack/>
          </el-col>
          <el-col :span="18" id="right-box">
            <Rack v-if="dataReady" :rooms="roomsFromDB" :reservations="reservationsFromDB"/>
            <Reservation
              v-if="dataReady"
              :rooms2="roomsFromDB"
              :reservations2="reservationsFromDB"
            />
          </el-col>
        </el-row>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import axios from 'axios'
import Rack from '@/components/Rack.vue'
import FilterRack from '@/components/FilterRack.vue'
import Reservation from '@/components/Reservation.vue'

export default {
    name: 'home',
    components: {
        Rack,
        FilterRack,
        Reservation,
    },
    data() {
        return {
            roomsFromDB: [],
            reservationsFromDB: [],
            dataReady: false,
        }
    },
    created() {
        axios.get('http://157.230.12.110:8080/api/rooms').then(response => {
            this.roomsFromDB = response.data
            axios
                .get('http://157.230.12.110:8080/api/reservations')
                .then(response => {
                    this.reservationsFromDB = response.data
                    this.dataReady = true
                })
        })
    },
}
</script>

<style>
.el-header {
    color: #333;
    text-align: center;
    line-height: 60px;
}

.el-main {
    background-color: #fcfcfc;
    color: #333;
    text-align: center;
    height: -webkit-fill-available;
}

.el-col {
    border-radius: 4px;
    padding: 2%;
}
#left-box {
    padding-right: 1vh;
}
#right-box {
    padding-left: 1vh;
}
</style>