describe("BankAccount", function() {

    describe("balance value", function() {
        it("displays the value of balance", function() {
            var testBalance = Object.create(BankAccount);
            var balance = testBalance.balance;
            expect(balance).to.equal(0);
        });
    });

    describe("deposit", function() {
        it("adds money to balance", function() {
            var testDeposit = Object.create(BankAccount);
            testDeposit.deposit(10000);
            expect(testDeposit.balance).to.equal(10000);
        });
    });

    describe("withdraw", function() {
        it("subtracts money from balance", function() {
            var testWithdrawl = Object.create(BankAccount);
            testWithdrawl.withdraw(5000);
            expect(textWithdrawl.balance).to.equal(-5000);
        });
    });

});
