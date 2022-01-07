<template>
  <router-view></router-view>
</template>

<script>
  import Footer from '@/components/Footer.vue'
  //import UnityLayout from '@/modules/unity/layout/UnityLayout.vue'
  //import { defineAsyncComponent } from 'vue' 
//import UnityLayout from './modules/unity/layout/UnityLayout.vue'

  export default {
    name: 'App',
    components: {
      Footer,
      //UnityLayout: defineAsyncComponent(() => import((/* webpackChunkName: "UnityLayout" */ '@/modules/unity/layout/UnityLayout.vue')))
    }
  }
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  *{
      margin: 0;
      padding: 0;
      box-sizing: border-box;
  }

  body{
      background: #fafafa;
      font-family: sans-serif;
  }
</style>
