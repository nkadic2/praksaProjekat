<script>
import { RouterLink, RouterView } from "vue-router";
import MainNav from "@/components/Navigation/MainNav.vue";


export default {
  name: "App",
  name: "LoginView",
  name: "RegistrationView",


  components: {
    MainNav
  },
  methods: {
 
  },
  data: function () {
    return {
      movies: [],
      genres: [],
    };
  },
};
</script>
<template>
  <div id="app">
    <div class="flex justify-between border-b border-gray-200">
      <MainNav />
    </div>
    <router-view />
  </div>

</template>

<style></style>
