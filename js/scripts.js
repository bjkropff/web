var Pizza = {
  price: 10.99,

  topping: function(number){
    this.price += (number * 2);
  }

};

$(document).ready(function() {
  $("form#order").submit(function(event) {
    event.preventDefault();

    var choice = $("#choice").val();
    var number = null;

    var pizza = Object.create(Pizza);
    pizza.topping(choice)
    var cost = pizza.price;
    //  alert(cost);

    $("#cost").text(cost);

  });
});
