
<template>
  <head>
    <meta charset="utf-8" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1 shrink-to-fit=no"
    />
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi"
      crossorigin="anonymous"
    />

    <div class="wrapper">
      <div class="logo">
        <img
          alt="Vue logo"
          src="@/assets/icons/rysunek.svg"
          width="150"
          height="150"
        />
      </div>
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/news">News</RouterLink>
      </nav>
    </div>
    <RouterView />
  </head>
</template>

<script>
export default {
  setup() {},
};
</script>
<style scoped>
.selector-for-some-widget {
  box-sizing: content-box;
}
/* .logo {
  float: left;
  padding: 1rem 1rem;
}

nav {
  font-size: 24px;
  padding-top: 20px;
}

nav a.router-link-exact-active {
  color: red;
}

nav a {
  display: inline-block;
  padding: 1rem 1rem;
  border-left: 1px solid var(--color-border);
  text-decoration: none;
}

.wrapper {
  background-color: rgb(53, 160, 80);
  float: left;
  width: 100%;
} */
</style>
