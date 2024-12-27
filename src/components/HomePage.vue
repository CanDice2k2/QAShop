<script setup lang="ts">

import HeaderComponent from './HeaderComponent.vue';
import ProductList from './product/ProductList.vue';
defineProps<{
  msg: string
}>()
</script>

<template>
  <HeaderComponent></HeaderComponent>
  <ProductList></ProductList>
</template>

<script lang="ts">

export default {
  components: HeaderComponent,
}

</script>

<style scoped>
</style>
