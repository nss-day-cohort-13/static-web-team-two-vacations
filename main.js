var tripArray = [];

var tripOne = {
    name: "1",
	description: "",
	price: "",
	url: "img/smokymtns.png"
}

var tripTwo = {
    name: "2",
	description: "",
	price: "",
	url: ""
}

var tripThree = {
    name: "3",
	description: "",
	price: "",
	url: ""
}

var tripFour = {
    name: "4",
	description: "",
	price: "",
	url: ""
}

var tripFive = {
    name: "5",
	description: "",
	price: "",
	url: ""
}

var tripSix = {
    name: "6",
	description: "",
	price: "",
	url: ""
}

var tripSeven = {
    name: "7",
	description: "",
	price: "",
	url: ""
}

var tripEight = {
    name: "8",
	description: "",
	price: "",
	url: ""
}

var tripNine = {
    name: "9",
	description: "bla",
	price: "23",
	url: ""
}

tripArray.push(tripOne, tripTwo, tripThree, tripFour, tripFive, tripSix, tripSeven, tripEight, tripNine);

var tripArticle = document.getElementById("trips");

console.log(tripArticle);

var numberOfTrips = tripArray.length;

for (var i = 0; i < numberOfTrips; i++){
  var currentTrip = tripArray[i];
  var title = "<h1>" + currentTrip.name + "</h1>";
  var description = "<p>" + currentTrip.desctiption + "</p>";
  var price = "<p>$" + currentTrip.price + "</p>";
  var img = "<img src=\"" + currentTrip.url + "\" alt=\"destinations\">"

  tripArticle.innerHTML += "<article class=\"trip\">"
                        + title
                        + img
                        + description
                        + price
                        + "</article>"

                console.log(i);
}










