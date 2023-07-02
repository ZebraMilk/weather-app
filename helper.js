// element creator helper function
export default function createElement(
  type,
  classArray,
  newInnerText,
  attributeObject
) {
  // check for each part of the array
  const newElement = document.createElement(type);
  classArray.forEach((cls) => newElement.classList.add(cls));
  newElement.innerText = newInnerText;
  for (const attr in attributeObject) {
    newElement.setAttribute(attr, attributeObject[attr]);
  }
  return newElement;
}
