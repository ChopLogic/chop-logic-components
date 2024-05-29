export function moveFocusOnElementById(id: string) {
  const element = document.getElementById(id);

  if (element) element.focus();
}
