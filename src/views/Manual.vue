<template>
  <div class="manual">
    <el-container>
      <el-main>
        <el-row class="main-row" id="main">
          <el-card class="box-card" id="carta">
            <div slot="header" class="clearfix">
              <span class="title">Manual de usuario del sistema</span>
            </div>
            <div class="acordeon-container">
              <el-collapse v-model="activeName" accordion>
                <el-collapse-item title="Rack" name="1">
                  <div>Ésta es la ventana de Rack</div>
                  <img src="../assets/Rack.png" class="image">

                  <div>Esta ventana permite poder ver de manera más rápida y eficiente el total de habitaciones que se encuentran en el hotel y su estado en el tiempo, el que puede ser ocupado o desocupado.</div>
                  <div>La ventana permite desplazamiento de manera vertical, para poder revisar todas las habitaciones del hotel; y desplazamiento horizontal, para poder ver la disposición de las piezas en el futuro.</div>
                  <div>Como se aprecia en la figura, al encontrarse una habitación reservada , ésta se puede visualizar de color rojo en la línea de tiempo durante el periodo que dura la reserva.</div>
                </el-collapse-item>
                <el-collapse-item title="Filtro del rack" name="2">
                  <div>Ésta es la ventana de Rack</div>
                  <img src="../assets/FiltroRack.png" class="image">
                  <div>Esta ventana permite realizar un filtrado dentro de las habitaciones, según el tipo de la habitación, su capacidad y su precio.</div>
                  <div>Una vez realizado el filtrado anterior, en la parte inferior del filtro se pueden ver las sugerencias de habitaciones que cumplen con las caracteristicas.</div>
                </el-collapse-item>
                <el-collapse-item title="Reservas" name="3">
                  <div>Ésta es la ventana para la realización de una reserva</div>
                  <img src="../assets/Reserva.png" class="image">
                  <div>En esta ventana se ingresan los datos del cliente el cual desee realizar la reserva, tales como su nombre, su número de documento y las habitaciones las cuales reservará en conjunto con su duración de estadía</div>
                  <div>Para poder agregar más habitaciones a una misma reserva, se debe apretar el botón verde "+", el cual incluirá al desplazarse hacia abajo, otro formulario para especificar una nueva reserva de habitación en algún horarios diferente.</div>
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
            activeName: '0',
        }
    },
}
</script>

<style>
#main {
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
</style>
