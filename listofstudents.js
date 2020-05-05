let newStudentNames = [];

function addStudentName() {
  let oldArrayNames = JSON.parse(localStorage.getItem("sNames")); // json are objects that uses double quotes around the keys and around the values

  newStudentNames.push(document.getElementById("name").value);

  let studentNames = oldArrayNames.concat(newStudentNames);

  document.getElementById("name").value = "";

  let JSONnames = JSON.stringify(studentNames);

  localStorage.setItem("sNames", JSONnames);

  let arrayNames = JSON.parse(localStorage.getItem("sNames"));
  console.log(arrayNames);

  let list = "<ul style='list-style-type:none;'>";
  for (let i = 0; i < arrayNames.length; i++) {
    list = list + `<li>${arrayNames[i]}</li>`;
  }
  list = list + "</ul>";

  document.getElementById("listOfNames").innerHTML = list;
}
