<template>
  <div>
    <h1>Contact</h1>
    <p>3, 2, 1</p>
    <h2>fak u {{person}}</h2>
    <p>im da {{noun}} u rode on</p>
  </div>
</template>

<script>
export default {
  props: {
    person: String,
    noun: String,
  },
};
</script>

<style>
</style>