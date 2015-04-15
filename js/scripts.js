var BankAccount = {
    balance: 0,

    deposit: function(amount) {
        this.balance = this.balance +amount;
    },

    withdraw:function(amount) {
        this.balance = this.balance - amount;
    }
};
