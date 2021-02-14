const Squares = require('../src/models/Squares');
const Square = require('../src/Operations/Square');
const SquareRoot = require('../src/Operations/SquareRoot');

test('Test of Squares instantiation', ()=>{
    let op = Square;
    let squares = new Squares(2, op);
    expect(squares.a).toBe(2);
    expect(squares.op).toBe(op);
});
test('Test Get Results for Square Function', () => {
    //Testing the get results function
    let op = Square;
    let squares = new Squares(2, op);
    expect(squares.GetResults()).toBe(4);
});
test('Test Get Results for SquareRoot Function', () => {
    //Testing the get results function
    let op = SquareRoot;
    let squares = new Squares(4, op);
    expect(squares.GetResults()).toBe(2);
});