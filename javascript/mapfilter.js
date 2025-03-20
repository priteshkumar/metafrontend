var arr = [1, 2, 3, 4];
function squared(val) {
  return val * val;
}
function checkEven(val) {
  return val % 2 == 0;
}
var arr1 = arr.map(squared);
console.log(arr1);

var arr2 = arr.filter(checkEven);
console.log(arr2);

const veggies = ["onion", "garlic", "potato"];
veggies.forEach(function (veggie, index) {
  console.log(`${index}. ${veggie}`);
});
