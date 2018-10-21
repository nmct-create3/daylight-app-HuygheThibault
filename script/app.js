// _ = helper functions
let _calculateTimeDistance = (startTime, endTime) => {
	// Bereken hoeveel tijd er tussen deze twee periodes is.
	// Tip: werk met minuten. 
}

// Deze functie kan een am/pm tijd omzetten naar een 24u tijdsnotatie, deze krijg je dus al. Alsjeblieft, veel plezier ermee.
let _convertTime = (t) => {
	/* Convert 12 ( am / pm ) naar 24HR */
	let time = new Date('0001-01-01 ' + t);
	let formatted = time.getHours() + ':' + ('0' + time.getMinutes()).slice(-2);
	return formatted;
}

// 5 TODO: maak updateSun functie

// 4 Zet de zon op de juiste plaats en zorg ervoor dat dit iedere minuut gebeurt.
let placeSunAndStartMoving = ( totalMinutes, sunrise ) => {
	// In de functie moeten we eerst wat zaken ophalen en berekenen.

	// Haal het DOM element van onze zon op en van onze aantal minuten resterend deze dag.
	// Bepaal het aantal minuten dat de zon al op is.
	document.getElementById(".js-sun");
	// Nu zetten we de zon op de initiële goede positie ( met de functie updateSun ). Bereken hiervoor hoeveel procent er van de totale zon-tijd al voorbij is.
	// We voegen ook de 'is-loaded' class toe aan de body-tag.
	document.body.classList.add("is-loaded");
	// Vergeet niet om het resterende aantal minuten in te vullen.


	// Nu maken we een functie die de zon elke minuut zal updaten
	// Bekijk of de zon niet nog onder of reeds onder is
	
	// Anders kunnen we huidige waarden evalueren en de zon updaten via de updateSun functie.
	// PS.: vergeet weer niet om het resterend aantal minuten te updaten en verhoog het aantal verstreken minuten.
}

// 3 Met de data van de API kunnen we de app opvullen
let showResult = ( queryResponse ) => {
	// We gaan eerst een paar onderdelen opvullen
	// Zorg dat de juiste locatie weergegeven wordt, volgens wat je uit de API terug krijgt.
	// Toon ook de juiste tijd voor de opkomst van de zon en de zonsondergang.

	var d = new Date();
	console.log(queryResponse["query"]["results"]["channel"]["astronomy"]["sunrise"])


		//document.querySelector(".js-sun").setAttribute("data-time") = d.getTime;
		document.querySelector(".js-sunrise").innerHTML = _convertTime(queryResponse["query"]["results"]["channel"]["astronomy"]["sunrise"]);
		document.querySelector(".js-sunset").innerHTML = _convertTime(queryResponse["query"]["results"]["channel"]["astronomy"]["sunset"]);
		document.querySelector(".js-location").innerHTML = queryResponse["query"]["results"]["channel"]["location"]["city"];


	// Hier gaan we een functie oproepen die de zon een bepaalde postie kan geven en dit kan updaten.
	// Geef deze functie de periode tussen sunrise en sunset mee en het tijdstip van sunrise.


};

// 2 Aan de hand van een longitude en latitude gaan we de yahoo wheater API ophalen.
let getAPI = ( lat, lon ) => {
	// Eerst bouwen we onze url op
	// en doen we een query met de Yahoo query language
	var query =  'select astronomy, location from weather.forecast where (lat=' + lat + ' and lon=' + lon + ')'
	//var query = 'select astronomy from weather.forecast where woeid in (select woeid from geo.places(1) where text="torhout, Belgium")'
	var url = "https://query.yahooapis.com/v1/public/yql?q=" + query
	var xd ="https://query.yahooapis.com/v1/public/yql?q=select%20astronomy%2C%20location%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22Torhout%2C%20Belgium%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys"
	// Met de fetch API proberen we de data op te halen.
	// Als dat gelukt is, gaan we naar onze showResult functie.
	fetch(xd)
	.then( function(Response){
		return Response.json();
	})
	.then(function(myJson){
		console.log(JSON.stringify(myJson))
		showResult(myJson);
	})
}

document.addEventListener( 'DOMContentLoaded', function () {
	// 1 We will query the API with longitude and latitude.
	getAPI( 51.065540, 3.101000 );
});


