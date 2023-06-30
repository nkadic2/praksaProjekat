<script>
import { reactive, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import MovieDetails from '@/components/MovieDetails.vue'
export default {
data() {
return {
  movie: [],
      name: "",
      genre: [],
      rating: "",
      year: "",
      image_url: "",
      desc: "",
      actors: "",
};
},
computed: {
    image() {
      return this.movie.image_URL;
    },
  },
components: {
    MovieDetails,
  },
    mounted (){
    this.getMovies();
  },
  methods:{
    getMovies() {
      const route = useRoute();
      const id= route.params.id;
      fetch("http://localhost:3000/movie?id=" +id)
      .then((response)=>response.json())
      .then((movies)=>{
        this.movie=movies[0];
        console.log(this.movie);
      });
    }
  }

}
</script>

<template>
    <div>
    <div>
      <MovieDetails :movie="movie"/>

</div>
  </div>
</template>

<style></style>
