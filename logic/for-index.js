const staticLogic = () => {

}

const leaveLogic = () => {
  // constance wu's
  const mq = window.matchMedia( '(min-width: 700px)' )
  const cover = document.querySelector('.cover')
  // styles
  cover.style.cssText = `
    transform: scale(1,1) translate(0,0);
    transition: all var(--animbase) var(--inout);
  `
  // for ≥ md
  if (mq.matches) {
    cover.style.cssText = `
      transform: scaleX(1);
      transition: all var(--animbase) var(--inout);
    `
  }
}

// exports
export { staticLogic, leaveLogic }