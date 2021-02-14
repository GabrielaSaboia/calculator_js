//Triple A testing = AAA
//Arrange / We are loading the calculator
const Sum = require('../src/Calculator');


test('Calculator adding two numbers', () =>{

    //Act / We are running the code
    let result = Sum(1,2);

    //Assert / We are asserting the result shopuld be 3
    expect(result).toBe(3);
});