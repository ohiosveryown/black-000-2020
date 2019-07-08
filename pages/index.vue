<template>
  <main>

    <Halo/>
    <nuxt-link to="/test">
      <Header title='info'/>
    </nuxt-link>
    <List/>
    <Footer/>

  </main>
</template>


<style lang="scss" scoped>
  @import '~/assets/style/grid.scss';

  main {
    display: flex;
    align-items: center;
    width: 100vw;
    max-height: 84vh; height: 84vh;

    @include breakpoint(md) {
      max-height: 96vh; height: 96vh;
    }
  }

</style>


<script>
  import anime from 'animejs'
  import Enter from '~/components/Enter'
  import Halo from '~/components/Halo'
  import Header from '~/components/Header'
  import List from '~/components/List'
  import Footer from '~/components/Footer'
  export default {
    components: { Enter, Halo, Header, List, Footer },
    mounted() {
      anime({
        targets: 'main',
        opacity: ['0', '1'],
        duration: 1000,
        delay: 300,
        easing: 'easeInQuad',
      })
    }
  }
</script>