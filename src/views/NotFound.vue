<template>
  <div>
    <h1>404 Page Not Found :(</h1>
    <p>this.site{{$route.params.pathMatch}} is not a valid url</p>
  </div>
</template>

<script>
export default {
  name: "NotFound",
};
</script>