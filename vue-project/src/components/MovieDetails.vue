<script>
export default {
  props: ["movie"],
};
</script>

<template>
  <div>
    <div class="flex mt-2">
      <img
        :src="movie.image_url"
        alt="Image"
        class="w-80 h-140 object-cover hover:opacity-75 transition ease-in-out duration-150"
      />
      <div class="ml-4">
        <h3 class="italic hover:not-italic text-2xl font-bold">{{ movie.name }}</h3>
        <div class="flex">
          <span class="text-lg">{{ movie.rating }} | {{ movie.year }}</span>
        </div>
        <div>
          <h3 class="text-lg ">{{ movie.desc }}</h3>
          <h3 class="text-lg">{{ movie.actors }}</h3>
        </div>
      </div>
    </div>
  </div>
</template>

<style></style>
