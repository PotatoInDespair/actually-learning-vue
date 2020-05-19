<template>
  <div>
    <h1>{{recipes[index].title}}</h1>
    <p>{{recipes[index].description}}</p>
  </div>
</template>

<script>
export default {
  name: "Recipe",
  props: ["recipes", "index"],
}
</script>

<style>
</style>