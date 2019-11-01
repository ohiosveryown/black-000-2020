const staticLogic = () => {
  // window height
  let vh = window.innerHeight * 0.01
  document.documentElement.style.setProperty('--vh', `${vh}px`)
  // for resize
  window.addEventListener('resize', () => {
    let vh = window.innerHeight * 0.01
    document.documentElement.style.setProperty('--vh', `${vh}px`)
  })
  // constance wu's
  const mq = window.matchMedia( '(min-width: 700px)' )
  const cover = document.querySelector('.cover')
  // styles
  if (mq.matches) {
    cover.style.cssText = `
      animation: scaleLeft var(--animbase) forwards var(--inout);
    `
  }
}


const toDetail = () => {
  // constance wu's
  const cover = document.querySelector('.cover')
  const asideContent = document.querySelector('.aside-content')
  // logic styling
  cover.style.cssText = `
    animation: detailLeave var(--animbase) forwards var(--inout);
  `
  asideContent.style.cssText = `
    animation: fadeOut 300ms forwards ease;
  `
}

// exports
export { staticLogic, toDetail }