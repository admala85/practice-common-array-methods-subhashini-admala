//Task 1: creating the customerorder system
let drinks = ["Latte","Tea","Espresso"];
let pastry = ["croissant","muffin","Bagel"];

//Task 2: log no of drinks and pastries by using .length property
console.log("Number of drinks available: " + drinks.length);
console.log("Number of pastries available: " + pastry.length);
 
//Task 3: Access orders using Brac ket Notation.
console.log("First drink order:" + drinks[0]);
console.log("First pastry order:" + pastry[0]);
console.log("Second drink order:" + drinks[1]);
console.log("Last pastry order:" + pastry[2]);
console.log("Last drink order:" + drinks[2]);
console.log("Second pastry order:" + pastry[1]);

// Task 4:Access Orders Dynamically with Variables
let firstDrink = drinks[0];
let firstPastry = pastry[0];
let secondDrink = drinks[1];
let secondPastry = pastry[1];
let lastDrink = drinks[2];
let lastPastry = pastry[2];

// Task 5:  loop that logs all the items in the drink category using .length property
console.log("First order is:" + firstDrink + " and "  + firstPastry);
for (let i = 0; i < drinks.length; i++){
    console.log("Drink order is: " + drinks[i]);
    
}

//Task 6: Add a New Order & Track Length

drinks.push("Flat White");
console.log("updated drinks list: " + drinks);
pastry.push("scone");
console.log("updated pastry list: " + pastry);
//Declare two variables and use them with bracket notation to log the selected orderdynamically.
 
let thirdDrink = drinks[3];
let thirdpastry =pastry[3];
console.log("Third pastry order is: " + pastry[3]);
console.log("Third drink order is: " + drinks[3]);


console.log("Number of drinks available: " + drinks.length);
console.log("Number of pastries available: " + pastry.length);



