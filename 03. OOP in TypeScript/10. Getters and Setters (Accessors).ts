class User {
  private _username: string;

  constructor(username: string) {
    if (username.length < 3) {
      throw new Error("Username must be at least 3 characters long");
    }
    this._username = username;
  }

  get username(): string {
    return this._username;
  }

  set username(newUserName: string) {
    if (newUserName.length >= 3) {
      this._username = newUserName;
    } else {
      throw new Error("Username must be at least 3 characters long");
    }
  }
}

// 1
const user = new User("Martin");
user.username = "johnDoe";
console.log(user.username);

// 2 Error: Username must be at least 3 characters long
// const user = new User("jo");

// 3 Error: Username must be at least 3 characters long
// const user = new User("Martin");
// user.username = "Do";
