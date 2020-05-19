<template>
  <nav>
    <ul>
      <li>
        <router-link to="/" exact>Home</router-link>
      </li>
      <li>
        <router-link to="/about">About</router-link>
      </li>
      <li>
        <router-link to="/contact">Contact</router-link>
      </li>
      <li>
        <router-link to="/recipes">Recipes</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "NavBar",
};
</script>

<style lang="scss" scoped>
@import "../variables.scss";

nav {
  background-color: $foreground;
  display: flex;
  justify-content: center;

  ul {
    display: flex;
    margin: 0;
    padding: 0;
    list-style: none;

    li a {
      position: relative;
      text-align: center;
      display: inline-block;
      padding: 20px 30px;

      &::after {
        content: "";
        display: flex;
        position: absolute;
        bottom: 0;
        left: 0;
        height: 3px;
        width: 100%;
        background-color: $vue-green;
        transform: scale(0, 1);
        transition: 0.15s ease;
      }
    }
  }
}

.router-link-active {
  &::after {
    transform: scale(1, 1);
  }
}
</style>