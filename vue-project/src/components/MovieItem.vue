<template>
  <div class="border">
  
    <img :src="movie.image_url" alt="Image"
        class="w-60 h-60 object-cover hover:opacity-75 tansition easy-in-out duration-150" /> 
 
    <h3>{{ movie.name }}</h3>
    <div class="flex">
      <span class="ml-2">{{ movie.rating }} | {{ movie.year }} </span><br />
    </div>
    <button
      type="submit"
      @click="goToDetailsPage"
      class="block w-10 h-10 rounded-lg bg-indigo-600 text-sm font-medium text-white">
      View
      <router-view></router-view>
    </button>
  </div>
</template>

<script>
  export default {
    props: ['movie'],
 
   /* mounted (){
    this.goToDetailsPage();
  },
  methods:{
    goToDetailsPage() {
      this.$router.push("/details");
    }
  }*/
}
</script>

<style></style>
