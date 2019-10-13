<!-- layout -->
<template>
  <div class="debug slot-wrapper">
    <slot/>
    <div class="recent-posts" v-if="page.posts">

    </div>

    <ul>
      <li v-for="post in page.posts" :key="post.permalink">
        <saber-link :to='post.permalink'>{{ post.title }}</saber-link>
      </li>
    </ul>
  </div>
</template>


<!-- style -->
<style lang='scss'>
  @import '../style/grid.scss';
  @import '../style/reset.scss';
  @import '../style/util.scss';
  @import '../style/type.scss';
  ul { display: flex; flex-direction: column; }
  // .page-enter-active, .page-leave-active { transition: all calc(var(--animbase) * 2) ease; }
</style>


<!-- logic -->
<script>
  export default {
    props: [ 'page' ],
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