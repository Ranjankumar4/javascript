const products = [
    { name: "Laptop", price: 120000 },
    { name: "Phone", price: 70000 },
    { name: "Laptop Bag", price: 20000 },
    { name: "Watch", price: 20000 },
    { name: "Mobile charger", price: 1500 },
];

let maxproduct = { name: "", price: 0 };
let minproduct = { name: "", price: Number.MAX_VALUE };

for (let product of products) {
    if (product.price > maxproduct.price) {
        maxproduct = product;
    }

    if (product.price < minproduct.price) {
        minproduct = product;
    }
}

console.log(
    `The product with maximum price is ${maxproduct.name} which is priced at Rs.${maxproduct.price}`
);
console.log(
    `The product with minimum price is ${minproduct.name} which is priced at Rs.${minproduct.price}`
);
