<!-- layout -->
<template>
  <div class="index-wrapper">

    <!-- nav -->
    <Navigation
      title = 'Info'
      link = '/posts/test-two.html'
    />

    <!-- main -->
    <main>
      <ul>
        <li v-for="post in page.posts" :key="post.permalink">
          <saber-link :to='post.permalink'>{{ post.title }}</saber-link>
        </li>
      </ul>
    </main>

    <CoverDarkest/>

  </div>
</template>


<!-- style -->
<style lang='scss' scoped>
  @import '../style/grid.scss';
  @import '../style/reset.scss';
  @import '../style/util.scss';
  @import '../style/type.scss';
  @import '../style/anim.scss';

  ul {
    display: flex;
    flex-direction: column;
    color: var(--cloud);
  }
</style>


<!-- logic -->
<script>
  import Navigation from '../components/Navigation'
  import CoverDarkest from '../components/CoverDarkest'

  export default {
    props: [ 'page' ],
    components: { Navigation, CoverDarkest, },

    head() {
      const pageTitle = this.page.title
      return {
        title: pageTitle ?
          `${pageTitle} - ${this.$siteConfig.title}` :
          this.$siteConfig.title,

        meta: [
          {
            author: 'Matthew Pence (@cmykw_) c/o Roy Handy',
            description: 'A photo blog web app by Matthew Pence, featuring the work of Roy Handy, built on VueJS/Saber.'
          }
        ],
      }
    },
  }
</script>