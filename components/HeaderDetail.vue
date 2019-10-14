<!-- layout -->
<template>
  <header>


    <h1 class="first-name f-prim fs-xl uc f-outline">{{ first_name }}</h1>
    <h1 class="last-name f-prim fs-xl uc f-outline">{{ last_name }}</h1>


  </header>
</template>


<!-- style -->
<style lang='scss' scoped>
  @import '../style/grid.scss';
  @import '../style/reset.scss';
  @import '../style/util.scss';
  @import '../style/type.scss';

  header {
    width: 96%;
    hyphens: auto;
    overflow-wrap: break-word;
    word-wrap: break-word;
  }
</style>


<!-- logic -->
<script>
  export default {
    props: [ 'first_name', 'last_name', ]
  }
</script>