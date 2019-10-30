const staticLogic = () => {

}

const leaveLogic = () => {
  const cover = document.querySelector('.cover-darkest')

  cover.style.cssText = `
    transform: scaleX(1);
    background: green;
    transition: all 500ms ease;
  `
}

// exports
export { staticLogic, leaveLogic }