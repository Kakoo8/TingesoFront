<template>
  <el-menu
    :default-active="activeIndex"
    class="el-menu-demo"
    mode="horizontal"
    @select="handleSelect"
  >
    <el-menu-item index="1">
      <router-link to="/">Reservas</router-link>
    </el-menu-item>
    <el-menu-item index="2">
      <router-link to="/delete">Registros</router-link>
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