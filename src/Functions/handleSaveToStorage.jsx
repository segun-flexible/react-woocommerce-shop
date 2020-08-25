export function handleSaveToStorage(items) {
  localStorage.setItem("carts", JSON.stringify(items));
}
