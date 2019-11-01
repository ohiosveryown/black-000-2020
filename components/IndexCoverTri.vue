<!-- layout -->
<template>
  <section>


    <div class="first"/>
    <div class="second"/>
    <div class="third"/>


  </section>
</template>


<!-- style -->
<style lang='scss' scoped>
  @import '../style/grid.scss';
  @import '../style/reset.scss';
  @import '../style/util.scss';
  @import '../style/type.scss';

  div {
    position: fixed;
    top: 0;
    z-index: var(--z5);
    height: 100vh;
    background: var(--darkest);
    transform-origin: bottom;
    will-change: transform;
  }

  .first {
    left: 0;
    width: 100vw;
    transform: scale(1,1) translate(0,0);
    @include breakpoint(md) { width: 33.333vw; }
  }

  .second, .third {
    display: none;

    @include breakpoint(md) {
      display: inherit;
      left: 33.333vw;
      width: 33.333vw;
    }
  }

  .third { left: 66.666vw; }

</style>


<!-- logic -->
<script>
  export default {

  }
</script>