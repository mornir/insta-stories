<template>
  <section class="user" ref="user">
    <InstaStory
      v-for="(story, index) in user.stories"
      :key="story.img"
      :story="story"
      @click="navigateStories(index, $event)"
    />
  </section>
</template>

<script>
import InstaStory from "./InstaStory.vue"
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
  methods: {
    navigateStories(index, $event) {
      console.log(index)
      const stories = this.$refs.user
      const median = stories.clientWidth / 2

      if ($event.clientX < median) {
        // click left, previous story
        console.log("previous story")
        this.user.stories[index + 1].seen = false
        this.user.stories[index].seen = false
      } else {
        // click right, next story
        console.log("next story")
        this.user.stories[index].seen = true
      }
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
