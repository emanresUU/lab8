var toppingsArray = [];

function addTopping() {
   "use strict";  
   var topping = document.getElementById("topping").value;
   toppingsArray.push(topping);
   var currentToppings = document.getElementById("currentToppings");
   currentToppings.innerHTML = toppingsArray;
}








function removeToppings() {
    "use strict";  
   toppingsArray.length = 0;
   var topping = document.getElementById("currentToppings");
   topping.innerHTML = "";
}



