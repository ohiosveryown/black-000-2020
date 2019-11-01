<!-- layout -->
<template>
  <div class="detail-wrapper">

    <!-- cursor halo -->
    <!-- <Halo/> -->

    <!-- nav -->
    <Navigation
      title = 'Home'
      link = '/'
    />
    <!-- left / right -->
    <main>
      <aside>
        <div class="aside-content">
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
          <footer class="footer detail-fade-in" v-if='page.prevPost'>
            <router-link class="next-link" :to="page.prevPost.permalink">
              <NextDetail
                :title = 'page.prevPost.title'
              />
            </router-link>
          </footer>
        </div>
      </aside>
      <!-- right -->
      <figure>
        <img
          class="detail-fade-in-fig"
          :src="page.assets.img"
          :alt="page.first_name + page.last_name"
        >
      </figure>
    </main>

    <DetailCover/>
    <DetailCoverTri/>

  </div>
</template>


<!-- style -->
<style lang='scss' scoped>
  @import '../style/grid.scss';
  @import '../style/reset.scss';
  @import '../style/util.scss';
  @import '../style/type.scss';
  @import '../style/anim.scss';

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
    background: var(--grey);
    overflow-x: hidden;
    @include breakpoint(md) { width: 50%; height: 100%; }
  }

  header {
    margin: 4rem 0 4rem;
    @include breakpoint(md) { margin: 16vh 0 6.4rem; }
   }

  figure {
    height: 68vh;
    overflow: hidden;
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
  import { staticLogic, toDetail, toIndex } from '../logic/for-detail'
  import Halo from '../components/Halo'
  import Navigation from '../components/Navigation'
  import HeaderDetail from '../components/HeaderDetail'
  import QuoteDetail from '../components/QuoteDetail'
  import NextDetail from '../components/NextDetail'
  import DetailCover from '../components/DetailCover'
  import DetailCoverTri from '../components/DetailCoverTri'

  export default {
    props: [ 'page' ],
    components: { Halo, Navigation, HeaderDetail, QuoteDetail, NextDetail, DetailCover, DetailCoverTri },

    head() {
      const pageTitle = this.page.title
      return {
        title: pageTitle ?
          `${pageTitle} - ${this.$siteConfig.title}` :
          this.$siteConfig.title
      }
    },

    mounted() {
      staticLogic()
    },

    beforeDestroy() {
      if ( this.$route.path === '/' ) {
        toIndex()
      } else if ( this.$route.path === '/info.html' ) {
        // probably not required as there is no way to get to info from detail
      } else {
        toDetail()
      }
    },
  }
</script>