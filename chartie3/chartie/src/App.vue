
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
  <keep-alive>
    <router-view></router-view>
  </keep-alive>
  <the-footer></the-footer>
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
#top,
#left,
#right {
  position: fixed;
}
#left,
#right {
  top: 0;
  bottom: 0;
  width: 15px;
}
#left {
  left: 0;
}
#right {
  right: 0;
}

#top,
#top {
  top: 0;
}
</style>
