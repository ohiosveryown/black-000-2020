<!-- layout -->
<template>
  <div class="detail-wrapper">


    <!-- nav -->
    <Navigation
      title = 'Home'
      link = '/'
    />
    <!-- left / right -->
    <main>
      <aside class="detail-fade-in-bg">
        <!-- name -->
        <HeaderDetail class="detail-fade-in"
          :first_name = 'page.first_name'
          :last_name = 'page.last_name'
        />
        <!-- quote / description -->
        <QuoteDetail class="detail-fade-in"
          :quote = 'page.quote'
        />
        <!-- previous post -->
        <footer class="detail-fade-in footer" v-if='page.prevPost'>
          <router-link class="next-link" :to="page.prevPost.permalink">
            <NextDetail
              :title = 'page.prevPost.title'
            />
          </router-link>
        </footer>
      </aside>
      <!-- right -->
      <figure class="detail-fade-in-fig">
        <img :src="page.assets.img" :alt="page.first_name + page.last_name">
      </figure>
    </main>

    <div class="page-cover cover-enter"/>

  </div>
</template>


<!-- style -->
<style lang='scss' scoped>
  @import '../style/grid.scss';
  @import '../style/reset.scss';
  @import '../style/util.scss';
  @import '../style/type.scss';
  @import '../style/anim.scss';

  .page-cover {
    position: fixed;
    top: 0; left: 0;
    z-index: var(--z5);
    width: 100vw; height: 100vh;
    background: var(--darkest);
    background: #efefef;
    transform: scaleX(0);
    transform-origin: right;
    will-change: transform;
  }


  main {
    display: flex;
    flex-direction: column-reverse;

    @include breakpoint(md) {
      flex-direction: row;
      width: 100vw;
      height: calc(var(--vh, 1vh) * 100);
    }
  }

  aside {
    background: #efefef;
    overflow-x: hidden;
    @include breakpoint(md) { width: 50%; height: 100%; }
  }

  header {
    margin: 4rem 0 4rem;
    @include breakpoint(md) { margin: 16vh 0 6.4rem; }
   }

  figure {
    height: 64vh;
    @include breakpoint(md) { width: 50%; height: inherit; }
  }

  img {
    width: 100%;
    min-height: 100%; max-height: 100%;
    object-fit: cover;
  }

  .footer {
    margin: 0 auto 8rem;
    width: 88vw;

    @include breakpoint(md) {
      margin-bottom: 4rem;
      margin-left: grid-width(1);
      width: grid-width(9);
    }
  }

</style>


<!-- logic -->
<script>
  import Navigation from '../components/Navigation'
  import HeaderDetail from '../components/HeaderDetail'
  import QuoteDetail from '../components/QuoteDetail'
  import NextDetail from '../components/NextDetail'

  export default {
    props: [ 'page' ],
    components: { Navigation, HeaderDetail, QuoteDetail, NextDetail, },

    head() {
      const pageTitle = this.page.title
      return {
        title: pageTitle ?
          `${pageTitle} - ${this.$siteConfig.title}` :
          this.$siteConfig.title
      }
    },

    mounted() {
      let vh = window.innerHeight * 0.01
      document.documentElement.style.setProperty('--vh', `${vh}px`)

      window.addEventListener('resize', () => {
        let vh = window.innerHeight * 0.01
        document.documentElement.style.setProperty('--vh', `${vh}px`)
      })
    },
  }
</script>