let hotel = {
  hotelName: "JS localStorage Hotel",
  hotelMotto: "Show Me the Data",

  availableRooms: [
    ["201", "202"],
    ["301", "302"],
  ],
};

let hotelMethods = {
  updateAvailableRoomsDom: function () {
    let htmlAvailableList = "<select>";
    for (let i = 0; i < liveHotel.availableRooms.length; i++) {
      for (let j = 0; j < liveHotel.availableRooms[i].length; j++) {
        htmlAvailableList =
          htmlAvailableList +
          `<option value='${liveHotel.availableRooms[i][j]}'>${liveHotel.availableRooms[i][j]}</option>`;
      }
    }
    htmlAvailableList = htmlAvailableList + "</select>";
    document.getElementById("availableRoomsList").innerHTML = htmlAvailableList;
  },
};
localStorage.setItem("lsHotel", JSON.stringify(hotel)); // storing object "hotel" in localStorage as a string

let liveHotel = JSON.parse(localStorage.getItem("lsHotel")); // change hotel back from a string and declaring it to liveHotel

document.getElementById("name").innerText = hotel.hotelName;

hotelMethods.updateAvailableRoomsDom();
