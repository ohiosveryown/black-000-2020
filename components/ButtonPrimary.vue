<!-- layout -->
<template>
  <button class="button--primary f-prim tac uc">{{ label }}</button>
</template>


<!-- style -->
<style lang='scss' scoped>
  @import '../style/grid.scss';
  @import '../style/reset.scss';
  @import '../style/util.scss';
  @import '../style/type.scss';

  .button--primary {
    margin: 0 auto;
    padding: 1.6rem;
  }

</style>


<!-- logic -->
<script>
  export default {
    props: [ 'label', ]
  }
</script>