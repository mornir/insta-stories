<template>
  <article class="story" :data-cy="story.img" :class="{ seen: story.seen }">
    <img :src="story.img" :alt="story.title" />
  </article>
</template>

<script>
export default {
  props: {
    story: {
      type: Object,
      require: true,
      default: () => {},
    },
  },
}
</script>

<style>
.story {
  grid-area: story;

  user-select: none;
  touch-action: manipulation;

  transition: opacity 0.3s cubic-bezier(0.4, 0, 1, 1);
}

.story.seen {
  opacity: 0;
  pointer-events: none;
}

.story img {
  display: block;
  height: 100%;
  width: 100%;
  object-position: center;
  object-fit: cover;
}
</style>
