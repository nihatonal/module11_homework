function calc(num) {
    return function calc(numTwo) {
        return num + numTwo;
    };
}

const result = calc(2)(4);
console.log(result);