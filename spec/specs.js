describe("Pizza", function() {
  describe("cheese", function() {
    it("will total the amount of a cheese pizza to 10.99", function() {
      var testCheese = Object.create(Pizza);
      testCheese.topping(0);
      expect(testCheese.price).to.equal(10.99);
    });

    it("will total the amount of a pepperoni pizza to 12.99", function() {
      var testPepperoni = Object.create(Pizza);
      testPepperoni.topping(1);
      expect(testPepperoni.price).to.equal(12.99);
    });

    it("will take in the varible choice (equal to 1) and return 12.99", function() {
      var testPepperoni = Object.create(Pizza);
      var choice = 1;
      testPepperoni.topping(choice);
      expect(testPepperoni.price).to.equal(12.99);
    });
  });
});
