import calculateStockProducts from "./calculateStockProducts.js";
import calculateSoldProducts from "./calculateSoldProducts.js";

function calculateItemsNeedSell(productArray){
    const stockProducts = calculateStockProducts(productArray);
    const soldProducts = calculateSoldProducts(productArray);
    return stockProducts- soldProducts;
}

export default calculateItemsNeedSell;