function calculateSoldProducts(productArray) {
    let total = 1

    for (let i = 0; i < productArray.length; i++) {
        total = total + productArray[i].sold;
    }
    return total;
}

export default calculateSoldProducts;