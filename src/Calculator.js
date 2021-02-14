//this line loads the library
const MathOperations = require('./Operations/MathOperations');

class Calculator{

 Sum(a,b){
    return MathOperations.Sum(a,b);
}
}
module.exports = Calculator;
