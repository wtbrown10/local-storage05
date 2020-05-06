let arrayNames = [];

function addNameToArray() {
  let nameToAdd = document.getElementById("inputBox").value;
  arrayNames.push(nameToAdd);

  if (nameToAdd.length != 0) {
    localStorage.setItem("listArrayNames", JSON.stringify(arrayNames));

    displayListOfNames();
  } else {
    alert("Please enter your name!");
  }
}

function displayListOfNames() {
  let parsedArray = JSON.parse(localStorage.getItem("listArrayNames"));

  let listOfNames = "<ul>";

  for (let i = 0; i < parsedArray.length; i++) {
    listOfNames = listOfNames + `<li>${parsedArray[i]}</li>`;
  }

  listOfNames = listOfNames + "</ul>";
  document.getElementById("theList").innerHTML = listOfNames;
}

displayListOfNames();
