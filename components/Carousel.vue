<!-- layout -->
<template>
  <article>


    <!-- <figure><img :src="post.assets.img" alt=""></figure>
    <saber-link :to='post.permalink'>{{ post.title }}</saber-link> -->
    <figure><img :src="img" alt=""></figure>
    <saber-link :to='link'>
      <button>View</button>
    </saber-link>


  </article>
</template>


<!-- style -->
<style lang='scss' scoped>
  @import '../style/grid.scss';
  @import '../style/reset.scss';
  @import '../style/util.scss';
  @import '../style/type.scss';



</style>


<!-- logic -->
<script>
  export default {
    props: [ 'img', 'link'  ]
  }
</script>