<template>
  <div class="home">
    <HelloWorld msg="Proppity prop" />
    <span>Click <a href="/fak"><strong>here</strong></a> to go to a page that doesn't exist</span>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    HelloWorld,
  },
};
</script>
