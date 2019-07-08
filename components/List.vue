<template>
  <ul class="siema">
    <li>
      <div class="content">
        <img src="~/assets/img/01.jpg" alt="">
      </div>
      <nuxt-link to="/maura-chanz">
        <button class="f-gangster">View</button>
      </nuxt-link>
    </li>

    <li>
      <div class="content">
        <img src="~/assets/img/02.jpg" alt="">
      </div>
      <nuxt-link to="/test">
        <button class="f-gangster">View</button>
      </nuxt-link>
    </li>

    <li>
      <div class="content">
        <img src="~/assets/img/03.jpg" alt="">
      </div>
      <nuxt-link to="/test">
        <button class="f-gangster">View</button>
      </nuxt-link>
    </li>

    <li>
      <div class="content">
        <img src="~/assets/img/04.jpg" alt="">
      </div>
      <nuxt-link to="/test">
        <button class="f-gangster">View</button>
      </nuxt-link>
    </li>

    <li>
      <div class="content">
        <img src="~/assets/img/05.jpg" alt="">
      </div>
      <nuxt-link to="/test">
        <button class="f-gangster">View</button>
      </nuxt-link>
    </li>

    <li>
      <div class="content">
        <img src="~/assets/img/06.jpg" alt="">
      </div>
      <nuxt-link to="/test">
        <button class="">View</button>
      </nuxt-link>
    </li>
  </ul>
</template>


<style lang="scss" scoped>
  @import '~/assets/style/grid.scss';

  .cover {
    position: absolute;
    top: 0; left: 0;
    width: 100%; height: 100%;
    background: var(--darkest);
    transform-origin: top;
    will-change: transform;
    z-index: var(--z1);
  }

  ul {
    /* opacity: 0; */
    width: 100vw;
  }

  li {
    position: relative;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 64vh;
    transition: all 600ms ease;
    transform-origin: center;
    will-change: transform;
    animation-fill-mode: forwards;

    @include breakpoint(md) { max-height: 76rem; height: 76vh; }
  }

  .content {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0rem 2.4rem;
    height: 100%;
    text-align: center;
    overflow: hidden;
  }

  img {
    width:100%; height:100%;
    object-fit: cover;
    transition: all 600ms ease;
    will-change: transform;
  }

  .active {
    transform: scale(.88);
    img { transform: scale(1.2); }
  }

  button {
    display: block;
    margin: 0 auto;
    padding: 2rem;
    width: 88%;
    background: none;
    color: var(--gold);
    text-transform: uppercase;
    font-size: 1.5rem;
  }

</style>


<script>
  import anime from 'animejs'
  import Siema from 'siema'
  export default {
    mounted() {
      // enter transition
      anime({
        targets: 'ul',
        opacity: ['0', '1'],
        duration: 600,
        delay: 600,
        easing: 'easeInOutQuart',
      })
      // slider options
      const mySiema = new Siema({
        perPage: 3,
        loop: true,
        duration: 800,
        threshold: 0,
        multipleDrag: true,
        easing: 'cubic-bezier(0.165, 0.84, 0.44, 1)',
        perPage: {
          0: 1,
          800: 2,
          1000: 3,
          1400: 4,
        },
      })
      // next btn
      document.querySelector('.next').addEventListener('click', () => mySiema.next());
      //slider logic
      const slider   = document.querySelector('ul'),
            children = document.querySelectorAll('li'),
            imgs     = document.querySelectorAll('img'),
            button   = document.querySelectorAll('button')
      // focus logic
      slider.addEventListener('mousedown', () => {
        children.forEach ((children) => {
          children.classList.add('active')
        })
      })
      // outta focus logic
      slider.addEventListener('mouseup', () => {
        children.forEach ((children) => {
          children.classList.remove('active')
        })
      })
    }
  }
</script>