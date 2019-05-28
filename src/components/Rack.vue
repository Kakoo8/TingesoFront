<template>
<el-row>
  <el-col :span="24" id="rack">
    <el-card class="box-card" id="rack-box">
      <el-row>
        <el-col :span="3">
          <div class="rackSideBar">
            <div class="title">
              Habitacion
              <div class="roomCodes" id="roomCodes" v-on:scroll="syncScrollsBySide()">
              <el-row>
                <el-col class="roomCode" v-bind:id="index" v-bind:key="index" v-for="(room, index) in rooms">
                  <p>
                    {{room.id}}
                  </p>
                </el-col>
              </el-row>
              </div>
            </div>
          </div>
        </el-col>
        <el-col :span="21">
          <div class="scrolling-wrapper" v-on:scroll="checkLimits()" id="scrollable">
            <div class="date" v-bind:id="index" v-bind:key="index" v-for="(day, index) in days">
              {{format(day)}}
              <div class="roomStates" :id="format(day)" v-on:scroll="syncScrollsByRack(day)">
                <el-row>
                  <el-col class="roomState" v-bind:id="index" v-bind:key="index" v-for="(room, index) in rooms">
                    <p class="busyText" v-if="isBusy(room, day)">ocupada</p>
                    <p class="freeText" v-else>vacante</p>
                  </el-col>
                </el-row>
              </div>
            </div>
          </div>
        </el-col>
      </el-row>
    </el-card>
  </el-col>
</el-row>
</template>

<script>
import moment from 'moment'
import "moment/locale/es"

  export default {
    props: [
        'rooms',
        'reservations',
        'load'
    ],
    data() {
      return {
          len: 1,
          firstItem: 0,
          lastItem: 9,
          returnScroll: 0,
          days: [moment()],
          myReservations: this.reservations,
          dictionary: {},
          myRooms: this.rooms,
      }
    },
    created() {
        for (let i = 0; i < 4; i++) {
            this.days.push(this.days[this.len-1].clone().add(1,'day'));
            this.len++;
        }
        this.days.push(this.days[0].clone().add(-1, 'day'));
        this.len++;
        for (let i = 0; i < 4; i++) {
            this.days.push(this.days[this.len-1].clone().add(-1,'day'));
            this.len++;
        }
        this.days = this.days.sort((a, b) => a.valueOf() - b.valueOf());
    },
    mounted() {
        document.getElementById('scrollable').scrollLeft =  1100;
        for(let i = 0; i < this.reservations.length; i++) {
          let actualDay = moment(this.reservations[i].start);
          let finalDay = moment(this.reservations[i].end);
          while (actualDay <= finalDay) {
            let roomId = this.reservations[i].roomId;
            let day = actualDay.clone();
            this.dictionary[roomId + "-" + day.format("ddd DD MMMM")] = true;
            actualDay.add(1, 'day');
          }
        }
    },
    methods: {
        checkLimits() {
            let a = document.getElementById('scrollable').scrollLeft;
            let b = document.getElementById('scrollable').offsetWidth;
            let c = document.getElementById(9).offsetWidth * this.len;
            if (a + b - c >= 0) {
                for(let i=0; i < 10; i++) {
                    this.days.push(this.days[this.len-1].clone().add(1,'day'));
                    this.len++;
                    this.lastItem++;
                }
                if (this.len > 30) {
                    this.days = this.days.slice(10);
                    this.firstItem += 10;
                    this.len = 30;
                    let scroll = document.getElementById('scrollable').scrollLeft;
                    document.getElementById('scrollable').scrollLeft = scroll - 2200;
                }
            }
            if (a == 0) {
                for(let i=0; i < 10; i++) {
                    let previous = this.days[0].clone().add(-1,'day')
                    this.len++;
                    this.firstItem--;
                    this.days = [previous].concat(this.days);
                }

                if (this.len > 30) {
                    this.days = this.days.slice(0, 30);
                    this.lastItem -= 10;
                    this.len = 30;
                    let scroll = document.getElementById('scrollable').scrollLeft;
                    document.getElementById('scrollable').scrollLeft = scroll + 2200;
                }
                else {
                    document.getElementById('scrollable').scrollLeft += 2200;
                }
            } 
        },
        format(date){
            return moment(date).format("ddd DD MMMM");
        },
        toDate(date){
          return moment(date);
        },
        isBusy(room, date) {
          let key = room.id + "-" + date.format("ddd DD MMMM");
          return this.dictionary[key];
        },
        button() {
          console.log(document.getElementById('sync2'));
        },
        syncScrollsBySide() {
          var states = document.getElementsByClassName('roomStates');
          var scroll = document.getElementById('roomCodes').scrollTop;

          for (let i = 0; i < states.length; i++) {
            states[i].scrollTop = scroll;
          }
        },
        syncScrollsByRack(day) {
          var states = document.getElementsByClassName('roomStates');
          var scroll = document.getElementById(moment(day).format("ddd DD MMMM")).scrollTop;
          
          document.getElementById('roomCodes').scrollTop = scroll;

          for (let i = 0; i < states.length; i++) {
            states[i].scrollTop = scroll;
          }
        }
    },
    computed: {
      renderComponent: function () {
        if (this.load == true) {
          this.forceRerender();
        }
        return this.load;
      }
    }
  }
  var s1 = document.getElementById('sync1');
  var s2 = document.getElementById('sync2');
</script>

<style scope>
.scrolling-wrapper {
  overflow-x: scroll;
  overflow-y: hidden;
  white-space: nowrap;
}
.scrolling-wrapper::-webkit-scrollbar {
  display: none;
}
.rackSideBar {
  text-align: center;
  margin-left: -4vw;
   white-space: nowrap;
}
.date, .title {
  display: inline-block;
  width: 220px;
}
.roomStates, .roomCodes {
  height: 40vh;
  overflow-y: scroll; 
}
.roomStates::-webkit-scrollbar, .roomCodes::-webkit-scrollbar{
  display: none;
}
.busyText {
  color: #F56C6C;
  background-color: #F56C6C;
}
.freeText {
  color: #EBEEF5;
  background-color: #EBEEF5;
}
.roomState {
  padding-left: 0% !important;
  padding-right: 0% !important;
}
#rack {
    padding-top: 0px;
    padding-bottom: 10px;
}
#rack-box {
    height: 45vh;
}
</style>