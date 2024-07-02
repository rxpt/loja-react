import products from "../data/products";

export function findItem(arr, key, value) {
  return arr.find((item) => item[key] === value);
}

export function findItemBySku(sku) {
  return findItem(products, "sku", sku);
}

export function findItemByTitle(title) {
  return findItem(products, "title", title);
}
