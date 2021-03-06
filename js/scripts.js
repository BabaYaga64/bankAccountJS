var BankAccount = {
    name: null,
    balance: 0,

    deposit: function(amount) {
        if (isNaN(amount)) {
            amount = 0;
        }
        this.balance = this.balance + amount;

    },

    withdraw:function(amount) {
        if (isNaN(amount)) {
            amount = 0;
        }
        this.balance = this.balance - amount;
    }
};


$(document).ready(function() {

    //On the click submit button, pass the name form input into a variable inputtedName. Also, grab the integer from the new deposit input and set it to a number with two places to right of decimal.
    $("form#new-bankaccount").submit(function(event) {
        event.preventDefault();
        var inputtedName = $("input#new-name").val();
        var initialDeposit = parseFloat($("input#new-deposit").val());

        var createAccount = Object.create(BankAccount);

        createAccount.name = inputtedName;
        createAccount.balance = initialDeposit;

        //display monies
        var result = createAccount.balance;
        $("span.balance").text(result);



        $("form#withdrawlDeposit").submit(function(event) {

            //includes an event.preventDefault after EVERY submit event
            event.preventDefault();

            var withdrawlMoney = parseInt($("input#withdrawl").val());
            createAccount.withdraw(withdrawlMoney);
            debugger;

            var depositMoney = parseInt($("input#deposit").val());
            createAccount.deposit(depositMoney);



            //display monies
            //var result = createAccount.balance;
            $("span.balance").text(createAccount.balance);

            //var depositMoney = parseInt($("input#deposit").val());

        });//Ends form#withdrawlDeposit



    });//Ends form#new-bankaccount



});//Ends document.ready
