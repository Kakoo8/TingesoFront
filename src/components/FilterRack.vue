<template>
    <el-card class="box-card">
    <el-select  v-model="value" clearable placeholder="Select">
    <el-option>

    </el-option>
    </el-select>
    <el-select v-model="value" clearable placeholder="Select">
    <el-option>

    </el-option>
    </el-select>
        <el-button type="primary" icon="el-icon-search">Buscar</el-button>
        <div v-for="o in 4" :key="o" class="text item">
            {{'List item ' + o }}
        </div>
    </el-card>
</template>

<style>
    .el-card {
    min-height: 700px;
  }
</style>