<template>
  <main>

    <!-- header -->
    <nuxt-link to="/">
      <Header title='back'/>
    </nuxt-link>

    <!-- bio information -->
    <aside>
      <div class="model-name">
        <h1 class="first-name uc f-titling">Maura</h1>
        <h1 class="last-name uc f-titling">Chanz</h1>
      </div>

      <article class="content">
        <h2 class="f-titling-wide uc">her story</h2>
        <p class="f-akkurat taj">“#000”, or BLACK, is a collection of photos curated to express the cultural appreciation of the women owning their true self through their hair. Each woman presented in this series opened up about their hair journey exuding love and passion through each loop and coiled-strand as they worked toward a healthy relationship and understanding of their hair.</p>

        <!-- social links -->
        <footer>
          <!-- twitter -->
          <a class="mr-2" href="#" target="_blank">
            <svg width="24" height="24" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
          </a>
          <!-- ig -->
          <a href="#" target="_blank">
            <svg width="24" height="24" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
          </a>
        </footer>
      </article>
    </aside>

    <!-- model image -->
    <figure class="figure">
      <img :src="url" />
    </figure>

    <!-- transtion covers -->
    <div class="cover-left"/>
    <div class="cover-right"/>

    <!-- bg cover -->
    <figure class="bg">
      <img :src="url" />
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
    margin: 8rem auto 8rem;
    width: 88vw;
    width: 100vw;

    @include breakpoint(mdl) {
      flex-direction: row;
      align-items: center;
      justify-content: center;
      margin-top: 1.2rem;
      margin-bottom: 0;
      max-height: 96vh; height: 96vh;
    }
  }

  aside {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    z-index: var(--z2);
    margin: 0 auto;
    overflow: hidden;
    width: 90%; min-height: 50%;
    color: var(--darkest);
    will-change: transform;

    @include breakpoint(mdl) {
      margin: 0;
      width: 44%; height: 80%;
    }
  }

  .content {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin: 0 auto;
    padding-bottom: 5.6rem;
    max-width: 48ch; width: 72%;
    height: 88%;
    overflow: scroll;

    @include breakpoint(md) {
      margin: 0 auto;
      padding-bottom: 5.6rem;
      max-width: 48ch; width: 72%;
    }

    @include breakpoint(mdl) {
      margin-left: 5.6rem;
      padding-bottom: 0;
      max-width: 32ch; width: 50%;
    }
  }

  .model-name {
    margin: 4rem 0;

    @include breakpoint(mdl) {
      margin-top: 0;
      position: absolute;
      right: -6.4rem;
      transform: rotate(-90deg);
    }
  }

  h1 {
    color: transparent;
    text-stroke: 1px var(--darkest);
    -webkit-text-stroke: 1px var(--darkest);
    text-align: center;

    @include breakpoint(md) {
      font-size: 4.8rem;
      line-height: 1.2;
    }

    @include breakpoint(mdl) {
      font-size: 4vw;
      line-height: 1;
      text-align: left;
    }
  }

  h2 {
    font-size: 1.6rem;
    text-align: center;
    margin-bottom: 4rem;
    text-align: center;

    @include breakpoint(md) {
      text-align: left;
      margin-bottom: 5.6rem;
    }
  }

  p { font-size: 1.5rem; }

  footer {
    align-self: flex-end;
    margin-top: 4.8rem;
  }

  figure {
    position: relative;
    z-index: var(--z2);
    margin: 0 auto;
    width: 90%; min-height: 50%;
    will-change: transform;

    img {
      display: flex;
      width: 100%; height:100%;
      object-fit: cover;
    }

    @include breakpoint(mdl) {
      margin: 0;
      width: 44%; height: 80%;
    }
  }

  .bg {
    position: fixed;
    top: 0; left: 0;
    z-index: var(--zmin);
    width: 100vw; height: 100vh;
    transform: translate(0);
  }

  .cover-left, .cover-right {
    position: fixed;
    z-index: var(--z1);
    width: 50vw; height: 100vh;
    will-change: transfrom;
    background: var(--darkest);
    transform-origin: right;
  }

  .cover-left { top: 0; left: 0; }

  .cover-right {
    transform-origin: left;
    top: 0; right: 0;
  }

</style>


<script>
  import anime from 'animejs'
  import { colors } from '~/assets/logic.js'
  import Header from '~/components/Header'
  export default {
    components: { Header },
    transition: {
      name: 'page',
      mode: 'in-out'
    },
    data() {
      // image for view 🖼
      return { url: require('~/assets/img/02.jpg') }
    },
    mounted() {
      // title - name injection 📛
      // let name =  this.$route.name
      // name = name.replace(/-/g," ")
      // name = document.querySelector('.name').innerText = name
      const minWidthMdl = window.matchMedia(' (min-width: 1000px)' ).matches
      // get 🌈
      let color = colors[~~(Math.random() * colors.length)]
      document.querySelector('aside').style.background = color

      // header all
      const header = anime({
        targets: 'header',
        opacity: [ 0, 1],
        duration: 800,
        delay: 1000,
        easing: 'easeInOutQuart',
      })

      // cover-left all
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

      // cover-right all
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

      // figure sm
      let fig = anime({
        targets: '.figure',
        opacity: [
          { value: 0, duration: 0, delay: 0 },
          { value: 1, duration: 1400, delay: 800 },
        ],
        translateY: [
          { value: '2%', duration: 0, delay: 0 },
          { value: 0, duration: 1400, delay: 1600 },
        ],
        easing: 'easeInOutQuart',
      })

      // aside sm
      let aside = anime({
        targets: 'aside',
        opacity: [
          { value: 0, duration: 0, delay: 0 },
          { value: 1, duration: 1400, delay: 1200 },
        ],
        translateY: [
          { value: '-50%', duration: 0, delay: 0 },
          { value: 0, duration: 1400, delay: 1600 },
        ],
        easing: 'easeInOutQuart',
      })

      // bg sm
      const bg = anime({
        targets: '.bg',
        opacity: ['0', '.12'],
        duration: 800,
        delay: 3000,
        easing: 'easeInOutQuart',
      })

      if (minWidthMdl) {
        // figure mdl
        let fig = anime({
          targets: '.figure',
          opacity: [
            { value: 0, duration: 0, delay: 0 },
            { value: 1, duration: 1400, delay: 800 },
          ],
          translateX: [
            { value: '-50%', duration: 0, delay: 0 },
            { value: 0, duration: 1400, delay: 1600 },
          ],
          translateY: [
            { value: 0, duration: 0, delay: 0 },
            { value: 0, duration: 1400, delay: 1600 },
          ],
          duration: 1400,
          delay: 600,
          easing: 'easeInOutQuart',
        })

        // aside mdl
        let aside = anime({
          targets: 'aside',
          opacity: [
            { value: 0, duration: 0, delay: 0 },
            { value: 1, duration: 1400, delay: 1200 },
          ],
          translateX: [
            { value: '50%', duration: 0, delay: 0 },
            { value: 0, duration: 1400, delay: 1600 },
          ],
          translateY: [
              { value: 0, duration: 0, delay: 0 },
              { value: 0, duration: 1400, delay: 1600 },
            ],
          easing: 'easeInOutQuart',
        })

        // name mdl
        let firstname = anime({
          targets: '.first-name',
          translateX: [ 0, '3.2rem'],
          duration: 800,
          delay: 2400,
          easing: 'easeInOutQuart',
        })

        let lastname = anime({
          targets: '.last-name',
          translateX: [ 0, '-3.2rem'],
          duration: 800,
          delay: 2400,
          easing: 'easeInOutQuart',
        })
      }
    }
  }
</script>