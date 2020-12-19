<template>
  <div class="stories" @click="flipStory" ref="stories">
    <InstaUser v-for="user in users" :user="user" :key="user.username" />
  </div>
</template>

<script>
import users from "./users"
import InstaUser from "./components/InstaUser.vue"

export default {
  components: {
    InstaUser,
  },
  data() {
    return {
      users,
    }
  },
  methods: {
    flipStory(e) {
      if (e.target.nodeName !== "ARTICLE") return

      const stories = this.$refs.stories

      // offsetLeft is only relevant for desktop and tablets
      const median = stories.offsetLeft + stories.clientWidth / 2
      /*  console.log({ median })
      console.log({ simpleMedian: stories.clientWidth / 2 }) */

      const state = {
        current_story: stories.firstElementChild.lastElementChild,
      }

      console.dir(stories)
    },
    navigateStories(direction) {},
  },
  mounted() {
    document.addEventListener("keydown", ({ key }) => {
      if (key !== "ArrowDown" || key !== "ArrowUp") {
        navigateStories(key === "ArrowDown" ? "next" : "prev")
      }
    })
  },
}
</script>
