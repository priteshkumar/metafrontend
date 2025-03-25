// Given variables
const dishData = [
  {
    name: "Italian pasta",
    price: 9.55,
  },
  {
    name: "Rice with veggies",
    price: 8.65,
  },
  {
    name: "Chicken with potatoes",
    price: 15.55,
  },
  {
    name: "Vegetarian Pizza",
    price: 6.45,
  },
];
const tax = 1.2;

// Implement getPrices()
function getPrices(taxBoolean) {
  for (let dish of dishData) {
    let finalPrice;
    if (taxBoolean === true) {
      finalPrice = dish.price * tax;
    } else if (taxBoolean === false) {
      finalPrice = dish.price;
    } else {
      console.log("You need to pass a boolean to the getPrices call!");
      return;
    }
    console.log("Dish:", dish.name, "Price: $", finalPrice);
  }
}

getPrices(true);
