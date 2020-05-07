document.getElementById("title").innerText = "NBA Players";
document.getElementById("instructions").innerText =
  "Input NBA players name and jersey numbers into boxes below and click button.";

let playersNamesArray = [];
let playersNumberArray = [];

function addPlayerInfo() {
  if (
    Boolean(
      localStorage.getItem("playerNames") &&
        localStorage.getItem("playerNumber")
    )
  ) {
    let playersNamesArray = JSON.parse(localStorage.getItem("playerNames"));
    let playersNumberArray = JSON.parse(localStorage.getItem("playerNumber"));

    let namesEntered = document.getElementById("inputBox1").value;
    let numberEntered = document.getElementById("inputBox2").value;
    playersNamesArray.push(namesEntered);
    playersNumberArray.push(numberEntered);

    localStorage.setItem("playerNames", JSON.stringify(playersNamesArray));
    localStorage.setItem("playerNumber", JSON.stringify(playersNumberArray));

    let livePlayersNamesArray = JSON.parse(localStorage.getItem("playerNames"));
    let livePlayersNumbersArray = JSON.parse(
      localStorage.getItem("playerNumber")
    );

    let dropDown = "<ul>";

    for (let i = 0; i < livePlayersNamesArray.length; i++) {
      dropDown =
        dropDown +
        `<li>${livePlayersNamesArray[i]}: ${livePlayersNumbersArray[i]}</li>`;
    }

    dropDown = dropDown + "</ul>";
    document.getElementById("playersInfo").innerHTML = dropDown;
  } else {
    let namesEntered = document.getElementById("inputBox1").value;
    let numberEntered = document.getElementById("inputBox2").value;
    playersNamesArray.push(namesEntered);
    playersNumberArray.push(numberEntered);

    localStorage.setItem("playerNames", JSON.stringify(playersNamesArray));
    localStorage.setItem("playerNumber", JSON.stringify(playersNumberArray));
  }
}

function displayedPlayerInfo() {
  let livePlayersNamesArray = JSON.parse(localStorage.getItem("playerNames"));
  let livePlayersNumbersArray = JSON.parse(
    localStorage.getItem("playerNumber")
  );

  let dropDown = "<ul>";

  for (let i = 0; i < livePlayersNamesArray.length; i++) {
    dropDown =
      dropDown +
      `<li>${livePlayersNamesArray[i]}: ${livePlayersNumbersArray[i]}</li>`;
  }

  dropDown = dropDown + "</ul>";
  document.getElementById("playersInfo").innerHTML = dropDown;
}

displayedPlayerInfo();
