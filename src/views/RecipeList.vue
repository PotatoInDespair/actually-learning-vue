<template>
  <div>
    <ul>
      <li v-for="(recipe, index) in recipes" :key="recipe.url" @click="activeIndex=index;">
        <router-link :to="recipe.url | recipeUrl">{{recipe.title}}</router-link>
      </li>
    </ul>
    <router-view :recipes="recipes" :index="activeIndex" />
  </div>
</template>

<script>
export default {
  name: "RecipeList",
  data: function() {
    return {
      activeIndex: 0,
      recipes: [
        {
          url: "omurice",
          title: "Omurice",
          description: "Japanese omelette rice :)",
        },
        {
          url: "mapo",
          title: "Mapo Tofu",
          description: "Classic Chinese Sichuan dish. Spicy and tasty :)",
        },
        {
          url: "pizza",
          title: "Pizza",
          description: "Delicious homemade oven-baked 'zza :)",
        },
      ],
    };
  },
  filters: {
    recipeUrl: function(url) {
      return "/recipes/" + url;
    },
  },
};
</script>

<style lang="scss" scoped>
li {
  margin: 10px 0;
}
</style>