//this line loads the library
const Calculation = require('./models/Calculation');
const Sum = require('./Operations/Addition');
const Difference = require('./Operations/Subtraction');
const Product = require('./Operations/Product');
const Quotient = require('./Operations/Quotient');
const Square = require('./Operations/Square');
const SquareRoot = require('./Operations/SquareRoot');


class Calculator{
    static Calculations = []
    //Static methods can be called without instantiating
    // and are good for actions
    static Sum(a,b){
     //this is how you create a new object and
     // this is good for data and actions
     let calculation = new Calculation(a,b,Sum);
     Calculator.Calculations.push(calculation);
    return calculation.GetResults();
    }
    static Difference(a,b) {
        //this is how you create a new object and
        // this is good for data and actions
        let calculation = new Calculation(a,b,Difference);
        Calculator.Calculations.push(calculation);
        return calculation.GetResults();
    }
    static Product(a,b) {
        //this is how you create a new object and
        // this is good for data and actions
        let calculation = new Calculation(a,b,Product);
        Calculator.Calculations.push(calculation);
        return calculation.GetResults();
    }
    static Quotient(a,b){
        //this is how you create a new object and
        // this is good for data and actions
        let calculation = new Calculation(a,b,Quotient);
        Calculator.Calculations.push(calculation);
        return calculation.GetResults();
    }

    static Square(a){
        let calculation = new Calculation(a, b, Square);
        Calculator.Calculation.push(calculation);
        return calculation.GetResults();
    }
}
module.exports = Calculator;
