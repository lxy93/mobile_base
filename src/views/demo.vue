<template>
  <div >
      <p class="f28">1234</p>
      <van-button type="primary">主要按钮</van-button>
  </div>
</template>

<script>
import {productList} from '../api/demo'
export default {
  data(){
    return{

    }
  },
  methods:{
    async productList(){
      await productList()
    }
  },
  mounted(){
    this.productList()
  }
}
</script>

<style lang="less" scoped>
.f28{
    font-size: 28px;
}
</style>