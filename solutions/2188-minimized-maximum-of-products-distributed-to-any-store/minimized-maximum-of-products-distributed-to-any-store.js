var minimizedMaximum = function(storeCount, productQuantities) {
    const maxQuantity = Math.max(...productQuantities);
    let left = 1;
    let right = maxQuantity;
    let result = 0;
    
    while (left <= right) {
        const mid = left + Math.floor((right - left) / 2);
        if (canDistributeProducts(mid, storeCount, productQuantities)) {
            result = mid;
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
    
    return result;
};

function canDistributeProducts(maxProductsPerStore, storeCount, quantities) {
    let requiredStores = 0;
    
    for (const quantity of quantities) {
        requiredStores += Math.ceil(quantity / maxProductsPerStore);
    }
    
    return requiredStores <= storeCount;
}