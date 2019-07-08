<template>
  <main class="width">

    <!-- header -->
    <nuxt-link to="/">
      <Header title='back'/>
    </nuxt-link>

    <section class="about">
      <h2 class="f-titling uc">About</h2>
      <p class="f-akkurat taj">“#000”, or BLACK, is a collection of photos curated to express the cultural appreciation of the women owning their true self through their hair. Each woman presented in this series opened up about their hair journey exuding love and passion through each loop and coiled-strand as they worked toward a healthy relationship and understanding of their hair.</p>
      <p class="f-akkurat taj">Throughout the project, 'versatility' is presented from many of the women and reflects my vision as to bring inspiration to those who are figuring out their path.</p>
    </section>

  </main>
</template>


<style lang="scss" scoped>
  @import '~/assets/style/grid.scss';

  h2 { margin-bottom: 2.4rem; font-size: 1.6rem; }
  p { font-size: 1.5rem; }
  p + p { text-indent: 4ch; }

  .about {
    position: relative;
    padding: 8rem 0 20rem
  }

  .about:after {
    display: block;
    position: absolute;
    z-index: var(--z0);
    bottom: 0; left: -4rem;
    width: 24rem; height: 32rem;
    content: '';
    background: url('../assets/img/info/03@2x.png') no-repeat center center;
    background-size: cover;
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
