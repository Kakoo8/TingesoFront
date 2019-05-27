<template>
  <div class="delete">
    <el-container>

      <el-main>
      <el-row>
        <el-col  id="box">
            <DeleteReservation/>
        </el-col>
      </el-row>
      </el-main>
    </el-container>
  </div>
</template>
<script>
// @ is an alias to /src

import DeleteReservation from '@/components/DeleteReservation.vue'

export default {
    name: 'delete',
    components: {
        
        DeleteReservation,
    },
}
</script>