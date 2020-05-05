let arrayNames = [];

function addNameToArray() {
  let nameToAdd = document.getElementById("inputBox").value;
  arrayNames.push(nameToAdd);

  localStorage.setItem("lsArryNames", JSON.stringify(arrayNames));
}
