let arrayNames = [];

function addNameToArray() {
  let nameToAdd = document.getElementById("inputBox").value;
  arrayNames.push(nameToAdd);

  if (nameToAdd.length != 0) {
    localStorage.setItem("lsArryNames", JSON.stringify(arrayNames));

    let parsedArray = JSON.parse(localStorage.getItem("lsArrayNames"));

    let htmlText = "<ul>";

    for (let i = 0; i < arrayNames.length; i++) {
      htmlText = htmlText + `<li>${arrayNames[i]}</li>`;
    }

    htmlText = htmlText + "</ul>";
    document.getElementById("theList").innerHTML = htmlText;
  } else {
    alert("Please enter Name!");
  }
}
