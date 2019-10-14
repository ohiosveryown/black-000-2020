<!-- layout -->
<template>
  <div class="cover-darkest"/>
</template>


<!-- style -->
<style lang='scss' scoped>
  @import '../style/grid.scss';
  @import '../style/reset.scss';
  @import '../style/util.scss';
  @import '../style/type.scss';

  .cover-darkest {
    position: fixed;
    top: 0; left: 0;
    z-index: var(--z5);
    width: 100vw; height: 100vh;
    background: var(--darkest);
    background: #121111;
    transform: scaleX(0);
    transform-origin: right;
    will-change: transform;
  }

</style>


<!-- logic -->
<script>
  export default {

  }
</script>