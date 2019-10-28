<!-- layout -->
<template>
  <div class="info-wrapper cloud">

    <!-- cursor halo -->
    <Halo/>

    <!-- nav -->
    <Navigation
      title = 'Home'
      link = '/'
    />

    <main class="width">
      <h3 class="black f-prim">#000000</h3>

      <section class="intro">
        <header class="f-prim uc">
          <h1>black</h1>
          <h1>#000</h1>
        </header>
      </section>

      <section class="about">
        <aside class="f-sec">
          <!-- <ul class="f-sec">
            <h2 class="f-prim uc">Models</h2>
            <li>Maura Chanz</li>
            <li>Kaira Fern</li>
            <li>Alannah Felix</li>
            <li>Melanie Fisher</li>
            <li>Tanya Hargrove</li>
            <li>Daphne Jacobs</li>
            <li>Ryann McClure</li>
            <li>Tisha Ollison</li>
            <li>Amy Oum</li>
          </ul> -->
          {{ page.models }}
        </aside>

        <article>
          <h2 class="f-prim uc">About</h2>
          <p class="f-sec taj">{{ page.paragraph_one }}</p>
          <p class="f-sec taj">{{ page.paragraph_two }}</p>
        </article>
      </section>

      <section class="purchase">
        <article>
          <h2 class="f-prim uc">Purchase the Book</h2>
          <p class="mb-5 f-sec">Sold Out! <span class="strike">The Coffee Table Book &amp; Prints are available at: www.royehandy.com/shop</span></p>
        </article>

        <figure>
          <img src="../pages/_posts/img/000-0.jpg" alt="000 coffee table book">
        </figure>
      </section>

      <section class="credits">
        <h2 class="f-prim uc">Credits</h2>
        <h3 class="mb-1 f-sec">A project by <a target="_blank" href="http://www.royehandy.com/">Roy Handy</a></h3>
        <h3 class="mb-5 f-sec">A site by <a target="_blank" href="https://www.twitter.com/cmykw_">Matthew Pence</a></h3>
      </section>
    </main>

  </div>
</template>


<!-- style -->
<style lang='scss' scoped>
  @import '../style/grid.scss';
  @import '../style/reset.scss';
  @import '../style/util.scss';
  @import '../style/type.scss';
  @import '../style/anim.scss';

  h2 { margin-bottom: 2.4rem; font-size: 1.6rem; }
  h3, p { font-size: 1.5rem; }
  p + p { text-indent: 4ch; }
  a { text-decoration: underline; }
  ul { display: flex; flex-direction: column; }
  li { margin-bottom: .8rem; font-size: 1.5rem; }

  .info-wrapper {
    overflow-x: hidden;
  }

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
      background: url('../pages/_posts/img/000-17.jpg') no-repeat center center;
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
      background: url('../pages/_posts/img/000-6.jpg') no-repeat center center;
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
    background: url('../pages/_posts/img/000-15.jpg') no-repeat center center;
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


<!-- logic -->
<script>
  import Halo from '../components/Halo'
  import Navigation from '../components/Navigation'

  export default {
    props: [ 'page' ],
    components: { Halo, Navigation, },

    head() {
      const pageTitle = this.page.title
      return {
        title: pageTitle ?
          `${pageTitle} - ${this.$siteConfig.title}` :
          this.$siteConfig.title,

        meta: [
          {
            author: 'Matthew Pence (@cmykw_) c/o Roy Handy',
            description: 'A photo blog web app by Matthew Pence, featuring the work of Roy Handy, built on VueJS/Saber.'
          }
        ],
      }
    },

    mounted() {
      // halo cursor
      const buttons = document.querySelectorAll('button')
      const halo = document.querySelector('.halo')
      // halo buttons hover in
      buttons.forEach((currentBtn) => {
        currentBtn.addEventListener('mouseenter', () => {
          halo.style.opacity = 0
          halo.style.transition = 'opacity 500ms ease'
        })
      })
      // halo buttons hover out
      buttons.forEach((currentBtn) => {
        currentBtn.addEventListener('mouseleave', () => {
          halo.style.opacity = 1
        })
      })
    },
  }
</script>