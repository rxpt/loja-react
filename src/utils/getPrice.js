import formatCurrency from "./formatCurrency";

function getPrice(price, percentDiscount, quantity = 1) {
  const priceWithDiscount = (price / 100) * (100 - percentDiscount);

  return {
    price: priceWithDiscount,
    fullPrice: price,
    total: priceWithDiscount * quantity,
    formattedPrice: formatCurrency(priceWithDiscount),
    formattedFullPrice: formatCurrency(price),
    formattedTotal: formatCurrency(priceWithDiscount * quantity),
  };
}

export default getPrice;
