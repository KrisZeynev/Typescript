function convertArrays(arr: string[]): [string, number] {
    const text: string = arr.join('');
    return [text, text.length]
}
console.log(convertArrays(['How', 'are', 'you?']))