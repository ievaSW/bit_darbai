class BankAccount{
    constructor(accountNumber){
       
        this.accountNumber = accountNumber;
        this.balance = 0;
    }

    DepositMoney(amount){
        this.balance += amount;
    }
    WithdrawMoney(amount){
        if(amount > this.balance) {
            console.log("Nepakanka lėšų, šiuo metu turite tik " + this.balance+"$")
        } else{this.balance -= amount}
        
    }
}

const account1 = new BankAccount(123456789);

account1.DepositMoney(100);
account1.WithdrawMoney(110);

console.log(account1.balance);
