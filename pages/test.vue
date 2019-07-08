<template>
  <main>

    <!-- halo -->
    <Halo/>

    <!-- header -->
    <nuxt-link to="/">
      <Header title='back'/>
    </nuxt-link>

    <aside>
      {{this.$route.name}}
    </aside>
    <figure class="figure"></figure>

    <!-- transtion covers -->
    <div class="cover-left"/>
    <div class="cover-right"/>

    <!-- bg cover -->
    <figure class="bg">
      <img src="~/assets/img/01.jpg" alt="">
    </figure>

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

  main {
    display: flex;
    flex-direction: column-reverse;
    margin-top: 7.2rem;
    width: 100vw; height: 100vh;

    @include breakpoint(md) {
      flex-direction: row;
      align-items: center;
      justify-content: center;
      margin-top: 1.2rem;
      max-height: 96vh; height: 96vh;
    }
  }

  aside {
    position: relative;
    z-index: var(--z2);
    margin: 0 auto;
    width: 90%; min-height: 50%;
    /* background: #EFEFEF; */
    color: var(--darkest);
    will-change: transform;

    @include breakpoint(mdl) {
      margin: 0;
      width: 44%; height: 80%;
    }
  }

  figure {
    position: relative;
    z-index: var(--z2);
    margin: 0 auto;
    width: 90%; min-height: 50%;
    background: palegoldenrod;
    will-change: transform;

    @include breakpoint(mdl) {
      margin: 0;
      width: 44%; height: 80%;
    }
  }

  .bg {
    position: fixed;
    top: 0;
    z-index: var(--zmin);
    width: 100vw; height: 100vh;
    transform: translate(0);
    img {
      width: 100%; height:100%;
      object-fit: cover;
    }
  }

  .cover-left, .cover-right {
    position: fixed;
    z-index: var(--z1);
    width: 50vw; height: 100vh;
    will-change: transfrom;
    background: var(--darkest);
    transform-origin: right;
  }

  .cover-left {
    top: 0; left: 0;
  }

  .cover-right {
    transform-origin: left;
    top: 0; right: 0;
  }

</style>


<script>
  import anime from 'animejs'
  import { colors } from '~/assets/logic.js'
  import Halo from '~/components/Halo'
  import Header from '~/components/Header'
  export default {
    components: { Header },
    transition: {
      name: 'page',
      mode: 'in-out'
    },
    mounted() {
      // get 🌈
      let color = colors[~~(Math.random() * colors.length)]
      document.querySelector('aside').style.background = color
      // header
      const header = anime({
        targets: 'header',
        opacity: [ 0, 1],
        duration: 800,
        delay: 1000,
        easing: 'easeInOutQuart',
      })
      // cover-left
      const coverLeft = anime({
        targets: '.cover-left',
        opacity: [
          { value: 1, duration: 0, delay: 0 },
          { value: 0, duration: 300, delay: 800 },
        ],
        scaleX: [
          { value: 0, duration: 0, delay: 0 },
          { value: 1, duration: 700 },
        ],
        duration: 700,
        easing: 'cubicBezier(.9, .03, .7, .22)',
      })
      // cover-right
      const coverRight = anime({
        targets: '.cover-right',
        opacity: [
          { value: 1, duration: 0, delay: 0 },
          { value: 0, duration: 300, delay: 800 },
        ],
        scaleX: [
          { value: 0, duration: 0, delay: 0 },
          { value: 1, duration: 700 },
        ],
        easing: 'cubicBezier(.9, .03, .7, .22)',
      })
      // figure
      const fig = anime({
        targets: '.figure',
        opacity: [
          { value: 0, duration: 0, delay: 0 },
          { value: 1, duration: 1400, delay: 800 },
        ],
        translateX: [
          { value: '-50%', duration: 0, delay: 0 },
          { value: 0, duration: 1400, delay: 1600 },
        ],
        duration: 1400,
        delay: 600,
        easing: 'easeInOutQuart',
      })
      // aside
      const aside = anime({
        targets: 'aside',
        opacity: [
          { value: 0, duration: 0, delay: 0 },
          { value: 1, duration: 1400, delay: 1200 },
        ],
        translateX: [
          { value: '50%', duration: 0, delay: 0 },
          { value: 0, duration: 1400, delay: 1600 },
        ],
        easing: 'easeInOutQuart',
      })
      // bg
      const bg = anime({
        targets: '.bg',
        opacity: ['0', '.12'],
        duration: 800,
        delay: 2600,
        easing: 'easeInOutQuart',
      })
    }
  }
</script>