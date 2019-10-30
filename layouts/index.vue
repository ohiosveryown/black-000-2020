<!-- layout -->
<template>
  <div class="index-wrapper">

    <!-- cursor halo -->
    <HaloIndex/>

    <!-- nav -->
    <Navigation
      title = 'Info'
      link = '/info.html'
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
    max-width: 100vw; width: 100vw;
    overflow: hidden;
    &.is-draggable { cursor: move; cursor: grab; }
    &.is-dragging { cursor: grabbing; }
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
    @include breakpoint(lg) { flex: 0 0 25%; }
  }

</style>


<!-- logic -->
<script>
  import { staticLogic, leaveLogic } from '../logic/for-index'
  import EmblaCarousel from 'embla-carousel'
  import HaloIndex from '../components/HaloIndex'
  import Navigation from '../components/Navigation'
  import CoverDarkest from '../components/CoverDarkest'
  import Carousel from '../components/Carousel'
  import FooterIndex from '../components/FooterIndex'

  export default {
    props: [ 'page' ],
    components: { HaloIndex, Navigation, CoverDarkest, Carousel, FooterIndex, },

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
      staticLogic()
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
      // halo cursor
      const buttons = document.querySelectorAll('button')
      const halo = document.querySelector('.halo')
      const ul = document.querySelector('ul')
      // halo list hover in / out
      ul.addEventListener('mouseover', () => { halo.style.opacity = 1 })
      ul.addEventListener('mouseout', () => { halo.style.opacity = 0 })
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

    beforeDestroy() {
      leaveLogic()
    },
  }
</script>