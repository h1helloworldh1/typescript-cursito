// const json = JSON.parse("55");
// console.log(typeof json);

// let w: any = 1;
// w = "string"; // no error
// w = {
//     runANonExistentMethod: () => {
//         console.log("I think therefore I am");
//     }
// } as { runANonExistentMethod: () => void}

// if(typeof w === 'object' && w !== null) {
//     (w as { runANonExistentMethod: Function }).runANonExistentMethod();
// }
// const graph: [number, number] = [55.2, 41.3];
// const [x, y] = graph;
// console.log(graph);

function calculate(a: number, b: number) {
    const add = a + b;
    const subtract = a - b;
    const multiply = a * b;
    const divide = a / b;

    return [add, subtract, multiply, divide];
}
const [add, subtract, multiply, divide] = calculate(1, 7);
console.log(calculate(1, 7));