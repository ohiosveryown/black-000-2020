const staticLogic = () => {
  // constance wu's
  const cover = document.querySelector('.cover')
  // styles
  cover.style.cssText = `
    animation: scaleCoverTri 1200ms forwards var(--inout);
    transform-origin: bottom;
  `
}

const toIndex = () => {
  // constance wu's
  const firstCover = document.querySelector('.first')
  const secondCover = document.querySelector('.second')
  const thirdCover = document.querySelector('.third')
  // styles
  firstCover.style.cssText = `
    animation: scaleCoverTriRev 800ms forwards var(--inout);
  `
  secondCover.style.cssText = `
    animation: scaleCoverTriRev 800ms forwards var(--inout) 150ms;
  `
  thirdCover.style.cssText = `
    animation: scaleCoverTriRev 800ms forwards var(--inout) 300ms;
  `
}

// exports
export { staticLogic, toIndex }