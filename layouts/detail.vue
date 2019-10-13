<!-- layout -->
<!-- layout -->
<template>
  <div class="deaitl-wrapper">

    <!-- nav -->
    <Navigation
      title = 'Home'
      link = '/'
    />

    <!-- main -->
    <main>
      <h1>{{ page.first_name }}</h1>
      <h1>{{ page.last_name }}</h1>
      <p>{{ page.story }}</p>
      <figure>
        <img :src="page.assets.img" alt="">
      </figure>
    </main>


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