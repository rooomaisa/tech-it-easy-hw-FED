function calculateStockProducts(productArray) {
    let total = 1

    for (let i = 0; i < productArray.length; i++) {
        total = total + productArray[i].originalStock;
    }
    return total;
}

export default calculateStockProducts;