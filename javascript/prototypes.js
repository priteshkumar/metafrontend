//setting prototype
/*
The Object.create() method creates a new object and 
allows you to specify an object that will be used as the new object's prototype.
*/
const personPrototype = {
  greet() {
    console.log("hello!");
  },
};

const carl = Object.create(personPrototype);
carl.greet(); // hello!

/*
Using a constructor
In JavaScript, all functions have a property named prototype.
 When you call a function as a constructor, this property is set as
  the prototype of the newly constructed object (by convention, in the property named __proto__).
So if we set the prototype of a constructor, 
we can ensure that all objects created with that constructor are given that prototype

  */
const personPrototype = {
  greet() {
    console.log(`hello, my name is ${this.name}!`);
  },
};

function Person(name) {
  this.name = name;
}

Object.assign(Person.prototype, personPrototype);
// or
// Person.prototype.greet = personPrototype.greet;
