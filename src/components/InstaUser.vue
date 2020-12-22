<template>
  <section class="relative user">
    <h2 class="absolute z-10 font-bold right-8 top-4">
      {{ '@' + user.username }}
    </h2>
    <InstaStory
      v-for="(story, index) in user.stories"
      :key="story.img"
      :story="story"
      @click="navigateStories(index, $event)"
    />
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
  methods: {
    navigateStories(index, $event) {
      const stories = document.querySelector('.stories')
      const median = stories.clientWidth / 2

      // on bigger viewport, remove white margin
      if ($event.clientX - stories.offsetLeft < median) {
        // click left, previous story
        console.info('previous story')

        if (index >= this.user.stories.length - 1) {
          console.info('previous user')
          this.$emit('scrolled', 'left')
          return
        }

        this.user.stories[index + 1].seen = false
        this.user.stories[index].seen = false
      } else {
        if (index <= 0) {
          console.info('next user')
          this.$emit('scrolled', 'right')
          return
        }
        // click right, next story
        console.info('next story')
        this.user.stories[index].seen = true
      }
    },
  },
}
</script>

<style>
.user {
  display: grid;
  position: relative;
  grid: [story] 1fr / [story] 1fr;

  scroll-snap-align: start;
  scroll-snap-stop: always;
}
</style>
