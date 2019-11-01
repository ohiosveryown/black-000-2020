const staticLogic = () => {

}

const leaveLogic = () => {
  // constance wu's
  const mq = window.matchMedia( '(min-width: 700px)' )
  const cover = document.querySelector('.cover')
  // styles
  if (mq.matches) {
    cover.style.cssText = `
      transform: scaleX(1);
      transition: all var(--animbase) var(--inout);
    `
  }
}

// exports
export { staticLogic, leaveLogic }