<template>
  <main class="width">

    <!-- header -->
    <nuxt-link to="/">
      <Header title='back'/>
    </nuxt-link>

    <h3 class="black f-titling">#000000</h3>

    <section class="intro">
      <header class="f-titling uc">
        <h1>black</h1>
        <h1>#000</h1>
      </header>
    </section>

    <section class="about">
      <aside>
        <ul class="f-akkurat">
          <h2 class="f-titling uc">Models</h2>
          <li>Maura Chanz</li>
          <li>Kaira Fern</li>
          <li>Alannah Felix</li>
          <li>Melanie Fisher</li>
          <li>Tanya Hargrove</li>
          <li>Daphne Jacobs</li>
          <li>Ryann McClure</li>
          <li>Tisha Ollison</li>
          <li>Amy Oum</li>
        </ul>
      </aside>

      <article>
        <h2 class="f-titling uc">About</h2>
        <p class="f-akkurat taj">“#000”, or BLACK, is a collection of photos curated to express the cultural appreciation of the women owning their true self through their hair. Each woman presented in this series opened up about their hair journey exuding love and passion through each loop and coiled-strand as they worked toward a healthy relationship and understanding of their hair.</p>
        <p class="f-akkurat taj">Throughout the project, 'versatility' is presented from many of the women and reflects my vision as to bring inspiration to those who are figuring out their path.</p>
      </article>
    </section>

    <section class="purchase">
      <article>
        <h2 class="f-titling uc">Purchase the Book</h2>
        <p class="mb-5 f-akkurat taj">The Coffee Table Book &amp; Prints are available at: <a target="_blank" href="http://www.royehandy.com/shop">www.royehandy.com/shop</a></p>
      </article>

      <figure>
        <img src="../assets/img/info/04@2x.png" alt="">
      </figure>
    </section>

    <section class="credits">
      <h2 class="f-titling uc">Credits</h2>
      <h3 class="mb-1 f-akkurat taj">A project by <a target="_blank" href="http://www.royehandy.com/">Roy Handy</a></h3>
      <h3 class="mb-5 f-akkurat taj">A site by <a target="_blank" href="http://www.ohiosveryown.co">Matthew Pence</a></h3>
    </section>

    <!-- transtion covers -->
    <div class="cover"/>

  </main>
</template>


<style lang="scss" scoped>
  @import '~/assets/style/grid.scss';

  // page animation
  .page-enter-active { transition: all 700ms ease; }
  .page-leave-active { transition: all 400ms ease; }
  .page-leave-active {
    opacity: 0;
  }

  .cover {
    position: fixed;
    z-index: var(--z1);
    top: 0; left: 0;
    width: 100vw; height: 100vh;
    will-change: transfrom;
    background: var(--darkest);
    transform-origin: top;
  }


  h2 { margin-bottom: 2.4rem; font-size: 1.6rem; }
  h3, p { font-size: 1.5rem; }
  p + p { text-indent: 4ch; }
  a { text-decoration: underline; }
  ul { display: flex; flex-direction: column; }
  li { margin-bottom: .8rem; font-size: 1.5rem; }

  .black {
    display: none;
    position: fixed;
    top: 44%;
    right: 0;
    transform: rotate(90deg);
    @include breakpoint(md) { display: inherit; }
  }

  .intro {
    position: relative;
    padding: 10rem 0 24rem;
    color: transparent;
    text-stroke: 1px var(--cloud);
    -webkit-text-stroke: 1px var(--cloud);
    font-size: 4.8rem;
    line-height: 1.3;

    @include breakpoint(mdl) { padding: 14rem 0 20rem; font-size: 6.4rem; }
    @include breakpoint(lg)  { font-size: 8rem; }

    h1:first-of-type {
      margin-left: -4.4rem;
      @include breakpoint(md) { margin-left: 0rem; }
    }

    h1:last-of-type {
      position: absolute;
      right: -6.4rem;

      @include breakpoint(md) { right: 24%; }
    }

    h1:first-of-type:after {
      display: block;
      position: absolute;
      z-index: var(--z1);
      top: 20rem; left: 0;
      width: 16rem; height: 24rem;
      content: '';
      background: url('../assets/img/info/01@2x.png') no-repeat center center;
      background-size: cover;

      @include breakpoint(md)  { width: 20rem; height: 29rem; top: 16rem; left: 2.4rem; }
      @include breakpoint(mdl) { width: 28rem; height: 43rem; top: 24rem; left: 6%; }
    }

    h1:last-of-type:after {
      display: block;
      position: absolute;
      z-index: var(--z1);
      bottom: 5.6rem; right: 5.6rem;
      width: 8.6rem; height: 9.4rem;
      content: '';
      background: url('../assets/img/info/02@2x.png') no-repeat center center;
      background-size: cover;

      @include breakpoint(md) { width: 15.6rem; height: 17.2rem; bottom: 4rem; right: -44%; }

      @include breakpoint(mdl) {
        width: 22rem; height: 24rem;
        bottom: 0rem;
      }

      @include breakpoint(lg)  { right: -32%; }
    }

    .images {
      display: flex;
    }
  }

  .about {
    display: flex;
    position: relative;
    margin-bottom: 7.2rem;
    padding: 8rem 0 16rem;

    aside {
      display: none;
      @include breakpoint(md) {
        display: inherit;
        margin-top: 40rem;
        /* transform: translateX(3.2rem); */
      }
    }

    article {
      @include breakpoint(md) {
        margin-left: grid-width(5);
        width: grid-width(3.5);
      }
    }
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

    @include breakpoint(md) {
      bottom: 28rem; left: 44%;
    }
  }

  .purchase, .credits {
    margin-bottom: 7.2rem;
  }

  .purchase {
    display: flex;
    flex-direction: column;

    @include breakpoint(md) {
      margin: 0 auto;
      width: grid-width(10);
      flex-direction: row-reverse;
      align-items: center;
      transform: translateY(-9.6rem);

      figure { margin: 0 3.2rem 5.6rem }
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

    mounted() {
      // 000
      const black = anime({
        targets: '.black',
        opacity: [ 0, 1],
        duration: 800,
        delay: 1000,
        easing: 'easeInOutQuart',
      })

      // header
      const header = anime({
        targets: 'header',
        opacity: [ 0, 1],
        duration: 800,
        delay: 1000,
        easing: 'easeInOutQuart',
      })

      // cover
      const cover = anime({
        targets: '.cover',
        translateY: [
          { value: '-100vh', duration: 0, easing: 'cubicBezier(.6, 0, .4, 1)' },
          { value: 0, duration: 800, easing: 'cubicBezier(.6, 0, .4, 1)' }
        ],
        opacity: [
          { value: 1 },
          { value: 0, duration: 800, delay: 500, easing: 'easeInOutQuad' }
        ],
        scaleY: [
          { value: 1, duration: 800, delay: 500, easing: 'cubicBezier(.6, 0, .4, 1)' },
          { value: 0, duration: 0, easing: 'cubicBezier(.6, 0, .4, 1)' }
        ],
      })

      // main
      const about = anime({
        targets: '.about',
        opacity: [ 0, 1],
        duration: 800,
        delay: 1000,
        easing: 'easeInOutQuart',
      })
    }
  }
</script>
