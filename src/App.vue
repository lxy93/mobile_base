<template>
  <div id="app">
    <Loading v-show="loading"/>
    <router-view/>
  </div>
</template>
<script>
import Loading from '@/components/loading'
import {mapGetters} from 'vuex'
export default {
  components:{
    Loading
  },
  computed:{
    ...mapGetters(['loading'])
  }
}
</script>
<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
