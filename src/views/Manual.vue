<template>
  <div class="manual">
    <el-container>
      <el-main>
        <el-row class="main-row">
          <el-card class="box-card" id="carta">
            <div slot="header" class="clearfix">
              <span class="title">Manual de usuario del sistema</span>
            </div>
            <div class="acordeon-container">
              <el-collapse v-model="activeName" accordion>
                <el-collapse-item title="Rack" name="1">
                  <div>Esta es la ventana de Rack</div>
                  <img src="../assets/Rack.png" class="image">
                  <div>Esta ventana permite poder ver de manera más rápida y eficiente el total de habitaciones que se encuentran en el hotel, junto con su estado, ya sea ocupada por un rango de tiempo, o desocupada.</div>
                  <div>La ventana permite desplazamiento de manera vertical, para poder revisar todas las habitaciones del hotel; y desplazamiento horizontal, para poder ver la dispoción de las piezas en un tiempo mayor.</div>
                  <div>Como se aprecia en la figura, al encontrarse una habitación reservada en un periodo de tiempo, ésta se puede visualizar de color rojo en la línea de tiempo.</div>
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

.acordeon-container {
    padding-left: 3em;
    padding-right: 3em;
    padding-top: 2em;
}

#carta {
    width: 80%;
    height: -webkit-fill-available;
}
img {
    max-width: 70%;
    height: auto;
}

.title {
    font-weight: bolder;
    width: 300px;
}
</style>
