const Squares = require('./Squares');

class Calculation extends Squares{
    //the constructor is the first method called after instantiation
    // and usually sets the properties of the object
    constructor(a, b, op){
        //"this" is the internal reference of the object to
        // access its methods and properties
        super(a,op);
        this.b = b;
    }
    //get results is a method so that it can return back the results
    // of the calculation
    GetResults() {
        return this.op(this.a, this.b)
    }
}

module.exports = Calculation;