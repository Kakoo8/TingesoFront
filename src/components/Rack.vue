<template>
<el-row>
  <el-col :span="24" id="rack">
    <el-card class="box-card" id="rack-box">
      <el-row>
        <el-col :span="3">
          <div class="rackSideBar" v-on:scroll="syncScrolls()">
            <div class="title">
              Habitacion
              <el-row class="roomCodes">
                <el-col class="roomCode" v-bind:id="index" v-bind:key="index" v-for="(room, index) in rooms">
                  <p>
                    {{room.id}}
                  </p>
                </el-col>
              </el-row>
            </div>
          </div>
        </el-col>
        <el-col :span="21">
          <div class="scrolling-wrapper" v-on:scroll="checkLimits()" id="scrollable">
            <div class="date" v-bind:id="index" v-bind:key="index" v-for="(day, index) in days">
              {{format(day)}}
              <el-row class="roomStates">
                <el-col class="roomState" v-bind:id="index" v-bind:key="index" v-for="(room, index) in rooms">
                  <p class="busyText" v-if="isBusy(room, day)">ocupada</p>
                  <p v-else>vacante</p>
                </el-col>
              </el-row>
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
    ],
    data() {
      return {
          len: 1,
          firstItem: 0,
          lastItem: 9,
          returnScroll: 0,
          days: [moment()],
          myReservations: this.reservations,
          dictionary: {}
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
          console.log("limits");
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
        syncScrolls() {
          console.log("sync");
          var codes = document.getElementsByClassName('');
          // var states = document.getElementById('roomStates');
          // codes.scrollTop = states.scrollTop;
        }
    }
  }
  var s1 = document.getElementById('sync1');
  var s2 = document.getElementById('sync2');
</script>

<style>
.scrolling-wrapper {
  overflow-x: scroll;
  overflow-y: hidden;
  white-space: nowrap;
}
.scrolling-wrapper::-webkit-scrollbar {
  display: none;
}
.rackSideBar {
  margin-left: -4vw;
   white-space: nowrap;
}
.date, .title {
  display: inline-block;
  width: 220px;
}
.roomStates, .roomCodes {
  height: 50vh;
  overflow-y: scroll; 
}
.roomStates::-webkit-scrollbar, .roomCodes::-webkit-scrollbar{
  display: none;
}
.busyText {
  color: #F56C6C;
}
#rack {
    padding-top: 0px;
    padding-bottom: 10px;
}
#rack-box {
    height: 56vh;
}
</style>