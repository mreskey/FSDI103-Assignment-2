productName = prompt("Product name?: ");
productQuant = Number( prompt("Product quantity?: ") );
productPrice = Number( prompt("Product price?: ") );
taxRate = Number( prompt("Tax rate (%)?: ") );
priceAfterTax = (productPrice * productQuant * (1 + taxRate/100)).toFixed(2)

console.log(`${productQuant}x ${productName} at a price of ${productPrice} cost ${priceAfterTax} after taxes.`);