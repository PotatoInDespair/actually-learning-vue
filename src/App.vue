<template>
  <div id="app">
    <img id="logo" alt="Vue logo" src="@/assets/logo.png">
    <NavBar />
    <main>
      <router-view />
    </main>
  </div>
</template>

<script>
import NavBar from "@/components/Nav.vue";

export default {
  components: { NavBar },
};
</script>

<style lang="scss">
@import "variables.scss";

* {
  box-sizing: border-box;
}

body {
  font-family: Raleway, "Gill Sans", Arial, Helvetica, sans-serif;
  background-color: $background;
  color: white;
  margin: 0;
}

a {
  text-decoration: none;
  color: white;
}

#logo {
  display: block;
  margin: 0 auto;
}

main {
  margin: 0 auto;
  max-width: 1000px;
}
</style>
