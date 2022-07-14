

<template>
  <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />
      <TheNavigation />
  </header>
  <div id="wrapper">
  <router-view></router-view>
  </div>
</template>
<script setup>
import TheNavigation from "@/components/TheNavigation.vue";


</script>
