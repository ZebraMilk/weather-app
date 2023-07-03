// element creator helper function
export default function createElement(
  type,
  classArray = [],
  attributeObject = {},
  newInnerText = ''
) {
  // since the first arg is required, we can check the type of the other args
  // array will be classes
  // obj will be attributes
  // another string will be the innerText
  // But this is overkill for now.
  const newElement = document.createElement(type);
  classArray.forEach((cls) => newElement.classList.add(cls));
  for (const attr in attributeObject) {
    newElement.setAttribute(attr, attributeObject[attr]);
  }
  newElement.innerText = newInnerText;
  return newElement;
}
