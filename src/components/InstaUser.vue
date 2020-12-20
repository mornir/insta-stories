<template>
  <section class="user">
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
      const stories = document.querySelector(".stories")

      const median = stories.clientWidth / 2

      if ($event.clientX < median) {
        // click left, previous story
        console.info("previous story")

        if (index >= this.user.stories.length - 1) {
          console.info("previous user")
          stories.scrollBy({
            left: -50,
            behavior: "smooth",
          })
          return
        }

        this.user.stories[index + 1].seen = false
        this.user.stories[index].seen = false
      } else {
        if (index <= 0) {
          console.info("next user")
          stories.scrollBy({
            left: 50,
            behavior: "smooth",
          })
          return
        }
        // click right, next story
        console.info("next story")
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
