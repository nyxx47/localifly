<script setup lang="ts">
const route = useRoute();
</script>

<template>
  <div class="wrapper">
    <h1>Nuxt Routing set up successfully!</h1>
    <p>Current route: {{ route.path }}</p>
    <a href="https://nuxt.com/docs/getting-started/routing" target="_blank"
      >Learn more about Nuxt Routing</a
    >
  </div>
</template>

<style lang="scss">
.wrapper {
  h1 {
    color: pink;
  }
}
</style>
