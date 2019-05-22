<template>
  <div class="home">
    <el-container>
      <el-header>
          <NavBar/>
      </el-header>
      <el-row>
        <el-col :span="18">
          <Rack/>
        </el-col>
        <el-col :span="6">
          <FilterRack/>
        </el-col>
      </el-row>
    </el-container>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import NavBar from '@/components/NavBar.vue'
import Rack from '@/components/Rack.vue'
import FilterRack from '@/components/FilterRack.vue'

export default {
  name: 'home',
  components: {
    HelloWorld,
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
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
</style>