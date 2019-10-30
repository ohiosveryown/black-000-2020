const staticLogic = () => {
  // window height
  let vh = window.innerHeight * 0.01
  document.documentElement.style.setProperty('--vh', `${vh}px`)
  // for resize
  window.addEventListener('resize', () => {
    let vh = window.innerHeight * 0.01
    document.documentElement.style.setProperty('--vh', `${vh}px`)
  })

  const cover = document.querySelector('.cover')

  cover.style.cssText = `
    animation: scaleLeft var(--animbase) forwards var(--inout);
  `
}

// exports
export { staticLogic, }