const staticLogic = () => {

}

const leaveLogic = () => {
  const cover = document.querySelector('.cover')

  cover.style.cssText = `
    transform: scaleX(1);
    transition: all var(--animbase) var(--inout);
  `
}

// exports
export { staticLogic, leaveLogic }