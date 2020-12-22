<template>
  <div class="stories" ref="stories" data-cy="stories">
    <InstaUser v-for="user in users" :user="user" :key="user.username" />
  </div>
</template>

<script>
import users from './users.js'
import InstaUser from './components/InstaUser.vue'

export default {
  components: {
    InstaUser,
  },
  data() {
    return {
      users,
    }
  },
  mounted() {
    const stories = document.querySelector('.stories')
    document.addEventListener('keydown', ({ key }) => {
      if (key === 'ArrowLeft') {
        stories.scrollBy({
          left: -stories.clientWidth,
          behavior: 'smooth',
        })
        return
      }

      if (key === 'ArrowRight') {
        stories.scrollBy({
          left: stories.clientWidth,
          behavior: 'smooth',
        })
        return
      }

      if (key === 'ArrowDown') {
        let storiesLength = this.users[3].stories.length

        for (let i = 1; i < storiesLength; i++) {
          if (!this.users[3].stories[storiesLength - i].seen) {
            this.users[3].stories[storiesLength - i].seen = true
            break
          }
        }
        return
      }

      if (key === 'ArrowUp') {
        let storiesLength = this.users[3].stories.length

        for (let i = 0; i < storiesLength; i++) {
          if (this.users[3].stories[i].seen) {
            this.users[3].stories[i].seen = false
            break
          }
        }
        return
      }

      /*         this.$once('hook:destroyed', () => {
      document.removeEventListener('keydown', closeOnEsc)
    }) */
    })
  },
}
</script>

<style>
.stories {
  height: 100vh;
  width: 100vw;

  box-shadow: 0 5px 2.5px hsl(200 95% 3% / 0.037),
    0 12px 6.5px hsl(200 95% 3% / 0.053), 0 22.5px 13px hsl(200 95% 3% / 0.065),
    0 40.2px 24px hsl(200 95% 3% / 0.077), 0 75.2px 44px hsl(200 95% 3% / 0.093),
    0 180px 80px hsl(200 95% 3% / 0.13);

  /* Start Here! */
  display: grid;
  /* Check devtools to see the values expanded */
  grid: 1fr / auto-flow 100%;
  gap: 1ch;
  /* by default, overflow is visible */
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  overscroll-behavior: contain;
  touch-action: pan-x;
  /* overscroll-behavior-x: contain;*/
}

@media (hover: hover) {
  .stories {
    border-radius: 3ch;
  }
}

/* desktop constraint */
@media (hover: hover) and (min-width: 480px) {
  .stories {
    max-width: 480px;
    max-height: 848px;
  }
}

/* smaller desktop constraint */
@media (hover: hover) and (max-height: 880px) and (min-width: 720px) {
  .stories {
    max-width: 320px;
    max-height: 568px;
  }
}
</style>
