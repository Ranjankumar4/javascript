const productdetails = {
    name: "Apple 2020 macbook air laptop",
    price: 82000,
    color: "gray",
    HardDisk:"256 GB"
};
console.log("Below are the product details");

for (let keys of Object.keys(productdetails)){
    console.log(`${keys} : ${productdetails[keys]}`);
}
