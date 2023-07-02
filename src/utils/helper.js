// element creator helper function
export default function createElement(
  type,
  classArray,
  attributeObject,
  newInnerText = ''
) {
  // check for each part of the array
  const newElement = document.createElement(type);
  classArray.forEach((cls) => newElement.classList.add(cls));
  for (const attr in attributeObject) {
    newElement.setAttribute(attr, attributeObject[attr]);
  }
  newElement.innerText = newInnerText;
  return newElement;
}
