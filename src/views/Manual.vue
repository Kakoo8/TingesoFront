<template>
  <div class="manual">
    <el-container>
      <el-main>
        <el-row class="main-row">
          <el-card class="box-card">
            <div slot="header" class="clearfix">
              <span>Manual de usuario sistema Hotel</span>
            </div>
            <div class="acordeon-container">
              <el-collapse v-model="activeName" accordion>
                <el-collapse-item title="Rack" name="1">
                  <div>Consistent with real life: in line with the process and logic of real life, and comply with languages and habits that the users are used to;</div>
                  <div>Consistent within interface: all elements should be consistent, such as: design style, icons and texts, position of elements, etc.</div>
                  <img src="../assets/Rack.png" class="image">
                </el-collapse-item>
                <el-collapse-item title="Filtro del rack" name="2">
                  <div>Operation feedback: enable the users to clearly perceive their operations by style updates and interactive effects;</div>
                  <div>Visual feedback: reflect current state by updating or rearranging elements of the page.</div>
                  <img src="../assets/FiltroRack.png" class="image">
                </el-collapse-item>
                <el-collapse-item title="Reservas" name="3">
                  <div>Simplify the process: keep operating process simple and intuitive;</div>
                  <div>Definite and clear: enunciate your intentions clearly so that the users can quickly understand and make decisions;</div>
                  <div>Easy to identify: the interface should be straightforward, which helps the users to identify and frees them from memorizing and recalling.</div>
                  <img src="../assets/Reserva.png" class="image">
                </el-collapse-item>
              </el-collapse>
            </div>
          </el-card>
        </el-row>
      </el-main>
    </el-container>
  </div>
</template>
<script>
// @ is an alias to /src

import DeleteReservation from '@/components/DeleteReservation.vue'

export default {
    name: 'delete',
    components: {
        DeleteReservation,
    },
    data() {
        return {
            activeName: '1',
        }
    },
}
</script>

<style>
.main-row {
    display: flex;
    flex-direction: row;
    align-content: center;
    justify-content: center;
}
.box-card {
    width: 80%;
    height: -webkit-fill-available;
}

.acordeon-container {
    padding-left: 3em;
    padding-right: 3em;
    padding-top: 2em;
}

img {
    max-width: 70%;
    height: auto;
}
</style>
