<template>
  <article
    class="transition-opacity duration-300 ease-in select-none touch-manipulation"
    style="grid-area: story"
    :data-cy="story.img"
    :class="{ 'opacity-0 pointer-events-none': story.seen }"
  >
    <figure class="relative h-full">
      <img
        :src="story.img"
        :alt="story.title"
        class="block object-cover w-full h-full"
      />
      <figcaption class="absolute font-bold top-4 left-8" v-if="story.title">
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
