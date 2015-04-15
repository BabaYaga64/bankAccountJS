var BankAccount = {
    name: null,
    balance: 0,

    deposit: function(amount) {
        this.balance = this.balance + amount;
    },

    withdraw:function(amount) {
        this.balance = this.balance - amount;
    }
};

// var newAccount = Object.create(BankAccount);
//     newAccount.balance;
//     newAccount.deposit(2500);
//     newAccount.balance;



$(document).ready(function() {

    //On the click submit button, pass the name form input into a variable inputtedName. Also, grab the integer from the new deposit input and set it to a number with two places to right of decimal.
    $("form#new-bankaccount").submit(function(event) {
        event.preventDefault();
        var inputtedName = $("input#new-name").val();
        var initialDeposit = parseFloat($("input#new-deposit").val()).toFixed(2);

        var createAccount = Object.create(BankAccount);

        createAccount.name = inputtedName;
        createAccount.balance = initialDeposit;
        debugger;
    });


    $("form#withdrawlDeposit").submit(function(event) {

        var withdrawl = parseInt($("input#withdrawl").val());

        var deposit = parseInt($("input#deposit").val());
    });


});
