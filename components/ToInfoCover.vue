<!-- layout -->
<template>
  <div class="to-info"/>
</template>


<!-- style -->
<style lang='scss' scoped>
  @import '../style/grid.scss';
  @import '../style/reset.scss';
  @import '../style/util.scss';
  @import '../style/type.scss';

  .to-info {
    position: fixed;
    top: 0; left: 0;
    z-index: var(--z5);
    width: 100vw; height: 100vh;
    background: var(--darkest);
    transform: scale(1,0);
    transform-origin: top;
    will-change: transform;
  }

</style>


<!-- logic -->
<script>
  export default {

  }
</script>