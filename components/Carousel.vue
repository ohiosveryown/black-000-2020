<!-- layout -->
<template>
  <article>



    <figure>
      <img :src="img" alt="">
      <saber-link :to='link'>
        <ButtonPrimary
          label = 'view'
          :style = 'style'
        />
      </saber-link>
      <figcaption>{{ title }}</figcaption>
    </figure>




  </article>
</template>


<!-- style -->
<style lang='scss' scoped>
  @import '../style/grid.scss';
  @import '../style/reset.scss';
  @import '../style/util.scss';
  @import '../style/type.scss';

  figure {
    position: relative;
    overflow: hidden;
  }

  button {
    position: absolute;

    @include breakpoint(md) {
      right: 0; bottom: 4rem; left: 0;
      width: 44%;
    }
  }

  img {
    transition: var(--ease);
    @include breakpoint(md) {
      width: 100%; height: 76vh;
      object-fit: cover;
    }
  }

</style>


<!-- logic -->
<script>
  import ButtonPrimary from './ButtonPrimary'

  export default {
    components: { ButtonPrimary },
    props: [ 'img', 'link', 'title' ],

    computed: {
      style() {
        return this.style = `
          background: var(--cloud);
          color: var(--darkest);
        `
      }
    },
  }
</script>}