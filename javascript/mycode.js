var ob = {
  car: "audi",
  convertible: true,
  turnkey: function () {
    console.log(this.car, "is convertible", this.convertible);
  },
};
console.log(ob.turnkey());
document.getElementById("mast").innerHTML = "hello world";

//use new to create objects

function createCar(name) {
  this.name = name;
  this.turnkey = function () {
    console.log(this.name, "is a car");
  };
}

var car1 = new createCar("audi");
var car2 = new createCar("bmw");
car1.turnkey();
car2.turnkey();
