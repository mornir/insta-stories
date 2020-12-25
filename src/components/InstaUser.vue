<template>
  <section
    class="relative grid snap-start always-stop"
    style="grid: [story] 1fr / [story] 1fr"
  >
    <h2 class="absolute z-10 font-bold select-none right-8 top-4">
      {{ '@' + user.username }}
    </h2>
    <InstaStory v-for="story in user.stories" :key="story.img" :story="story" />
  </section>
</template>

<script>
import InstaStory from './InstaStory.vue'
export default {
  components: {
    InstaStory,
  },
  props: {
    user: {
      type: Object,
      require: true,
    },
  },
}
</script>
