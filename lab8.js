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

function calculateTotalPrice() {
   "use strict";
   document.getElementById("totalPrice").innerHTML = calculateToppingsPrice(); 
}

function calculateToppingsPrice() {
   "use strict";
   var grassJelly = 0;
   var coconut = 0;
   var pearls = 0;
   var mangoStars = 0;
   var totalPrice = 0;
   for (var i = 0; i < toppingsArray.length; i = i + 1) {
      if (toppingsArray[i] === "Grass Jelly") {
	   grassJelly = 0.50;
      }
      if (toppingsArray[i] === "Coconut") {
	   coconut = 0.75;
      }
      if (toppingsArray[i] === "Pearls") {
	   pearls = 0.50;
      }
      if (toppingsArray[i] === "Mango Stars") {
	   mangoStars = 1.00;
      }
   }
   totalPrice = grassJelly + coconut + pearls + mangoStars;
   return totalPrice;
}

//   var tea = document.getElementById("teaType");
//   var milk = document.getElementById("milk");
