<template>
  <header>

    <h1 class="f-titling uc">
      <!-- <nuxt-link to="/test">Info</nuxt-link> -->
      {{ title }}
    </h1>

  </header>
</template>


<style lang="scss" scoped>
  @import '~/assets/style/grid.scss';

  header {
    /* display:inline-block; */
    position: fixed;
    top: 3.2rem; left: 50%;
    transform: translateX(-50%);
    z-index: var(--z3);
    text-align: center;
    h1 { font-size: 1.1rem; }
  }

</style>


<script>
  export default {
    props: ['title'],
    mounted() {}
  }
</script>