<!-- layout -->
<template>
  <footer class="footer">

      <h2 class="cloud f-prim uc">drag</h2>

      <svg class="button--next" width="23" height="20">
        <path d="M13.874.203l8.84 8.84a.694.694 0 010 .981l-8.84 8.84a.694.694 0 11-.982-.983l7.654-7.654H.694a.694.694 0 010-1.388l19.851-.001-7.653-7.653a.694.694 0 01.982-.982z" fill="#fff"/>
      </svg>


  </footer>
</template>


<!-- style -->
<style lang='scss' scoped>
  @import '../style/grid.scss';
  @import '../style/reset.scss';
  @import '../style/util.scss';
  @import '../style/type.scss';

  .footer {
    position: absolute;
    right: 0; left: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @include breakpoint(md) {
      bottom: 2rem;
      padding: 0 2rem;
    }
  }

  h2 { font-size: 1rem; }

  svg {
    cursor: pointer;
    transform: scale(.8);
  }

  @media (max-height: 48rem) {
    .footer {
      display: none;
    }
  }

</style>


<!-- logic -->
<script>
  export default {

  }
</script>