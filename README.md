

[![Build Status](https://travis-ci.com/GabrielaSaboia/calculator_js.svg?branch=master)](https://travis-ci.com/GabrielaSaboia/calculator_js.svg?branch=master)

[![Coverage Status](https://coveralls.io/repos/github/GabrielaSaboia/calculator_js/badge.svg?branch=master)](https://coveralls.io/github/GabrielaSaboia/calculator_js?branch=master)

Step 1: Clone Repo Step 2: run npm

_**Explain OOP principles using JavaScript_**

While object oriented programming (OOP) can be a mouth full, and 
increase in complexity rapidly. A basic idea to describe it
is to think of OOP as a way computer scientists have 
found to represent physical things. An _Object_ is a 
representation, or a model, of real world stuff in a computer program.
Ultimately providing a simple way to create functionality that
otherwise might be impossible to use. (MDN Contributors, 2021).



**The Four Principles of OOP**


**Encapsulation**

Encapsulation is the bundling of data, and the methods that 
have access to, and modify it. Through encapsulation, it is possible hide an 
objects state (data) and restrict outside changes. (Elliot, 2019)

An example of encapsulation is the definition of an object through 
a class in JavaScript:

````
class Calculation {
//the constructor is the first method called after instantiation
// and usually sets the properties of the object, in other words stores
//the values of each private variable

constructor(a, b, op){
//The "this" keyword is an internal reference of the object to
// access its methods and properties
this.a = a;
this.b = b;
this.op = op;
}
//get results is an example of a method that has access to the 
//data stored during instantiation
GetResults() {
return this.op(this.a, this.b)
}
}

module.exports = Calculation;
````

**Abstraction**

Abstraction offers a high level view of the object instead of the 
whole source code. It makes the public methods available with enough 
information to apply them. An example for abstraction can be 
encountered in any electronic device, where the buttons and other 
details offer a simplistic version of how to operate the device, 
while the underlying logic and circuitry connect the high level, and 
the lower level architecture to produce desired outcomes.


**Inheritance**

Inheritance mimics a parent child relationship in that it transfers
previously defined code into the child class. Thus reducing the amount
of code being written. The child class inherits all fields and methods
of the parent class, in addition to implementing it's own.

In the following class definition, Calculation inherits Squares'
constructor and initializes the properties a, and op from the
Squares class. While also creating the property b to store a 
second value in the calculation.

```const Squares = require('./Squares');

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
```

**Polymorphism**

Polymorphism offers an opportunity to redefine functions within a class,
or within a child class. All while offering an intuitiveness to the 
program so it knows which form of the method to utilize when it's called.

In some sense of the word, polymorphism is the ability to take on
different forms. In Javascript there are three polymorphism
types of polymorphism.

1. Adhoc Polymorphism
2. Parametric Polymorphism
3. Subtype Polymorphism

**Adhoc Polymorphism**

Adhoc polymorphism means to change something without 
planning, or on the spot. It also has three subcategories:

1.Operator overloading
Means to be able to do more than one thing. 
An example is the plus sign + that is used with integers 
and to concatenate strings.

The following code snippet taken from Zell 
illustrates the afford mentioned.

```// Adding numbers
1 + 1 // Results in 2

// Adding Strings
'Hello' + ' ' + 'World' // Results in 'Hello World'

// Adding Numbers to Strings
1 + 'up' // Results in '1up'```


Another example:

![img.png](img.png)
(Zell, 2020).

When Concatenating the result's type may change 

Numbe + Number = Number
Number + String = String

The + operator allows you to change the value's 
type.


2.Function overloading

Some languages implement function overloading by creating
two or more functions with the same name, but differentiate 
each by the parameter types passed to them.

In JavaScript, we cannot implement two functions with the 
same name, therefore, we use one function that delivers different 
results depending on the arguments received.

The following example illustrates this concept:


```function volumecuboid (length, breadth, height) {
return length * breadth * height
}

function volumecube (length) {
return volumecuboid(length, length, length)
}


// overloading happens here
function calculatevolume (...args) {
if (args.length === 3) return volumecuboid(...args)
return volumecube(args[0])
}```


Another example is implementing a function that returns different objects:


`function createShape (size, shape) {
    if (shape === 'triangle') return new Triangle(/* ... */)
    if (shape === 'rectangle') return new Rectangle(/* ... */)
    if (shape === 'square') return new Square(/* ... */)
}`


3.Coercion Polymorphism

JavaScript has Type coercion, where it converts from one type to another.

An example are if statements where expressions either are 
turned into true or false:

`const string = 'hello'
if (string) {
console.log(string)
}`


**Subtype Polymorphism**

Polymorphism that involves creating derivative objects from a 
parent object. In other words, inheritance. Where the child 
class will have access to the parent's properties and methods, 
while also having the ability to override the parent method to 
produce a new value or return properties stored in the parent 
class.

```const Squares = require('./Squares');

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

module.exports = Calculation;```

Polymorphism section based on (zell, 2019).



**SOLID**

SOLID principles are the basics of OOP. 
The following are a brief explanation of what they are.


**1.Single Responsibility**

Single responsibility refers to the notion that each one of your functions 
should only do one thing. The smaller the piece of code you can create to 
do a single thing the better.

Even if you have three small functions that you call at the same time
you should call them in a wrapping function, and name it according to what
is being done to code properly.



**2.Open-Closed Principle**

Open-Closed Principle refers to coding correctly and sufficiently that 
it won't be necessary to go back and change classes that are finalized 
in that it is open for extension but closed for modification. 

Meaning the methods handle exceptions, they each perform as intended 
and there is not need to modify them. But written well enough that 
these functions can be extended without having to go back and look 
at hat the method does.


**3.Liskov Substitution Principle**

The parent class that is extended should not be modified to fit a 
child's requirements. In other words, a parent class should be able to 
fit within it's child implementation without modification. Otherwise, 
the Open-Closed principle will not have been implemented correctly.


Class Squares takes a value and an operation as
parameters, and has a get method that returns 
its values.


```class Squares {
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

module.exports = Squares;```


Class calculation extends Squares. Calculation
takes in the Squares constructor passing 
the previously defined properties a, and op
and adds a third property b. We do not have to 
go back to Squares to define b, Squares already
has everything it needs to operate, and it simply 
extends making calculations functional with it's
added property.


``const Squares = require('./Squares');

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

module.exports = Calculation;``


A child property can add ITS necessary requirements
but in order to accomplish that. Well written code
will not need to be modified in the parent class.


**4.Interface Segregation**

Interface segregation states that we shouldn't impose
the implementation of something that is not needed.





**5.dependency Inversion Principle**

Means we shouldn't have to know any implementation
details of our dependencies. If we do, we have violated
the principle.


Sources

Elliot, E. (2019). Encapsulation in JavaScript. JavaScript Scene. Retrieved from https://medium.com/javascript-scene/encapsulation-in-javascript-26be60e325b4
MDN Contributors. (2021). Object-oriented JavaScript for beginners. MDN Web Docs. Retrieved from https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object-oriented_JS
Zell. (2020). Polymorphism in JavaScript. Zellwk. Retrieved from https://zellwk.com/blog/polymorphism-javascript/