<template>
  <footer class="width-wide">

    <h2 class="default f-titling uc">Drag</h2>
    <h2 class="touch f-titling uc">Swipe</h2>
    <svg class="next" width="24" height="20"><path d="M20.74 9.306l-7.653-7.654a.694.694 0 1 1 .982-.982l8.839 8.839a.694.694 0 0 1 0 .982l-8.84 8.839a.694.694 0 1 1-.981-.982l7.653-7.654H.89a.694.694 0 1 1 0-1.388H20.74z" fill="#FFF"/></svg>

  </footer>
</template>


<style lang="scss" scoped>
  @import '~/assets/style/grid.scss';

  footer {
    display: flex;
    justify-content: space-between;
    position: fixed;
    bottom: 3.2rem; right: 0; left: 0;
    margin: 0 auto;
    text-align: center;
    opacity: .64;
    h2 { font-size: .8rem; }
  }

  svg {
    cursor: pointer;
    margin-top: -1.2rem;
    transform: scale(.9);
  }

  .touch {
    display: inherit;
    @include breakpoint(mdl) { display: none; }
  }

  .default {
    display: none;
    @include breakpoint(mdl) { display: inherit; }
  }

</style>


<script>
  import anime from 'animejs'
  export default {
    mounted() {
      anime({
        targets: '.next',
        easing: 'easeInExpo',
        translateX: ['-400px', '0'],
        opacity: [0, 1],
        duration: 2400,
        delay: 900
      })
    }
  }
</script>