
<template>
  <head>
    <meta charset="utf-8" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1 shrink-to-fit=no"
    />
  </head>
  <div class="wrapper">
    <TheNavigation></TheNavigation>
  </div>
  <router-view></router-view>
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
