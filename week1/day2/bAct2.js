let topping = "pineapple"

switch(topping) {
    case "beef":
    case "meatballs":
    case "olive":
console.log(`These are important ingredients for my pizza.`);
    break;
    case "chicken":
console.log(`I don't mind having ${topping} on my pizza.`);
    break;
    default:
console.log(`{$topping} should not be on my pizza`);
    }