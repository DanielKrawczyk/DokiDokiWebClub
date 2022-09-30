export function GetID(ElementID: string): HTMLElement {
  return ( document.getElementById(ElementID) as HTMLElement )
}

export function GetClass(Element: string): HTMLElement {
  if (Element[0] !== ".") Element = "." + Element;
  return ( document.querySelector(Element) as HTMLElement )
}