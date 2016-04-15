var tripArray = [];

var tripOne = {
    name: "Tokyo, Japan",
	description: "Visit the capital of Japan and enjoy the bustling city.",
	price: "15,000.00",
	url: "img/tokyo.jpg"
}

var tripTwo = {
    name: "Paris, France",
	description: "Come to the city of love and see the Eiffel Tower.",
	price: "20,000.00",
	url: "img/eiffelTower.jpg"
}

var tripThree = {
    name: "Kenya, South Africa",
	description: "Come explore the deserts of Kenya or enjoy the city.",
	price: "10,000.00",
	url: "img/kenya.jpg"
}

var tripFour = {
    name: "London, England",
	description: "Visit the capital of England.",
	price: "6,000.00",
	url: "img/london.jpg"
}

var tripFive = {
    name: "Bora Bora, French Polynesia",
	description: "Enjoy the black sand beaches and get that stranded on an island feel.",
	price: "22,000.00",
	url: "img/borabora2.jpg"
}

var tripSix = {
    name: "New Zealand",
	description: "Visit any of our tourist cities in New Zealand.",
	price: "12,000.00",
	url: "img/new zealand.jpg"
}

var tripSeven = {
    name: "Thailand",
	description: "Trek through the fun cities for a week or more in Thailand.",
	price: "6,500.00",
	url: "img/thailand.jpg"
}

var tripEight = {
    name: "Smoky Mountains",
	description: "Get lost in the wilderness! Go off the grid.",
	price: "3,500.00",
	url: "img/smokymtns.png"
}

var tripNine = {
    name: "Amazing Cruise",
	description: "Hop aboard a wonderful cruise to either the Bahamas or Alaska!",
	price: "600",
	url: "img/cruiseShip.jpg"
}

tripArray.push(tripOne, tripTwo, tripThree, tripFour, tripFive, tripSix, tripSeven, tripEight, tripNine);

var tripArticle = document.getElementById("trips");

console.log(tripArticle);

var numberOfTrips = tripArray.length;

for (var i = 0; i < numberOfTrips; i++){
  var currentTrip = tripArray[i];
  var title = "<h1>" + currentTrip.name + "</h1>";
  var description = "<p>" + currentTrip.description + "</p>";
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










