var clothingItem = {
  price: 50,
  color: "beige",
  material: "cotton",
  season: "autumn",
};
//demo for of
for (const key of Object.keys(clothingItem)) {
  console.log(key, ":", clothingItem[key]);
}

var colors = ["blue", "green", "red"];
for (var color of colors) {
  console.log(color);
}
