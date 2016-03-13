var toppingsArray = [];

function addTopping() {
   "use strict";  
   var topping = document.getElementById("topping").value;
   
   if (topping !== toppingsArray[0] && 
      topping !== toppingsArray[1] && 
      topping !== toppingsArray[2] && 
      topping !== toppingsArray[3]) { 
      toppingsArray.push(topping);
   }
   var currentToppings = document.getElementById("currentToppings");
   var toppingsList = "";
   for (var i = 0; i < toppingsArray.length; i = i + 1) {
      toppingsList = toppingsList + "<li>" + toppingsArray[i] + "</li>";
      currentToppings.innerHTML = toppingsList; 
   }
}








function removeToppings() {
    "use strict";  
   toppingsArray.length = 0;
   var topping = document.getElementById("currentToppings");
   topping.innerHTML = "";
}



