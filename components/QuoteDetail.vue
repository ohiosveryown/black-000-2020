<!-- layout -->
<template>
  <section class="content">


    <h2 class="story f-prim fs-md uc">their story</h2>
    <p class="f-sec">{{ quote }}</p>

  </section>
</template>


<!-- style -->
<style lang='scss' scoped>
  @import '../style/grid.scss';
  @import '../style/reset.scss';
  @import '../style/util.scss';
  @import '../style/type.scss';

  .content {
    margin: 0 auto 8rem;
    width: 88vw;

    @include breakpoint(md) {
      margin-bottom: 14rem;
      margin-left: grid-width(1);
      width: grid-width(9);
    }
  }

  .story { margin-bottom: 3.2rem; }

  p {
    font-size: 1.6rem;
    line-height: 1.8;
    @include breakpoint(xl) { font-size: 1.8rem; }
  }

</style>


<!-- logic -->
<script>
  export default {
    props: [ 'quote', ]
  }
</script>