<!-- layout -->
<template>
  <nav>
    <saber-link :to='link'>
      <button class="link f-prim fs-xs uc">{{ title }}</button>
    </saber-link>
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
    position: fixed;
    top: 1.6rem;
    z-index: var(--z5);
    display: flex;
    justify-content: center;
    width: 100vw;
  }

  .link {
    padding: 1.6rem 2.4rem 1.4rem;
    background: var(--darkest);
    color: var(--cloud);
  }
</style>


<!-- logic -->
<script>
  export default {
    props: [ 'link', 'title', ]
  }
</script>