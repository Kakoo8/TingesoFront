<template>
  <el-menu
    :default-active="activeIndex"
    class="el-menu-demo"
    mode="horizontal"
    @select="handleSelect"
  >
    <el-menu-item index="1">
      <router-link to="/" style="text-decoration:none">Reservas</router-link>
    </el-menu-item>
    <el-menu-item index="2">
      <router-link to="/delete" style="text-decoration:none">Eliminar Reserva</router-link>
    </el-menu-item>
    <el-menu-item index="3">
      <router-link to="/manual" style="text-decoration:none">Manual de uso</router-link>
    </el-menu-item>
  </el-menu>
</template>

<script>
export default {
    data() {
        return {
            activeIndex: '1',
        }
    },
    methods: {
        handleSelect(key, keyPath) {
            console.log(key, keyPath)
        },
    },
}
</script>