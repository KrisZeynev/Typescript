function log (target: Object, key: string, descriptor: PropertyDescriptor) {
    const originalValue = descriptor.value

    descriptor.value = function(...args: string[]) {
        console.log(`Function ${key} called with arguments: ${args.join(', ')}`)
        return originalValue.apply(this, args);
    }
    return descriptor
}

class Person {
  constructor(public fName: string, public lName: string) {
    this.fName = fName;
    this.lName = lName;
  }

  @log
  static getFullName (fName: string, lName: string): string {
    return `${fName} ${lName}`
  };
}

let person = new Person('John', 'Does');

Person.getFullName(person.fName, person.lName)

Person.getFullName('Benny', 'Tres');