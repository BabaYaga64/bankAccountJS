describe("BankAccount", function() {

    describe("deposit", function() {
        it("adds the amount to the balance", function() {
            var testBankAccount = Object.create(BankAccount);
            testBankAccount.deposit(1000);
            expect(testBankAccount.balance).to.equal(1000);
        });
    });

    describe("withdraw", function() {
        it("subtracts the amount from the balance", function() {
            var testBankAccount = Object.create(BankAccount);
            testBankAccount.withdraw(10);
            expect(testBankAccount.balance).to.equal(-10);
        });
    });

});
