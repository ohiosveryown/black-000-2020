<!-- layout -->
<template>
  <div class="halo">

    <svg class="left" width="6" height="8"><path d="M.397 4.795L4.19 7.76a1.154 1.154 0 0 0 1.554-.132A.997.997 0 0 0 6 6.965v-5.93C6 .463 5.506 0 4.897 0c-.258 0-.508.085-.707.24L.397 3.205a.991.991 0 0 0-.141 1.458c.042.048.09.092.141.132zM1.103 4l3.794-2.965v5.93L1.103 4z"/></svg>
    <svg class="right" width="6" height="8"><path d="M.397 4.795L4.19 7.76a1.154 1.154 0 0 0 1.554-.132A.997.997 0 0 0 6 6.965v-5.93C6 .463 5.506 0 4.897 0c-.258 0-.508.085-.707.24L.397 3.205a.991.991 0 0 0-.141 1.458c.042.048.09.092.141.132zM1.103 4l3.794-2.965v5.93L1.103 4z"/></svg>

  </div>
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

  svg { fill: var(--gold); transition: all 400ms ease; }

  .left {
    position: absolute;
    top: 40%; left: .8rem;
  }

  .right {
    position: absolute;
    top: 40%; right: .8rem;
    transform: scaleX(-1);
  }

  .scale-down { border: 2px solid var(--gold); }
  .left-focus { transform: translateX(-2.4rem); }
  .right-focus { transform: scaleX(-1) translateX(-2.4rem); }

  @media (pointer: coarse) { .halo { display: none; }}
  @media (pointer: fine) { .halo { display: inherit; }}

</style>


<script>
  export default {
    mounted() {
      const ul    = document.querySelector('ul'),
            left  = document.querySelector('.left'),
            right = document.querySelector('.right'),
            halo  = document.querySelector('.halo'),
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

      ul.addEventListener('mousedown', () => {
        halo.classList.add('scale-down')
        left.classList.add('left-focus')
        right.classList.add('right-focus')
      })

      ul.addEventListener('mouseup', () => {
        halo.classList.remove('scale-down')
        left.classList.remove('left-focus')
        right.classList.remove('right-focus')
      })
    }
  }
</script>