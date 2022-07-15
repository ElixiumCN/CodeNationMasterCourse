let orderCount = 0;

const takeOrder = (t1, t2) => {
    orderCount++;
    console.log(`Pizza ${orderCount} with ${t1} and ${t2}`)
}

// Run the function & pass the arguments to the parameters of the function
takeOrder("Olives", "Beef");
takeOrder("Tomatoes", "Chicken");

