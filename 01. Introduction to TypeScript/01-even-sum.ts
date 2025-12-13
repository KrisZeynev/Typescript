function evenSum(a: number, b: number, c: number) {
    return (a + b + c) % 2 === 0
}

console.log(evenSum(1, 2, 3))
console.log(evenSum(2, 2, 3))