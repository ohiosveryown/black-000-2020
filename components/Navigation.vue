<!-- layout -->
<template>
  <nav class="f-prim fs-sm uc">
    <saber-link class="link" :to='link'>{{ title }}</saber-link>
  </nav>
</template>


<!-- style -->
<style lang='scss'>
  @import '../style/grid.scss';
  @import '../style/reset.scss';
  @import '../style/util.scss';
  @import '../style/type.scss';
  @import '../style/anim.scss';

  nav {
    position: sticky;
    top: 1.6rem;
    display: flex;
    justify-content: center;
    width: 100vw;
    margin-bottom: 1.6rem;
    padding-bottom: 1.6rem;
  }

  .link {
    padding: 1.6rem 2.4rem 1.4rem;
    background: tomato;
  }
</style>


<!-- logic -->
<script>
  export default {
    props: [ 'link', 'title', ]
  }
</script>