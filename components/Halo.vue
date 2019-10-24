<!-- layout -->
<template>
  <div class="halo"/>
</template>


<!-- style -->
<style lang="scss" scoped>
  @import '../style/grid.scss';

  .halo {
    position: absolute;
    top: 0; left: 0;
    z-index: var(--zmin);
    pointer-events: none;
    border: 1px solid var(--gold);
    background: none;
    will-change: transform;
    animation: enter 2000ms ease 1000ms forwards;
  }

  @keyframes enter {
    from { z-index: var(--zmin); }
    to   { z-index: var(--zmax); }
  }

  .scale-down { border: 2px solid var(--gold); }

  @media (pointer: coarse) { .halo { display: none; }}
  @media (pointer: fine) { .halo { display: inherit; }}

</style>


<script>
  export default {
    mounted() {
      const halo  = document.querySelector('.halo'),
            unit  = 48

      halo.style.width = `${unit}px`
      halo.style.height = `${unit}px`
      halo.style.borderRadius = `${unit}px`
      halo.style.marginLeft = `calc( ${unit}px / -2 )`
      halo.style.marginTop = `calc( ${unit}px / -1.9 )`

      let mouseX =  0,
          mouseY =  0,
          haloX  =  0,
          haloY  =  0,
          speed  = .1

      let track = () => {
        halo.style.transform = `translate(${haloX}px, ${haloY}px)`

        let distX = mouseX - haloX
        let distY = mouseY - haloY

        haloX = haloX + (distX * speed)
        haloY = haloY + (distY * speed)

        requestAnimationFrame(track)
      }

      track()

      document.addEventListener('mousemove', (e) => {
        mouseX = e.pageX
        mouseY = e.pageY
      })

      document.addEventListener('mousedown', () => {
        halo.classList.add('scale-down')
      })

      document.addEventListener('mouseup', () => {
        halo.classList.remove('scale-down')
      })
    }
  }
</script>