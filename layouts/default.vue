<template>
  <div>
    <TheHeader @sidenavToggle="displaySidenav = !displaySidenav" />
    <TheSidenav :show="displaySidenav" @close="displaySidenav = false" />
    <nuxt/>
  </div>
</template>

<script>
import TheHeader from '@/components/Navigation/TheHeader'
import TheSidenav from '@/components/Navigation/TheSidenav'

export default {
  components: {
    TheHeader,
    TheSidenav
  },
  data() {
    return {
      displaySidenav: false
    }
  }
}
</script>

<style>
html {
  font-family: 'Open Sans', sans-serif;
  box-sizing: border-box;
}
*, *:before, *:after {
  box-sizing: border-box;
}
h1, h2, h3, h4, h5, h6 {
  font-family: 'Modern Antiqua', cursive;
}
</style>
