<template>
  <article class="story" :data-cy="story.img" :class="{ seen: story.seen }">
    <figure class="h-full relative">
      <img :src="story.img" :alt="story.title" />
      <figcaption class="absolute bottom-4 left-8 font-bold" v-if="story.title">
        {{ story.title }}
      </figcaption>
    </figure>
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
