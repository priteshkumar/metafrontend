/*
The Animal class's constructor will have two properties: color and energy 

2. The Animal class's prototype will have three methods: isActive(), sleep(), and getColor(). 

3. The isActive() method, whenever run, will lower the value of energy until it hits 0. 
The isActive() method will also report the updated value of energy.
 If energy is at zero, the animal object will immediately go to sleep, 
 by invoking the sleep() method based on the said condition. 

4. The getColor() method will just console log the value in the color property. 


5. The Cat class will inherit from Animal, with the additional sound, canJumpHigh, 
and canClimbTrees properties specific to the Cat class. It will also have its own makeSound() method. 

6. The Bird class will also inherit from Animal, but its own specific properties
 will be quite different from Cat. 
 Namely, the Bird class will have the sound and the canFly properties, and the makeSound method too. 

*/
console.log("hello oop.js");
class Animal {
  constructor(color = "yellow", energy = 100) {
    this.color = color;
    this.energy = energy;
  }
  isActive() {
    if (this.energy > 0) {
      this.energy -= 20;
      console.log("Energy is decreasing, currently at:", this.energy);
    } else if (this.energy == 0) {
      this.sleep();
    }
  }
  sleep() {
    this.energy += 20;
    console.log("Energy is increasing, currently at:", this.energy);
  }
  getColor() {
    console.log(this.color);
  }
}

class Cat extends Animal {
  constructor(
    color,
    energy,
    sound = "purr",
    canJumpHigh = true,
    canClimbTrees = true
  ) {
    super(color, energy);
    this.sound = sound;
    this.canJumpHigh = canJumpHigh;
    this.canClimbTrees = canClimbTrees;
  }
  makeSound() {
    console.log(this.sound);
  }
}

class Bird extends Animal {
  constructor(color, energy, sound = "chirp", canFly = true) {
    super(color, energy);
    this.sound = sound;
    this.canFly = canFly;
  }
  makeSound() {
    console.log(this.sound);
  }
}

/*

 The HouseCat class will extend the Cat class, and 
 it will have its own houseCatSound as its special property. 
 Additionally, it will override the makeSound() method from the Cat class,
  but it will do so in an interesting way. If the makeSound() method, on invocation,
   receives a single option argument - set to true, then it will 
   run super.makeSound() - in other words, run the code 
   from the parent class (Cat) with the addition of running the console.log(this.houseCatSound). 
   Effectively, this means that the makeSound() method on the HouseCat class's instance
  object will have two separate behaviors, based on whether we pass it true or false. 

*/

class HouseCat extends Cat {
  constructor(
    color,
    energy,
    sound,
    canJumpHigh,
    canClimbTrees,
    houseCatSound = "meow"
  ) {
    super(color, energy, sound, canJumpHigh, canClimbTrees);
    this.houseCatSound = houseCatSound;
  }
  makeSound(option) {
    if (option) {
      super.makeSound();
    }
    console.log(this.houseCatSound);
  }
}

var leo = new HouseCat();
leo.makeSound(true);
leo.makeSound(false);
