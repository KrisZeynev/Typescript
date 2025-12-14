interface Animal {
  makeSound(): string;
}

class Dog implements Animal {
  makeSound(): string {
    return `Wolf`;
  }
}

const dog = new Dog();

console.log(dog.makeSound());
