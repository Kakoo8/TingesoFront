<template>
  <el-row>
    <el-col :span="24">
      <el-card class="box-card">
        <el-row>
          <el-form ref="form" :model="form" label-width="120px">
            <el-col :span="12">
              <el-row>
                <el-form-item label="Nombre">
                  <el-input v-model="form.name"></el-input>
                </el-form-item>
                <el-form-item label="C.I.">
                  <el-input v-model="form.ci"></el-input>
                </el-form-item>
              </el-row>
            </el-col>
            <el-col :span="12">
              <el-form-item label="Default">
                <el-date-picker
                  v-model="value1"
                  type="daterange"
                  range-separator="To"
                  start-placeholder="Start date"
                  end-placeholder="End date"
                ></el-date-picker>
              </el-form-item>
              <el-form-item label="habitaciones">
                <el-select v-model="value" placeholder="Select" id="selector-bedrooms">
                  <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  ></el-option>
                </el-select>
              </el-form-item>
              <el-row>
                <el-col :span="12" id="total">Total</el-col>
                <el-col :span="12" id="sendButton">
                  <el-button type="primary">Primary</el-button>
                </el-col>
              </el-row>
            </el-col>
          </el-form>
        </el-row>
      </el-card>
    </el-col>
  </el-row>
</template>

<script>
export default {
    data() {
        return {
            form: {
                name: '',
                ci: '',
                date1: '',
                date2: '',
                delivery: false,
                type: [],
                resource: '',
                desc: '',
            },
            value1: '',
            options: [
                {
                    value: 'Option1',
                    label: 'Option1',
                },
                {
                    value: 'Option2',
                    label: 'Option2',
                },
                {
                    value: 'Option3',
                    label: 'Option3',
                },
                {
                    value: 'Option4',
                    label: 'Option4',
                },
                {
                    value: 'Option5',
                    label: 'Option5',
                },
            ],
            value: '',
        }
    },
    methods: {
        onSubmit() {
            console.log('submit!')
        },
    },
}
</script>

<style>
.box-card {
    height: 25vh;
}
#selector-bedrooms {
    width: 350px;
}

#total {
    padding-left: 15%;
}

#sendButton {
    padding-left: 25%;
    padding-top: 0%;
}
</style>