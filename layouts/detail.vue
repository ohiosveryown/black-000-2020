<!-- layout -->
<template>
  <div class="debug slot-wrapper">
    <Navigation
      title = 'Home'
      link = '/'
    />

    <slot/>

  </div>
</template>


<!-- style -->
<style lang='scss'>
  @import '../style/grid.scss';
  @import '../style/reset.scss';
  @import '../style/util.scss';
  @import '../style/type.scss';
  // .page-enter-active, .page-leave-active { transition: all calc(var(--animbase) * 2) ease; }
</style>


<!-- logic -->
<script>
  import Navigation from '../components/Navigation'

  export default {
    props: [ 'page' ],
    components: { Navigation, },

    head() {
      const pageTitle = this.page.title
      return {
        title: pageTitle ?
          `${pageTitle} - ${this.$siteConfig.title}` :
          this.$siteConfig.title
      }
    },
  }
</script>