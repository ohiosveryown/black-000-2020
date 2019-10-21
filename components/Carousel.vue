<!-- layout -->
<template>
  <article>

    <figure>
      <img :src="img" alt="">
      <saber-link :to='link'>
        <ButtonPrimary
          label = 'view'
          :style = '{ background: background, label: label }'
        />
      </saber-link>

      <figcaption class="mt-2 mb-2">
        <span class="f-prim fs-xs uc">{{ first_name }}</span>
        <span class="mb-1 f-prim fs-xs uc">{{ last_name }}</span>
        <span class="f-sec fs-sm">{{ id }}</span>
      </figcaption>
    </figure>




  </article>
</template>


<!-- style -->
<style lang='scss' scoped>
  @import '../style/grid.scss';
  @import '../style/reset.scss';
  @import '../style/util.scss';
  @import '../style/type.scss';

  @media (pointer: fine) { button { opacity: 0; }}
  @media (pointer: coarse) { button { opacity: 1; }}

  figure {
    position: relative;
    overflow: hidden;
    &:hover { button { opacity: 1; }}
  }

  img {
    transition: var(--ease);
    width: 100%; height: 68vh;
    object-fit: cover;
    @include breakpoint(md) { height: 76vh; }
  }

  figcaption { margin-left: 2rem; }
  span { display: block; }

  button {
    position: absolute;
    right: 0; bottom: 11.2rem; left: 0;
    width: 44%;
    @include breakpoint(md) { bottom: 10.4rem; }
  }

</style>


<!-- logic -->
<script>
  import ButtonPrimary from './ButtonPrimary'

  export default {
    components: { ButtonPrimary },

    props: {
      background: {
        type: String,
        default: 'var(--cloud)'
      },

      label: {
        type: String,
        default: 'var(--darkest)'
      },

      img: {},
      link: {},
      first_name: {},
      last_name: {},
      id: {},
    },

  }
</script>}