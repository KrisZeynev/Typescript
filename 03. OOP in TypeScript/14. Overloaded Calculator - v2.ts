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
    const numbers = [num1, num2, num3, num4].filter((x) => x !== undefined);
    switch (operation) {
      case "power":
        return Math.pow(num1, num2);

      case "log":
        return Math.log(num1) / Math.log(num2);

      case "add":
        return numbers.reduce((a, c) => a + c, 0);
      case "subtract":
        return numbers.reduce((a, c) => a - c);
      case "multiply":
        return numbers.reduce((a, c) => a * c, 1);
      case "divide":
        return numbers.reduce((a, c) => a / c);
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
