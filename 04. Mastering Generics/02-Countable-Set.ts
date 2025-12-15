interface CountableSet<T> {
  add(item: T): void;
  remove(item: T): void;
  contains(item: T): boolean;
  getNumberOfCopies(item: T): number;
}

// with set
class CountedSet<T> implements CountableSet<T> {
  private items: Map<T, number> = new Map<T, number>();

  add(item: T): void {
    if (!this.items.has(item)) {
      this.items.set(item, 1);
    } else {
      this.items.set(item, this.items.get(item)! + 1);
    }
  }

  remove(item: T): void {
    if (!this.items.has(item)) return;

    const currentCount = this.items.get(item)!;

    if (currentCount > 1) {
      this.items.set(item, currentCount - 1);
    } else {
      this.items.delete(item);
    }
  }

  contains(item: T): boolean {
    return this.items.has(item);
  }

  getNumberOfCopies(item: T): number {
    return this.items.get(item) ?? 0;
  }
}

// with array
// class CountedSet<T> implements CountableSet<T> {
//   private tempArr: T[] = [];

//   add(item: T): void {
//     this.tempArr.push(item);
//   }

//   remove(item: T): void {
//     const currIndex = this.tempArr.indexOf(item);
//     if (currIndex !== -1) {
//       this.tempArr.splice(currIndex, 1);
//     }
//   }

//   contains(item: T): boolean {
//       return this.tempArr.includes(item)
//   }

//   getNumberOfCopies(item: T): number {
//     return this.tempArr.includes(item) ? this.tempArr.filter(x => x == item).length : 0
//   }
// }

let countedSet = new CountedSet<string>();

countedSet.add("test");

countedSet.add("test");

console.log(countedSet.contains('test'));

console.log(countedSet.getNumberOfCopies('test'));

countedSet.remove('test')

countedSet.remove('test')

countedSet.remove('test')

console.log(countedSet.getNumberOfCopies('test'));

console.log(countedSet.contains('test'));
