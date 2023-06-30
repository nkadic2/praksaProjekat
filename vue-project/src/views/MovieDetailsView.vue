<script>
import { reactive, onMounted } from 'vue'
import { useRoute } from 'vue-router'
//import * as api from '../services/api.js'
import MovieDetails from '@/components/MovieDetails.vue'
export default {
data() {
return {
  movies: [],
      name: "",
      genre: [],
      rating: "",
      year: "",
      image_url: "",
      desc: "",
      actors: "",
};
},
components: {
    MovieDetails,
  },
    mounted (){
    this.goToDetailsPage();
  },
  methods:{
    goToDetailsPage() {
      this.$router.push("/details");
    }
  }

}
</script>

<template>
    <div>
    <div class="flex-col" v-for="movie in movies">
      <button
      type="submit"
      class="block w-10 h-10 rounded-lg bg-indigo-600 text-sm font-medium text-white">
      View
    </button>
      <h3>Ovo je details page</h3>
      <MovieDetails :movie="movie" />
    </div>
  </div>
<!--   <MovieDetails
    v-if="state.movies"
    :name="state.movies?.name"
    :year="state.movies?.year"
    :rating="state.movies?.rating"
    :genres="state.movies?.genres"
    :image="state.movies?.image_url?.medium"
    :description="state.movies?.desc"
    :actors="state.movies?.actors"
    :directors="state.movies?.directors"
  /> -->
</template>

<style></style>
