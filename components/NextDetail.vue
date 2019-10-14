<!-- layout -->
<template>
  <h3 class="f-prim fs-sm uc">


      Next: {{ title }}
      <svg width="23" height="20">
        <path d="M13.874.203l8.84 8.84a.694.694 0 010 .981l-8.84 8.84a.694.694 0 11-.982-.983l7.654-7.654H.694a.694.694 0 010-1.388l19.851-.001-7.653-7.653a.694.694 0 01.982-.982z" fill="#292124"/>
      </svg>


  </h3>
</template>


<!-- style -->
<style lang='scss' scoped>
  @import '../style/grid.scss';
  @import '../style/reset.scss';
  @import '../style/util.scss';
  @import '../style/type.scss';

  h3 {
    padding: 1rem 0;
    opacity: .5;
    transition: var(--ease);
    @include breakpoint(md)  { max-width: 92%; }
    @include breakpoint(mdl) { max-width: inherit; }
  }

  @media (pointer: fine) {
    h3:hover { opacity: 1; }
    h3:hover svg { transform: translate(3.2rem, .5rem); }
  }

  svg {
    transform: translate(1rem, .5rem);
    transition: var(--ease);
  }

</style>


<!-- logic -->
<script>
  export default {
    props: [ 'title', ]
  }
</script>