<template>
  <div class="home">
    <el-container>
      <el-header>
          <NavBar/>
      </el-header>
      <el-row>
        <el-col :span="6" id="left-box">
          <FilterRack/>
        </el-col>
        <el-col :span="18" id="right-box">
          <Rack/>
        </el-col>
      </el-row>
    </el-container>
  </div>
</template>

<script>
// @ is an alias to /src
import NavBar from '@/components/NavBar.vue'
import Rack from '@/components/Rack.vue'
import FilterRack from '@/components/FilterRack.vue'

export default {
  name: 'home',
  components: {
    NavBar,
    Rack,
    FilterRack
  }
}
</script>

<style>

  .el-header {
    color: #333;
    text-align: center;
    line-height: 60px;
  }

  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    height: -webkit-fill-available;
  }

  .el-col {
    border-radius: 4px;
    padding: 2%;
  }
  #left-box{
    padding-right: 1vh;
  }
  #right-box{
    padding-left: 1vh;
  }
</style>