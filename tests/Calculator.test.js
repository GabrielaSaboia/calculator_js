const Calculator = require('../src/Calculator');

test('Calculator adding two numbers', () =>{
    //assigning the results of the calc sum method to an
    // object, calculator returns an object
    let result = Calculator.Sum(1,2);
   //expect is used to test if the results are correct
    expect(result).toBe(3);
});
test('Calculator difference between two numbers', () => {
    let result = Calculator.Difference(1,2);
    //expect is used to test if the result is correct
    expect(result).toBe(-1);
});
test('Calculator product of two numbers', ()=>{
    let result = Calculator.Product(1,2);

    expect(result).toBe(2);
});
test('Calculator quotient of two numbers', () => {
    let result = Calculator.Quotient(1,2);

    expect(result).toBe(.5);
});
test('Calculator Square of a number', () =>{
    let result = Calculator.Square(2);
    expect(result).toBe(4);
});
test('Calculator SquareRoot of a number', ()=>{
    let result = Calculator.SquareRoot(4);
    expect(result).toBe(2);
});
test('Calculator adding to calculations', ()=>{
    let result = Calculator.Quotient(1,2);
    let calculations = Calculator.Calculations
    calculations.forEach(function (calc) {
        console.log(calc.GetResults())
    });
});