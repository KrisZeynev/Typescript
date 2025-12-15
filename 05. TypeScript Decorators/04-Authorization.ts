// class MockAuthrizationService {
//   constructor(
//     private userRole: "Guest" | "PersonalDataAdministrator" | "Admin"
//   ) {}

//   canViewData(property: string) {
//     switch (this.userRole) {
//       case "Admin":
//         return true;

//       case "PersonalDataAdministrator":
//         return ["name", "age"].includes(property);

//       default:
//         return false;
//     }
//   }
// }

// class User {
//   constructor(
//     private name: string,
//     private age: number,
//     private creditCardNumber: string
//   ) {}

//   @authorize
//   static get name(): string {
//     return this.name;
//   }

//   @authorize
//   static get age(): number {
//     return this.age;
//   }

//   @authorize
//   static get creditCardNumber(): string {
//     return this.creditCardNumber;
//   }
// }

// function authorize(userService: MockAuthrizationService) {
//   return function (
//     target: Object,
//     key: string,
//     descriptor: PropertyDescriptor
//   ) {
//     //
//     console.log(descriptor.get);
//     // return descriptor;
//   };
// }
