function shouldApplyDiscountCode (minSpend) {
    let amountSpend = minSpend/100;
    return amountSpend >= 30;
}

module.exports = shouldApplyDiscountCode; 