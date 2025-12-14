class BankAccount {
  private balance: number;

  constructor(balance: number) {
    this.balance = balance;
  }

  deposit(depositSum: number): void {
    this.balance += depositSum;
  }

  withdraw(withDrawSum: number): void {
    if (withDrawSum <= this.balance) {
      this.balance -= withDrawSum;
    }
  }

  getBalance(): number {
    return this.balance;
  }
}

// const account = new BankAccount(100);

// account.deposit(50);

// account.withdraw(30);

// console.log(account.getBalance());

const account = new BankAccount(20);

account.withdraw(30);

console.log(account.getBalance());