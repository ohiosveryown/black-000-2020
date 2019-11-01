<!-- layout -->
<template>
  <section>


    <div/>
    <div/>
    <div/>


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
    background: var(--grey);
  }

  div:nth-of-type(1) {
    left: 0;
    width: 100vw;
    transform: scale(1,1) translate(0,0);
    transform-origin: top;
    will-change: transform;

    @include breakpoint(md) {
      width: 33.333vw;
    }
  }

  div:nth-of-type(2), div:nth-of-type(3) {
    display: none;

    @include breakpoint(md) {
      display: inherit;
      left: 33.333vw;
      width: 33.333vw;
    }
  }

  div:nth-of-type(3) { left: 66.666vw; }

</style>


<!-- logic -->
<script>
  export default {

  }
</script>