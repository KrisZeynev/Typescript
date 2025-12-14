class Task {
  private title: string;
  private description: string;
  private completed: boolean = false;
  private createdBy: string;

  constructor(title: string, description: string, createdBy: string) {
    this.title = title;
    this.description = description;
    this.createdBy = createdBy;
  }

  get creator(): string {
    return this.createdBy;
  }

  toggleStatus(): void {
    this.completed ? (this.completed = false) : (this.completed = true);
  }

  getDetails(): string {
    return `"Task: ${this.title} - ${this.description} - ${
      this.completed ? "Completed" : "Pending"
    }`;
  }

  static createSampleTasks(): Task[] {
    return [
      new Task("Complete homework", "Finish math exercises", "Charlie"),
      new Task("Clean room", "Clean the room", "Mary"),
    ];
  }
}

// 1
// const task1 = new Task(
//   "Complete homework",

//   "Finish math exercises",
//   "Charlie"
// );
// task1.toggleStatus();
// console.log(task1.getDetails());

// 2
// const task2 = new Task("Clean room", "Clean the room", "Mary");
// console.log(task2.getDetails());

// 3
const tasks = Task.createSampleTasks();
tasks.forEach((task) => console.log(task.getDetails()));
