<template>
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
        <el-menu-item index="1">Reservas</el-menu-item>
        <el-menu-item index="3">Registros</el-menu-item>
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