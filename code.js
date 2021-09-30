

/*function adjustElementScale(element, fixedWidth, fixedHeight) {
  const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)
  const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0)
  let { width, height } = element.getBoundingClientRect();

  if ((vw/vh)+0.03 < (fixedWidth / fixedHeight)) {
    element.style.width = vw*(width/fixedWidth)+"px";
    element.style.height = vh*(height/fixedHeight)+"px";
    return element;
  }
  const [scaleX, scaleY] = [vw/fixedWidth, vh/fixedHeight];
  element.style.transform = `translate(${(scaleX - 1)*50}%,${(scaleY - 1)*50}%)
  scale(${scaleY},${scaleX})`;
  return element;
}

adjustElementScale(document.querySelector(".father"), 1366, 653);
*/

fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(json => console.log(json))