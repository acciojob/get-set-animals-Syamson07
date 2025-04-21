// Base Animal class
class Animal {
  constructor(species) {
    this._species = species;
  }

  get species() {
    return this._species;
  }

  makeSound() {
    console.log(`The ${this._species} makes a sound`);
  }
}

// Cat class inheriting from Animal
class Cat extends Animal {
  purr() {
    console.log("purr");
  }
}

// Dog class inheriting from Animal
class Dog extends Animal {
  bark() {
    console.log("woof");
  }
}

// Example usage (you can remove this part if testing in Cypress)
const myCat = new Cat("Siamese");
myCat.makeSound(); // The Siamese makes a sound
myCat.purr();      // purr

const myDog = new Dog("Golden Retriever");
myDog.makeSound(); // The Golden Retriever makes a sound
myDog.bark();      // woof
