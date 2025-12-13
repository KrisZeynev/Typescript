function optionalMultiplier(
  param1?: string | number,
  param2?: string | number,
  param3?: string | number
) {
  let result: number = 1;
  if ((param1 && typeof param1 === "string") || typeof param1 === "number") {
    result *= Number(param1);
  }
  if ((param2 && typeof param2 === "string") || typeof param2 === "number") {
    result *= Number(param2);
  }
  if ((param3 && typeof param3 === "string") || typeof param3 === "number") {
    result *= Number(param3);
  }
  return result
}
// console.log(optionalMultiplier('3', 5, '10'))
// console.log(optionalMultiplier('2','2'))
// console.log(optionalMultiplier(undefined, 2, 3))
// console.log(optionalMultiplier(7, undefined, '2'))
console.log(optionalMultiplier())