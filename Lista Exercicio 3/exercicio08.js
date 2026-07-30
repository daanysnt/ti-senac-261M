function calculateDiscount(quantity, unitPrice) {
    let total = quantity * unitPrice

    if (quantity >= 10) {
        total *= 0.8
    } else if (quantity >= 5) {
        total *= 0.9
    }

    return total
}

console.log(calculateDiscount(3, 50))
console.log(calculateDiscount(7, 50))
console.log(calculateDiscount(12, 50))