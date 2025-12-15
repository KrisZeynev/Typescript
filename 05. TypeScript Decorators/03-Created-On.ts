// function addCreatedOn<T extends { new (...args: any[]): {} }>(constructor: T) {
//   return class extends constructor {
//     createdOn = new Date();
//   };
// }

// @addCreatedOn
// class User {
//   constructor(private name: string, private age: number) {}

//   displayUserInfo(): void {
//     console.log(`${this.name}, Age: ${this.age}`);
//   }
// }

// const user1 = new User("John Doe", 30);
// user1.displayUserInfo(); // John Doe, Age: 30
// console.log(user1); // User { name: 'John Doe', age: 30, createdOn: ... }
// console.log((user1 as any).createdOn.toString()); // Thu May 01 2025 13:22:52 GMT+0300 ...
