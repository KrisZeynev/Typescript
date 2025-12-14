class Calculator {
  calculate(operation: "power" | "log", num1: number, num2: number): number;
  calculate(
    operation: "add" | "subtract" | "multiply" | "divide",
    num1: number,
    num2: number,
    num3?: number,
    num4?: number
  ): number;

  calculate(
    operation: "power" | "log" | "add" | "subtract" | "multiply" | "divide",
    num1: number,
    num2: number,
    num3?: number,
    num4?: number
  ): number {
    switch (operation) {
      case "power":
        return Math.pow(num1, num2);

      case "log":
        return Math.log(num1) / Math.log(num2);

      case "add":
        let addSum: number = num1 + num2;
        if (num3) {
          addSum += num3;
        }
        if (num4) {
          addSum += num4;
        }
        return addSum;

      case "subtract":
        let substSum: number = num1 - num2;
        if (num3) {
          substSum -= num3;
        }
        if (num4) {
          substSum -= num4;
        }
        return substSum;

      case "multiply":
        let multiplySum: number = num1 * num2;
        if (num3) {
          multiplySum *= num3;
        }
        if (num4) {
          multiplySum *= num4;
        }
        return multiplySum;

      case "divide":
        let divideSum: number = num1 / num2;
        if (num3) {
          divideSum /= num3;
        }
        if (num4) {
          divideSum /= num4;
        }
        return divideSum;
    }
  }
}

// 1
const calc = new Calculator();
console.log(calc.calculate("power", 2, 3)); // 8
console.log(calc.calculate("power", 4, 1 / 2)); // 2
console.log(calc.calculate("log", 8, 2)); // 3
console.log(calc.calculate("add", 10, 5)); // 15
console.log(calc.calculate("add", 10, 5, 3)); // 18
console.log(calc.calculate("subtract", 10, 5)); // 5
console.log(calc.calculate("multiply", 2, 3, 4)); // 24
console.log(calc.calculate("divide", 100, 5, 2, 2)); // 5

// 2
// const calc = new Calculator();
// console.log(calc.calculate('power', 2, 3, 2)); // Argument of type '"power"' is not assignable to parameter of type '"add" | "subtract" | "multiply" | "divide"'
// console.log(calc.calculate('add', 2)); // Expected 3-5 arguments, but got 2.
// console.log(calc.calculate('log', 2, 3, 4, 5)); // Argument of type '"log"' is not assignable to parameter of type '"add" | "subtract" | "multiply" | "divide"'.
// console.log(calc.calculate('multiply', 2, 3, 4, 5, 6)); // Expected 3-5 arguments, but got 6.
