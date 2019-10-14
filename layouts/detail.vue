<!-- layout -->
<template>
  <div class="detail-wrapper">


    <!-- nav -->
    <Navigation
      title = 'Home'
      link = '/'
    />

    <main>
      <!-- left -->
      <aside>
        <HeaderDetail
          :first_name = 'page.first_name'
          :last_name = 'page.last_name'
        />

        <QuoteDetail
          :quote = 'page.quote'
        />

        <!-- previous post -->
        <footer class="footer" v-if='page.prevPost'>
          <router-link class="next-link" :to="page.prevPost.permalink">
            <NextDetail
              :title = 'page.prevPost.title'
            />
          </router-link>
        </footer>
      </aside>

      <!-- right -->
      <figure class="">
        <img :src="page.assets.img" :alt="page.first_name + page.last_name">
      </figure>
    </main>


  </div>
</template>


<!-- style -->
<style lang='scss' scoped>
  @import '../style/grid.scss';
  @import '../style/reset.scss';
  @import '../style/util.scss';
  @import '../style/type.scss';

  main {
    display: flex;
    flex-direction: column;

    @include breakpoint(md) {
      flex-direction: row;
      width: 100vw; height: 100vh;
    }
  }

  aside {
    background: #efefef;

    @include breakpoint(md) {
      width: 50%; height: 100%;
      overflow-x: hidden;
    }
  }

  header {
    @include breakpoint(md) { margin: 16vh 0 6.4rem; }
   }

  figure {
    @include breakpoint(md) { width: 50%; }
  }

  img {
    width: 100%;
    min-height: 100%; max-height: 100%;
    object-fit: cover;
  }

  .footer {
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
    components: { Navigation, HeaderDetail, QuoteDetail, NextDetail },

    head() {
      const pageTitle = this.page.title
      return {
        title: pageTitle ?
          `${pageTitle} - ${this.$siteConfig.title}` :
          this.$siteConfig.title
      }
    },
  }
</script>