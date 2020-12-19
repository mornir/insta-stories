<template>
  <article
    class="story"
    :data-cy="story.img"
    :style="`--bg: url(${story.img})`"
    :class="{ seen: story.seen }"
  ></article>
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

/* .story img {
  display: block;
  height: 100%;
  width: 100%;
  object-position: center;
  object-fit: cover;
} */
</style>
