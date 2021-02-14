class Calculation {
    //the constructor is the first method called after instantiation
    // and usually sets the properties of the object
    constructor(a, b, op){
        //"this" is the internal reference of the object to
        // access its methods and properties
        this.a = a;
        this.b = b;
        this.op = op;
    }
    //get results is a method so that it can return back the results
    // of the calculation
    GetResults() {
        return this.op(this.a, this.b)
    }
}

module.exports = Calculation;