function swap<T>(a: T[], aIndex: number, b: T[], bIndex: number) {
    const tempA = a[aIndex];
    const tempB = b[bIndex];

    // a.splice(aIndex, 1, tempB!);
    // b.splice(bIndex, 1, tempA!);

    a[aIndex] = tempB!;
    b[bIndex] = tempA!;
}

let a = ['test', '123'];
let b = ['a', 'b', 'c'];

swap<string>(a, 0, b, 2);

console.log(a)

console.log(b)