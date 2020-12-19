<template>
  <section class="user">
    <InstaStories :stories="user.stories">
  </section>
</template>

<script>
import InstaStories from "./InstaStories.vue"
export default {
  components: {
    InstaStories,
  },
  props: {
    user: {
      type: Object,
      require: true,
    },
  },
}
</script>

<style>
.user {
  display: grid;
  grid: [story] 1fr / [story] 1fr;

  scroll-snap-align: start;
  scroll-snap-stop: always;
}
</style>
