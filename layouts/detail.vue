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
      <aside class="">
        <header>
          <h1 class="f-prim fs-xl uc tac f-outline">{{ page.first_name }}</h1>
          <h1 class="f-prim fs-xl uc tac">{{ page.last_name }}</h1>
        </header>
        <h2 class="f-prim fs-md uc">their story</h2>
        <p class="f-sec">{{ page.story }}</p>
        <p class="f-sec">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, magnam accusamus vero quasi non vel eligendi rem odit et suscipit? Quam consequatur reiciendis dolorum facilis, ab eum laborum at. Expedita placeat, veritatis beatae facere corrupti veniam. Similique, labore enim beatae excepturi quidem voluptatem voluptatum aspernatur doloribus autem deserunt rem tenetur fugiat deleniti sit praesentium, repellat magnam! Ducimus reiciendis amet omnis totam odit. Nostrum fugit placeat laboriosam impedit, nobis, modi eius repudiandae porro veritatis maiores voluptas iste odit ut? Eligendi, dignissimos soluta voluptatem illum harum blanditiis quae earum asperiores iure animi officia eaque maxime veritatis numquam alias magni tenetur amet fugit aperiam impedit, fugiat vel dolorem sit. Doloribus porro maxime dolores suscipit in dolorem. Sapiente quam quis minus esse ducimus? Consequuntur quibusdam sequi iure quisquam accusamus, qui nam eligendi suscipit aliquam quidem minima ut possimus nulla reiciendis omnis molestiae. Quidem, tempora porro! Quam incidunt temporibus pariatur. Praesentium aspernatur voluptate quas ea iusto, perspiciatis vel? Tempora iure at culpa ipsam. Iure a, quis quaerat eum velit, dignissimos repellendus enim laudantium ad ratione necessitatibus quod sed praesentium deserunt cumque nobis alias modi odit voluptatem delectus rerum! Reiciendis impedit eos amet adipisci, ratione ex quos eaque provident et nam, aliquid, totam illum? Nisi, quia.</p>
        <p class="f-sec">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, magnam accusamus vero quasi non vel eligendi rem odit et suscipit? Quam consequatur reiciendis dolorum facilis, ab eum laborum at. Expedita placeat, veritatis beatae facere corrupti veniam. Similique, labore enim beatae excepturi quidem voluptatem voluptatum aspernatur doloribus autem deserunt rem tenetur fugiat deleniti sit praesentium, repellat magnam! Ducimus reiciendis amet omnis totam odit. Nostrum fugit placeat laboriosam impedit, nobis, modi eius repudiandae porro veritatis maiores voluptas iste odit ut? Eligendi, dignissimos soluta voluptatem illum harum blanditiis quae earum asperiores iure animi officia eaque maxime veritatis numquam alias magni tenetur amet fugit aperiam impedit, fugiat vel dolorem sit. Doloribus porro maxime dolores suscipit in dolorem. Sapiente quam quis minus esse ducimus? Consequuntur quibusdam sequi iure quisquam accusamus, qui nam eligendi suscipit aliquam quidem minima ut possimus nulla reiciendis omnis molestiae. Quidem, tempora porro! Quam incidunt temporibus pariatur. Praesentium aspernatur voluptate quas ea iusto, perspiciatis vel? Tempora iure at culpa ipsam. Iure a, quis quaerat eum velit, dignissimos repellendus enim laudantium ad ratione necessitatibus quod sed praesentium deserunt cumque nobis alias modi odit voluptatem delectus rerum! Reiciendis impedit eos amet adipisci, ratione ex quos eaque provident et nam, aliquid, totam illum? Nisi, quia.</p>
      </aside>

      <figure class="">
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

  main {
    display: flex;
    flex-direction: column;

    @include breakpoint(md) {
      flex-direction: row;
      width: 100vw; height: 100vh;
    }
  }

  aside {
    background: #efefef;

    @include breakpoint(md) {
      width: 50%; height: 100%;
      overflow: scroll;
    }
  }

  header {
    width: 100%;
    hyphens: auto;
    overflow-wrap: break-word;
    word-wrap: break-word;
  }

  figure {
    @include breakpoint(md) {
      width: 50%;
    }
  }

  img {
    width: 100%;
    min-height: 100%; max-height: 100%;
    object-fit: cover;
  }
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