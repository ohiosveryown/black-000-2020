<!-- layout -->
<template>
  <div class="detail-wrapper">

    <!-- nav -->
    <Navigation
      title = 'Home'
      link = '/'
    />

    <!-- main -->
    <main>
      <!-- left -->
      <aside>
        <header>
          <h1 class="f-prim fs-xl uc tac f-outline">{{ page.first_name }}</h1>
          <h1 class="f-prim fs-xl uc tac f-outline">{{ page.last_name }}</h1>
        </header>

        <div class="content">
          <h2 class="story f-prim fs-md uc">their story</h2>
          <p class="f-sec">{{ page.story }}</p>
        </div>

        <!-- previous post -->
        <footer class="footer" v-if='page.prevPost'>
          <h3 class="story f-prim fs-sm uc">
            <router-link class="next-link" :to="page.prevPost.permalink">
              Next: {{ page.prevPost.title }}
              <svg width="23" height="20">
                <path d="M13.874.203l8.84 8.84a.694.694 0 010 .981l-8.84 8.84a.694.694 0 11-.982-.983l7.654-7.654H.694a.694.694 0 010-1.388l19.851-.001-7.653-7.653a.694.694 0 01.982-.982z" fill="#292124"/>
              </svg>
            </router-link>
          </h3>
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
      overflow: scroll;
    }
  }

  header {
    width: 100%;
    hyphens: auto;
    overflow-wrap: break-word;
    word-wrap: break-word;

    @include breakpoint(md) {
      margin: 11.6rem 0 6.4rem;
    }
  }

  figure {
    @include breakpoint(md) {
      width: 50%;
    }
  }

  img {
    width: 100%;
    min-height: 100%; max-height: 100%;
    object-fit: cover;
  }

  .content {
    @include breakpoint(md) {
      margin-bottom: 14rem;
      margin-left: grid-width(1);
      width: grid-width(9);
    }
  }

  .story {
    @include breakpoint(md) {
      margin-bottom: 3.2rem;
    }
  }

  p {
    font-size: 1.6rem;
    line-height: 1.8;
    @include breakpoint(xl) { font-size: 1.8rem; }
  }

  .footer {
    @include breakpoint(md) {
      margin-bottom: 4rem;
      margin-left: grid-width(1);
      width: grid-width(9);
    }
  }

  svg {
    transform: translate(1rem, .5rem);
  }

</style>


<!-- logic -->
<script>
  import Navigation from '../components/Navigation'

  export default {
    props: [ 'page' ],
    components: { Navigation, },

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