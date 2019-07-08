<template>
  <section>

    <div class="first"/>
    <div class="second"/>
    <div class="third"/>

  </section>
</template>


<style lang="scss" scoped>
  @import '~/assets/style/grid.scss';

  section {
    display: flex;
    position: absolute;
    z-index: var(--zmax);
    top: 0; left: 0;
    width: 100vw; height: 100vh;
  }

  div {
    width: 33.333%; height: 100%;
    background: var(--darkest);
    /* background: #EFEFEF; */
    transform-origin: bottom;
  }

</style>


<script>
  import anime from 'animejs'
  export default {
    mounted() {
      const first = anime({
        targets: '.first',
        easing: 'easeInCubic',
        scaleY: ['1', '0'],
        duration: 1000,
        delay: 1200
      })
      const second = anime({
        targets: '.second',
        easing: 'easeInCubic',
        scaleY: ['1', '0'],
        duration: 1000,
        delay: 1400
      })
      const third = anime({
        targets: '.third',
        easing: 'easeInCubic',
        scaleY: ['1', '0'],
        duration: 1000,
        delay: 1600
      })
    }
  }
</script>