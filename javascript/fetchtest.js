//const url = "https://api.dictionaryapi.dev/api/v2/entries/en/hello";

//console.log(url);

function getUrl(url) {
  return fetch(url);
}

//working getjson
function getJson(url) {
  getUrl(url)
    .then(function (response) {
      console.log(response.query);
      return response.json();
    })
    .then(function (data) {
      let showui = document.getElementById("showdata");
      //showui.innerHTML = .query;
      console.log(data[0].meanings[0].definitions[0].definition);
      showui.innerHTML = data[0].meanings[0].definitions[0].definition;
    });
}

/*function getJson(url) {
  getUrl(url).then(function (response) {
    console.log(response.query);
    return response.json();
  });
}

//check this function later doesnt work
function updateUI() {
  getJson(url)
    .then(function (response) {
      console.log(response);
      let showui = document.getElementById("showdata");
      showui.innerHTML = response.query;
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
}

console.log("call updateui");
updateUI();*/
let word = window.prompt();
const url = "https://api.dictionaryapi.dev/api/v2/entries/en/" + word;
getJson(url);

/*
fetch("https://api.dictionaryapi.dev/api/v2/entries/en/hello")
  .then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error("Network response was not ok");
    }
  })
  .then((data) => console.log(data))
  .catch((error) =>
    console.error("There was a problem with the fetch operation:", error)
  );
*/
