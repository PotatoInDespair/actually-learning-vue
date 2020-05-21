import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Contact from "../views/Contact.vue";
import RecipeList from "../views/RecipeList.vue";
import Recipe from "../views/Recipe.vue";
import NotFound from "../views/NotFound.vue";

Vue.use(VueRouter);

const routes = [{
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import( /* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact,
    props: {
      person: "spidahman",
      noun: "boat",
    },
  },
  {
    path: "/recipes",
    name: "Recipes",
    component: RecipeList,
    children: [{
      path: ":name",
      name: "Recipe",
      component: Recipe,
    }],
  },
  {
    path: "*",
    name: "404 Page Not Found",
    component: NotFound,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;