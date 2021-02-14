const Calculator = require('../src/Calculator');
const Sum = require('../src/Operations/Addition');
const Difference = require('../src/Operations/Subtraction');
const Product = require('../src/Operations/Product');
const Quatient = require('../src/Operations/Quotient');
//Triple A testing = AAA
//Arrange / We are loading the calculator

test('Calculator adding two numbers', () =>{
    let calculator = new Calculator();
    //Act / We are running the code
    let calculation = calculator.Sum( 1, 2);

    //Assert / We are asserting the result shopuld be 3
    expect(calculation.a).toBe(1);
    expect(calculation.b).toBe(2);
    expect(calculation.op).toBe(op);
});