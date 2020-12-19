<template>
  <div class="stories" ref="stories" data-cy="stories">
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
      const stories = this.$refs.stories

      // offsetLeft is only relevant for desktop and tablets
      const median = stories.offsetLeft + stories.clientWidth / 2

      const state = {
        current_story: stories.firstElementChild.lastElementChild,
      }
    },
    //navigateStories(direction) {},
  },
  mounted() {
    document.addEventListener("keydown", ({ key }) => {
      if (key !== "ArrowDown" || key !== "ArrowUp") {
        //  this.navigateStories(key === "ArrowDown" ? "next" : "prev")
      }
    })
  },
}
</script>
