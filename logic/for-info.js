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
export { toIndex }