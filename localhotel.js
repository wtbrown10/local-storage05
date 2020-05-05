let hotel = {
  hotelName: "js localStorage Hotel",
  availableRooms: [[101, 102, 103], [201, 202, 203, 204], [301]],

  updateAvailableRooms: function () {
    let dropDown = "<select>";
    for (let i = 0; i < this.availableRooms.length; i++) {
      for (let j = 0; j < this.availableRooms[i].length; j++) {
        dropDown =
          dropDown +
          `<option value='${this.availableRooms[i][j]}'>${this.availableRooms[i][j]}</option>`;
      }
    }
    dropDown = dropDown + "</select>";
    document.getElementById("availableRoomsList").innerHTML = dropDown;
    // if localStorage.getItem("hotel") does not exist (!=) then create it.
  },
};

document.getElementById("name").innerText = hotel.hotelName;

if (Boolean(localStorage.getItem("hotel"))) {
  // start running the program
  //grab list of rooms from localStorage
  // parse and store in live object

  let hotelString = localStorage.getItem("hotel");
  hotel = JSON.parse(hotelString);

  hotel.updateAvailableRooms();
} else {
  // create add the hotel object to localstorage
  localStorage.setItem("hotel", JSON.stringify(hotel));
}
