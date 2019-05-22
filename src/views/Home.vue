<template>
  <div class="home">
    <el-container>
      <el-header>
          <NavBar/>
      </el-header>
      <el-main>Principal</el-main>
    </el-container>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import NavBar from '@/components/NavBar.vue'

export default {
  name: 'home',
  components: {
    HelloWorld,
    NavBar
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

</style>