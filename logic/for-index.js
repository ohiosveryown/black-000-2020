const staticLogic = () => {
  // constance wu's
  const firstCover = document.querySelector('.first')
  const secondCover = document.querySelector('.second')
  const thirdCover = document.querySelector('.third')
  // styles
  firstCover.style.cssText = `
    animation: scaleCoverTri 1200ms forwards var(--inout);
  `
  secondCover.style.cssText = `
    animation: scaleCoverTri 1200ms forwards var(--inout) 150ms;
  `
  thirdCover.style.cssText = `
    animation: scaleCoverTri 1200ms forwards var(--inout) 300ms;
  `
}

const leaveLogic = () => {
  // constance wu's
  const mq = window.matchMedia( '(min-width: 700px)' )
  const cover = document.querySelector('.cover')
  // styles
  cover.style.cssText = `
    transform: scaleX(1);
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