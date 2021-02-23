

class Squares {
    //constructor with single number parameter and operation
    constructor(a, op) {
        this.a = a;
        this.op = op;
    }
    //Get results method to return results
    GetResults() {
        return this.op(this.a)
    }

}

module.exports = Squares;