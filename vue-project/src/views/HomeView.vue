<template>
   <div>
        <SearchBar @search="refreshMovies" />
      </div>
  <div class="grid grid-cols-4 gap-4">
    <div class="flex-col" v-for="movie in movies">
      <MovieItem :movie="movie" />
    </div>
  </div>
</template>

<script>
import axios from "axios";
import MovieItem from "@/components/MovieItem.vue";
import SearchBar from "@/components/Navigation/SearchBar.vue";


export default {
  name: "HomeView",
  components: {
    MovieItem,
    SearchBar
  },
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
      errorMessage: "",
    };
  },
  computed: {
    image() {
      return this.movie.image_URL;
    },
  },
   mounted (){
    this.created()
    this.getAllMovies()
    //this.goToDetailsPage();
  },
  methods: {
    refreshMovies(movies){
      this.movies = movies;
    },
    created() {
      axios
        .get(
          `http://localhost:3000/movie?_sort=year&_order=desc&_page=1&_limit=20`
        )
        .then((response) => {
          this.movies = response.data;
          //console.log(response.data);
        })
        .catch((error) => {
          this.errorMessage = "Error.";
        });
    },
    getAllMovies() {
      axios
        .get(`http://localhost:3000/movie`)
        .then((response) => {
          this.movies = response.data;
          console.log(response.data);
        })
        .catch((error) => {
          this.errorMessage = "Error.";
        });
    },
    /*goToDetailsPage() {
      this.$router.push("/details");
    },*/
  },
};
</script>

<style></style>
