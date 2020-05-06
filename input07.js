let nameArray = [];

function addNameToArray() {
  if (Boolean(localStorage.getItem("lsNameArray"))) {
    let nameArray = JSON.parse(localStorage.getItem("lsNameArray"));

    let enteredName = document.getElementById("inputbox").value;
    nameArray.push(enteredName);

    localStorage.setItem("lsNameArray", JSON.stringify(nameArray));

    let liveNameArray = JSON.parse(localStorage.getItem("lsNameArray"));
    console.log(liveNameArray);

    let htmlList = "<ul>";

    for (let i = 0; i < liveNameArray.length; i++) {
      htmlList = htmlList + `<li>${liveNameArray[i]}</li>`;
    }
    htmlList = htmlList + "</ul>";
    document.getElementById("listNamesHere").innerHTML = htmlList;
  } else {
    let enteredName = document.getElementById("inputbox").value;
    nameArray.push(enteredName);

    localStorage.setItem("lsNameArray", JSON.stringify(nameArray));

    displayedList();

    //     let liveNameArray = JSON.parse(localStorage.getItem("lsNameArray"));

    //     console.log(liveNameArray);

    //     let htmlList = "<ul>";

    //     for (let i = 0; i < liveNameArray.length; i++) {
    //       htmlList = htmlList + `<li>${liveNameArray[i]}</li>`;
    //     }
    //     htmlList = htmlList + "</ul>";
    //     document.getElementById("listNamesHere").innerHTML = htmlList;
    //   }
  }
}

function displayedList() {
  let liveNameArray = JSON.parse(localStorage.getItem("lsNameArray"));

  let htmlList = "<ul>";

  for (let i = 0; i < liveNameArray.length; i++) {
    htmlList = htmlList + `<li>${liveNameArray[i]}</li>`;
  }
  htmlList = htmlList + "</ul>";
  document.getElementById("listNamesHere").innerHTML = htmlList;
}

displayedList();
