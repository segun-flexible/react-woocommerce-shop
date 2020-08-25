export function handleRemoveFromCart(list, id, action) {
  console.log(list, id, action);
  return action(list, id);
}
