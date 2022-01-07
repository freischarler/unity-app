<template>
  <div>
    <Navbar />
    <router-view/>
  </div>
</template>

<script>

  import { defineAsyncComponent } from 'vue'
  //import Navbar from '@/modules/shared/components/Navbar.vue'

export default {
    components: {
      //Navbar
      Navbar: defineAsyncComponent(() => import(/* webpackChunkName: "Navbar" */ '@/modules/shared/components/Navbar.vue'))
    }
  }
</script>

<style>
</style>