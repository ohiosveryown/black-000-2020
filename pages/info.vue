<template>
  <main class="debug width">

    <!-- header -->
    <nuxt-link to="/">
      <Header title='back'/>
    </nuxt-link>

    <header class="debug intro">
      <div class="title f-titling uc">
        <h1>black</h1>
        <h1 class="tar">#000</h1>
      </div>
      <figure class="intro-image-01">
        <img src="../assets/img/info/01@2x.png" alt="">
      </figure>
    </header>

  </main>
</template>


<style lang="scss" scoped>
  @import '~/assets/style/grid.scss';

  .intro {
    position: relative;
    margin-top: 16rem;
    min-height: 112rem;
  }

  .title {
    position: relative;
    color: transparent;
    text-stroke: 1px var(--cloud);
    -webkit-text-stroke: 1px var(--cloud);

    @include breakpoint(mdl) {
      width: grid-width(10);
      /* font-size: 4.8vw; */
      font-size: 5.6rem;
    }
  }

  .intro-image-01 {
    position: absolute;
    top: 9.6rem;

    @include breakpoint(mdl) {
      margin-left: grid-width(1);
      width: grid-width(3);
    }
  }
</style>


<script>
  import anime from 'animejs'
  import { colors } from '~/assets/logic.js'
  import Header from '~/components/Header'

  export default {
    components: { Header, },
    transition: {
      name: 'page',
      mode: 'in-out'
    },
  }
</script>
