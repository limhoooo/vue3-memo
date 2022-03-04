<template>
<div class="ground">
    <Header/>
    <Memo/>
    <Footer/>
</div>
</template>

<script>
import {  defineAsyncComponent } from 'vue';
export default {
components : {
    Header : defineAsyncComponent(()=> import('./Header.vue')),
    Footer : defineAsyncComponent(()=> import('./Footer.vue')),
    Memo : defineAsyncComponent(()=> import('./memo.vue')),
}
}
</script>

<style scoped>
</style>
