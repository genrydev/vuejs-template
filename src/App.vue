<template>
  <Nav></Nav>
  <RouterView />
</template>

<script setup>
import { RouterView } from 'vue-router'
import Nav from '@/components/layout/NavBar.vue'
</script>
