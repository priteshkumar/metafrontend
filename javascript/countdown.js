var count = 0;
var limit = 10;
var x;

function incrementCount() {
  count += 1;
  if (count == 10) {
    clearInterval(x);
    return;
  }
  document.getElementById("demo").innerText = count;
}

x = setInterval(incrementCount, 1000);
