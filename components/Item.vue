<template>
  <li>
    <div class="container">
      <nuxt-link to="/test">
        <button class="view">View</button>
      </nuxt-link>

      <!-- <img :src="image" alt=""> -->
    </div>
  </li>
</template>


<style lang="scss" scoped>
  @import '~/assets/style/grid.scss';

  li {
    position: relative;
    display: flex;
    flex-direction: column;
    margin: 3rem 0 0;
    width: 100%; height: 48rem;
    transition: all 400ms ease;
    transform-origin: center;
    /* overflow: hidden; */
    transition: all 400ms ease;

    @include breakpoint(mdl) { margin: 3rem 0 0; }
  }

  .container:hover {
    button {
      opacity: 1;
      transition: all 400ms ease 400ms;
    }
  }

  .container {
    position: relative;
    margin: 0 2.4rem;
    height: 100%;
    background: #fff;
  }

  img {
    position: relative;
    z-index: var(--z1);
    width: 100%; height: 100%;
    object-fit: cover;
    transition: all 400ms ease;
    will-change: transform;
  }

  /* button {
    position: absolute;
    right: 0; bottom: 2rem; left: 0;
    margin: 0 auto;
    padding: 1.6rem 0;
    width: 48%;
    background: papayawhip;
    opacity: 0;
    font-size: 1.2rem;
    font-weight: 600;
    text-transform: uppercase;
    transition: all 200ms ease;
    color: #fff;
  } */

  .view {
    position: absolute;
    z-index: var(--zmax);
    right: 0; bottom: 0rem; left: 0;
    margin: 0 auto;
    padding: 2rem;
    background: none;
    font-size: 1.2rem;
    font-weight: 600;
    text-transform: uppercase;
    color: #fff;
    mix-blend-mode: difference;
  }

</style>


<script>
  export default {
    props: [ 'count', 'image' ],
    mounted() {}
  }
</script>