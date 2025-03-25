var myPromise = new Promise(function(resolve,reject){
  var value = doSomething();
  if(thingWorked){
    resolve(value);
  }
  else if(somethingwentWrong){
    reject()
  }
});

myPromise.then(function(value){
  return nextThing(value);
}).catch(rejectFunction)

function myfunc() {
  //document.getElementById("demo").innerHTML = "hello world";
  console.log("hello world");
}

setTimeout(myfunc, 3000);

let myPromise = new Promise(function (myResolve, myReject) {
  setTimeout(function () {
    myResolve("I love You !!");
  }, 3000);
});

myPromise.then(function (value) {
  document.getElementById("demo").innerHTML = value;
});






function wait(ms) {
  /*
  Your code goes here!
  Instructions:
  (1) Wrap this setTimeout in a Promise. resolve() in setTimeout's callback.
  (2) console.log(this) inside the Promise and observe the results.
  (3) Make sure wait returns the Promise too!
   */
      return new Promise (resolve,reject){
  window.setTimeout(function() {}, ms);
};












