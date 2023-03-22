
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
  <div class="content-wrap">
    <router-view></router-view>
    <the-footer class="footer"></the-footer>
  </div>
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
.content-wrap {
  position: relative;
  min-height: 100vh;
  padding-bottom: 2.5rem;
}
.footer {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 2.5rem;
}
</style>
