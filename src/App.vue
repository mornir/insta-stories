<template>
  <div class="stories" data-cy="stories">
    <InstaUser
      v-for="user in users"
      :user="user"
      :key="user.username"
      @click="navigateStories"
    />
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
      userIndex: 0,
      storyIndex: 0,
    }
  },
  computed: {
    stories() {
      return this.users[this.userIndex].stories
    },
  },
  methods: {
    scroll(direction = 'right') {
      if (this.userIndex >= this.users.length - 1) return

      this.storyIndex = 0
      const stories = document.querySelector('.stories')

      if (direction === 'right') {
        this.userIndex++
        stories.scrollBy({
          left: stories.clientWidth,
          behavior: 'smooth',
        })
      } else {
        this.userIndex--
        stories.scrollBy({
          left: -stories.clientWidth,
          behavior: 'smooth',
        })
      }
    },
    swipeStory(direction = 'down') {
      let storiesLength = this.stories.length
      if (direction === 'down') {
        console.info('next story')
        this.storyIndex++
        for (let i = 1; i < storiesLength; i++) {
          if (!this.stories[storiesLength - i].seen) {
            this.stories[storiesLength - i].seen = true
            break
          }
        }
        return
      } else {
        console.info('previous story')
        this.storyIndex--
        for (let i = 0; i < storiesLength; i++) {
          if (this.stories[i].seen) {
            this.stories[i].seen = false
            break
          }
        }
      }
    },
    navigateStories(e) {
      const stories = document.querySelector('.stories')
      const median = stories.clientWidth / 2

      // on bigger viewport, remove white margin
      if (e.clientX - stories.offsetLeft > median) {
        this.storyIndex < this.stories.length - 1
          ? this.swipeStory('down')
          : this.scroll('right')
      } else {
        this.storyIndex > 0 ? this.swipeStory('up') : this.scroll('left')
      }
    },
  },
  mounted() {
    document.addEventListener('keydown', ({ key }) => {
      if (key === 'ArrowLeft') {
        this.scroll('left')
        return
      }

      if (key === 'ArrowRight') {
        this.scroll('right')
        return
      }

      if (key === 'ArrowDown') {
        this.swipeStory('down')
        return
      }

      if (key === 'ArrowUp') {
        this.swipeStory('up')
        return
      }
    })
  },
}
</script>

<style>
.stories {
  height: 100vh;
  width: 100vw;
  position: relative;
  box-shadow: 0 5px 2.5px hsl(200 95% 3% / 0.037),
    0 12px 6.5px hsl(200 95% 3% / 0.053), 0 22.5px 13px hsl(200 95% 3% / 0.065),
    0 40.2px 24px hsl(200 95% 3% / 0.077), 0 75.2px 44px hsl(200 95% 3% / 0.093),
    0 180px 80px hsl(200 95% 3% / 0.13);

  display: grid;
  /* Check devtools to see the values expanded */
  grid: 1fr / auto-flow 100%;
  gap: 1ch;
  /* by default, overflow is visible */
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  overscroll-behavior: contain;
  touch-action: pan-x;
  overscroll-behavior-x: contain;
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
