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

    <section class="purchase">
      <h2 class="f-titling uc">Purchase the Book</h2>
      <p class="mb-5 f-akkurat taj">Coffee Table Book &amp; Prints are available at: <a target="_blank" href="http://www.royehandy.com/shop">www.royehandy.com/shop</a></p>
      <figure>
        <img src="../assets/img/info/04@2x.png" alt="">
      </figure>
    </section>

    <section class="credits">
      <h2 class="f-titling uc">Credits</h2>
      <h3 class="mb-1 f-akkurat taj">A project by <a target="_blank" href="http://www.royehandy.com/">Roy Handy</a></h3>
      <h3 class="mb-5 f-akkurat taj">A site by <a target="_blank" href="https://www.ohiosveryown/">Matthew Pence</a></h3>
    </section>

  </main>
</template>


<style lang="scss" scoped>
  @import '~/assets/style/grid.scss';

  h2 { margin-bottom: 2.4rem; font-size: 1.6rem; }
  h3, p { font-size: 1.5rem; }
  p + p { text-indent: 4ch; }
  a { text-decoration: underline; }

  .about {
    position: relative;
    margin-bottom: 7.2rem;
    padding: 8rem 0 16rem;
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

  .purchase, .credits {
    margin-bottom: 7.2rem;
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
