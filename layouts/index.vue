<!-- layout -->
<template>
  <div class="index-wrapper">

    <!-- nav -->
    <Navigation
      title = 'Info'
      link = '/posts/test-two.html'
    />

    <!-- main -->
    <main class="carousel-wrapper" v-if="page.posts">
      <ul>
        <li v-for="post in page.posts" :key="post.permalink">
          <Carousel
            :img = 'post.assets.img'
            :link = 'post.permalink'
            :first_name = 'post.first_name'
            :last_name = 'post.last_name'
            :id = 'post.id'
          />
        </li>
      </ul>
    </main>

    <FooterIndex/>
    <CoverDarkest/>

  </div>
</template>


<!-- style -->
<style lang='scss' scoped>
  @import '../style/grid.scss';
  @import '../style/reset.scss';
  @import '../style/util.scss';
  @import '../style/type.scss';
  @import '../style/anim.scss';

  .carousel-wrapper {
    position: relative;
    width: 100vw;
    overflow: hidden;
    &.is-draggable { cursor: move; cursor: grab; }
    &.is-dragging { cursor: grabbing; }
  }

  .is-draggable ~ img {
    transform: translateY(-5vh);
  }

  ul {
    display: flex;
    width: 100%;
    color: var(--cloud);
  }

  li {
    position: relative;
    flex: 0 0 100%;
    @include breakpoint(md) { flex: 0 0 50%; }
    @include breakpoint(mdl) { flex: 0 0 33.333%; }
  }

</style>


<!-- logic -->
<script>
  import EmblaCarousel from 'embla-carousel'
  import Navigation from '../components/Navigation'
  import CoverDarkest from '../components/CoverDarkest'
  import Carousel from '../components/Carousel'
  import FooterIndex from '../components/FooterIndex'

  export default {
    props: [ 'page' ],
    components: { Navigation, CoverDarkest, Carousel, FooterIndex, },

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
      // carousel
      const emblaNode = document.querySelector('.carousel-wrapper')
      const embla = EmblaCarousel(emblaNode, {
        align: 'start',
        loop: true,
        speed: 10,
        startIndex: 0,
        selectedClass: 'is-selected',
        draggableClass: 'is-draggable',
        draggingClass: 'is-dragging',
      })
      // next button
      const buttonNext = document.querySelector('.button--next')
      buttonNext.addEventListener('click', embla.scrollNext, false)
    },
  }
</script>