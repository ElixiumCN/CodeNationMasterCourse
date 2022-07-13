let pizzaTopping = "beef"; 

switch(pizzaTopping) {
    case "beef":
    case "meatballs":
    // case "olives":
        console.log(`${pizzaTopping} is an important ingredient for my pizza.`); 
        break; 
    case "peppers":
    case "onions":
        console.log(`I don’t mind having ${pizzaTopping} on my pizza.`); 
        break; 
    case "pineapple":
        console.log(`${pizzaTopping} should not be on a pizza.`); 
        break; 
    default: 
    console.log(`${pizzaTopping} is unavailable as a topping.`); 
}