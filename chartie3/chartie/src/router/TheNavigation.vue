<template>
  <nav id="nav" class="navbar navbar-expand-sm bg-success bg-gradient">
    <div class="container-fluid">
      <ul class="navbar-nav">
        <div class="navbar-brand d-block">
          <img
            alt="Chartie Logo"
            src="@/assets/rysunek.svg"
            width="150"
            height="150"
          />
        </div>
        <li class="nav-item">
          <router-link class="nav-link mt-2" to="/">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link mt-2" to="/news">News</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link mt-2" to="/coins"
            >Crypto Coins</router-link
          >
        </li>
        <li class="nav-item">
          <router-link class="nav-link mt-2" to="/stock"
            >GPW archive</router-link
          >
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {};
</script>

<style scoped>
#nav .active-link {
  color: yellow;
  border-bottom: 2px solid yellow;
}

nav {
  height: 100%;
}
.buttons {
  margin-left: 40px;
}
ul {
  list-style: none;
  margin: 0;
  padding: 0;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

li {
  margin: 0 3rem;
  padding: 20px;
  font-size: 20px;
}

a {
  text-decoration: none;
  font: inherit;
  background: transparent;
  border: 0.5px solid transparent;
  cursor: pointer;
  color: white;
  padding: 0.5rem 1.5rem;
  display: inline-block;
}

a:hover,
a:active,
a.active {
  color: white;
  border-bottom: 2px solid rgb(217, 255, 0);
}
</style>