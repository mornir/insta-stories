<template>
  <article
    v-for="story in stories"
    :key="story.img"
    class="story"
    :style="`--bg: url(${story.img})`"
  ></article>
</template>

<script>
export default {
  props: {
    stories: {
      type: Array,
      require: false,
      default: () => [],
    },
  },
  components: {
    bgImage() {
      return {
        "background-image": `url`,
      }
    },
  },
}
</script>

<style>
.story {
  grid-area: story;

  background-size: cover;
  background-image: var(--bg);

  user-select: none;
  touch-action: manipulation;

  transition: opacity 0.3s cubic-bezier(0.4, 0, 1, 1);
}

.story.seen {
  opacity: 0;
  pointer-events: none;
}
</style>
