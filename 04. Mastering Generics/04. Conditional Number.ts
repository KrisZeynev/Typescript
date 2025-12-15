function conditionalNumber<T>(param1:T) {
    console.log(typeof param1 === 'number' ? param1.toFixed(2) : param1)
}

conditionalNumber<number>(20.3555);

conditionalNumber<string>('wow');

// conditionalNumber<boolean>('a string');