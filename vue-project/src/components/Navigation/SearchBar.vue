<template>
  <div class="mt-5 flex relative">
    <input
      ref="searchBox"
      type="text"
      class="rounded-full bg-gray-600 px-7 w-80 h-10 mr-3 focus:outline-none focus:outline-shawod mb-2"
      placeholder="Search..."
      v-model="searchTerm" 
      @submit.prevent="search()"
    />
    <button @click="search()" type="submit"
          class="block w-40 h-10 rounded-lg bg-indigo-600 text-sm font-medium text-white">
          Search
        </button>


    <div class="absolute mt-12 rounded bg-gray-600 w-60 z-50">
      <div>
      <div  v-for="movie in movie" :key="movie.id">
        <router-link :to="'/movie/' + movie.id">
          <div>
            <div>{{ movie.genre }}</div>
          </div>
          <div>
            <p >{{ movie.year }}</p>
            <h3>{{ movie.name }}</h3>
          </div>
        </router-link>
      </div>
    </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  props: ['movie'],
  data() {
    return {
      searchTerm: ''
   };
  },
  /*mounted (){
    this.search()

  },*/
  watch: {
    searchTerm: function(val, oldVal) {
      fetch(`http://localhost:3000/movie?name_like=${val}`) 
        .then(response => response.json())
        .then(data => {
          const searchResults = data;
          this.$emit('search', searchResults)
          console.log(this.searchResults)
        })
        .catch(error => {
          console.error(error);
        });
    }
  },
  methods: {
    /*SearchMovies() {
      if (search.value != "") {
        fetch(`http://localhost:3000/movie?name=${this.search.value}`)
          .then((response) => response.json())
          .then((data) => {
            movies.value = data.search;
            search.value = "";
          });
      }
    },*/
    /*search() {
      axios
        .get(`http://localhost:3000/movie?name=${this.name}`)
        .then((response) => {
          this.searchResult = response.data.results;
          this.showSearchResult = response.data.results ? true : false;
         // console.log(response.data);
        })
        .catch((error) => {
          this.errorMessage = "Error";
        });
    },
  },*/
  search() {
    console.log("click")
      fetch(`http://localhost:3000/movie?name_like=${this.searchTerm}`) 
        .then(response => response.json())
        .then(data => {
          
          this.searchResults = data.filter(movie =>
            movie.name.toLowerCase().includes(this.searchTerm.toLowerCase())
          );
          console.log(this.searchResults)
        })
        .catch(error => {
          console.error(error);
        });
    }
}
}
</script>

<style></style>
