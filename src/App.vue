<template>
  <InstaUser v-for="user in users" :user="user" :key="user.username" />
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
}
</script>
