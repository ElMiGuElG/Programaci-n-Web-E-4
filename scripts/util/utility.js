class Utility {
  createElement = (name) => {
    return document.createElement(name);
  }

  css = (element, style) => {
    for (const property in style)
      element.style[property] = style[property];
  }

  changeCurrentPokemon(value) {
    let infoSection = document.getElementById('info');
    console.log('Utility: infoSection', infoSection.childNodes);
    if (!infoSection.childNodes.length) return;
    
    infoSection.removeChild(infoSection.childNodes[1]);
    infoSection.removeChild(infoSection.childNodes[0]);
    // let info = setInfo(value);
    // const info = setInfo(value);
    // infoSection.appendChild(info);
  }
}
export { Utility };