class BankAccount{
    // Prvatus laukas negalimas redaguoti is isores
    #balance;
    // Privatus laukas negalimas redaguoti is isores
    constructor(accountNumber){
       
        this.accountNumber = accountNumber;
        this.#balance = 0;
    }

    DepositMoney(amount){
        this.#balance += amount;
    }
    WithdrawMoney(amount){
        if(amount > this.#balance) {
            console.log("Nepakanka lėšų, šiuo metu turite tik " + this.#balance+"€")
        } else {this.#balance -= amount}
        // Alt + 0128 gaunam euro simboli
    }
    // Tam, kad gauti reiksme is privataus lauko, turime naudoti get balance. Budas kai gaunamos pacios lesos BALANCE yra vadinama inkapsuliacija. Cia objecte.
     get balance(){
        return this.#balance;
    }
}

const account = new BankAccount("123456789");
// ?
account["#balance"] += 400
// account.balance -= 410

account.DepositMoney(100+100+50+18);
account.WithdrawMoney(85+300);

console.log(account.balance);
