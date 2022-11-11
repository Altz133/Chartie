
<template>
  <!DOCTYPE html>
  <head>
    <meta charset="utf-8" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1 shrink-to-fit=no"
    />
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css"
    />
  </head>
  <div id="left"></div>
  <div id="right"></div>
  <div id="top"></div>
  <div id="bottom"></div>
  <div class="wrapper">
    <TheNavigation></TheNavigation>
  </div>
  <router-view></router-view>
  <the-footer class="footer"></the-footer>
</template>
<script>
import TheNavigation from "./router/TheNavigation.vue";
import TheFooter from "./components/TheFooter.vue";
export default {
  components: {
    TheNavigation,
    TheFooter,
  },
  setup() {},
};
</script>
<style scoped>
.footer {
  background-color: #eceff1;
  bottom: 0;
  width: 100%;
}
</style>
