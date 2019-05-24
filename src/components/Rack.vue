<template>
    <el-card class="box-card">
        <div v-for="o in 4" :key="o" class="text item">
            {{'prueba2' + o }}
        </div>
    </el-card>
</template>

<script>
</script>

<style>
    .el-card {
    min-height: 700px;
  }
</style>
