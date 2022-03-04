<template>
  <div id="app">
    <Ground/>
  </div>
</template>

<script>
import { defineAsyncComponent } from 'vue'

export default {
  components : {
    Ground : defineAsyncComponent(()=> import('@/components/Ground.vue'))
  },
}
</script>

<style>
</style>
