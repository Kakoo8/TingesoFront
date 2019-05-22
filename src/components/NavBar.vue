<template>
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
        <el-menu-item index="1">Hotel</el-menu-item>
        <el-menu-item index="3">Reserva</el-menu-item>
        <el-menu-item index="4"><a href="https://www.ele.me" target="_blank">Registro</a></el-menu-item>
    </el-menu>
</template>

<script>
  export default {
      data() {
          return {
              activeIndex: '1',
              activeIndex2: '1'
          };
      },
      methods: {
          handleSelect(key, keyPath) {
              console.log(key, keyPath);
          }
      }
  }
</script>