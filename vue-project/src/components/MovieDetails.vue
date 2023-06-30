<script >
  export default {
    props: ['movie'],
 

}
/*import { onMounted, ref } from "vue";
import { useRoute, onBeforeRouteUpdate } from "vue-router";

const route = useRoute();

const props = defineProps({
  id,
});

const movie = ref([]);

//const id = ref(parseInt(route.params.id));

async function fetchMovie(id) {
  const URL = `http://localhost:3000/movie?id=${id}`;

  await fetch(URL)
    .then((res) => res.json())
    .then((data) => {
      movie.value = data;
    });
}

onBeforeRouteUpdate((to, from) => {
  id.value = parseInt(to.params.id);
  fetchMovie(id);

  window.scrollTo(0, 0);
});

onMounted(fetchMovie(id));*/
</script>

<template>
  <div class="border">
  
    <img :src="movie.image_url" alt="Image"
        class="w-60 h-60 object-cover hover:opacity-75 tansition easy-in-out duration-150" /> 
 
    <h3>{{ movie.name }}</h3>
    <div class="flex">
      <span class="ml-2">{{ movie.rating }} | {{ movie.year }} </span><br />
    </div>
    <div>
      <h3>
        {{ movie.desc }}
      </h3>
      <h3>
        {{ movie.actors }}
      </h3>
    </div>
  </div>
</template>

<style></style>