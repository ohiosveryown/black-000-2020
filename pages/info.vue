<template>
  <main>

    <!-- header -->
    <nuxt-link to="/">
      <Header title='back'/>
    </nuxt-link>

    <h1>This is info page</h1>

  </main>
</template>


<style lang="scss" scoped>

</style>


<script>
  import anime from 'animejs'
  import { colors } from '~/assets/logic.js'
  import Header from '~/components/Header'

  export default {
    components: { Header },
    transition: {
      name: 'page',
      mode: 'in-out'
    },
  }
</script>
