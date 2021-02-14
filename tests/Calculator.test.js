const Calculator = require('../src/Calculator');
//Triple A testing = AAA
//Arrange / We are loading the calculator

test('Calculator adding two numbers', () =>{
    let calculator = new Calculator();
    //Act / We are running the code
    let result = calculator.Sum( 1, 2);

    //Assert / We are asserting the result shopuld be 3
    expect(result).toBe(3);
});