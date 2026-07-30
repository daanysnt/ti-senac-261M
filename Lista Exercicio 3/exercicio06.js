function checkTriangleType(side1, side2, side3){
    if (side1 === side2 && side2 === side3) {
        return "Equilateral"
    }
    if (side1 === side2 || side1 === side3 || side2 === side3) {
        return "Isosceles"
    }
    return "Scalene"
}

console.log(checkTriangleType(3, 3, 3))