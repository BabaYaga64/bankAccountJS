var BankAccount = {
    name = null;
    balance: 0,

    deposit: function(amount) {
        this.balance = this.balance + amount;
    },

    withdraw:function(amount) {
        this.balance = this.balance - amount;
    }
};

var newAccount = Object.create(BankAccount);
    newAccount.balance;
    newAccount.deposit(2500);
    newAccount.balance;



$(document).ready(function() {


    $("form#new-bankaccount").submit(function(event) {
        var inputtedName = $("input#new-name").val();
        var initialDeposit = parseFloat($("input#new-deposit"));
    });


    $("form#withdrawlDeposit").submit(function(event) {

        var withdrawl = parseInt($("input#withdrawl").val());

        var deposit = parseInt($("input#deposit").val());
    });

});
