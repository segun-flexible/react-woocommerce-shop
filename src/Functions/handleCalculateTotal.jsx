import { handleSaveToStorage } from "./handleSaveToStorage";

export function handleCalculateTotal(allPrices) {
  let totalPrice = 0;
  let totalEach = 0;

  allPrices.forEach((itemPrice) => {
    totalEach += itemPrice.price * itemPrice.totalItem;
  });
  const total = (totalPrice += totalEach).toFixed(2);

  return total;
}

export function handleToTalItemDisplay(items) {
  let totalItems = 0;
  items.forEach((item) => (totalItems += item.totalItem));
  handleSaveToStorage(items);
  return totalItems;
}
