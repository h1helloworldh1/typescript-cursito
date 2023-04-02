"use strict";
function calculate(a, b) {
    const add = a + b;
    const subtract = a - b;
    const multiply = a * b;
    const divide = a / b;
    return [add, subtract, multiply, divide];
}
const [add, subtract, multiply, divide] = calculate(1, 7);
console.log(calculate(1, 7));
//# sourceMappingURL=index.js.map