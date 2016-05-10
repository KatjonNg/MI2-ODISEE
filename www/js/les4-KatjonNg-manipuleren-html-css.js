//Les 4: 03 maart 2016 - Maandag

// Oefening:  Manipuleren HTML en CSS

// Wanneer de pagina geladen wordt, voer de volgende javascript uit.
$(document).ready(function() {
	
	// Pas de inhoud van de plaatsnamen dynamisch aan
	$("#plaatsnaam").html("<li>Aalst</li><li>Erembodegem</li><li>Denderleeuw</li><li>Liederkerke</li><li>Brussel-Zuid</li>");

	// Aantal plaatsnamen bepalen
	$("#aantalplaatsen h2").html(function() {
	var aantal = $("#plaatsnaam li").length;
	return "Aantal plaatsnamen " + aantal + ".";
	});
	
	// De laatste plaats verwijderen
	var laatsteplaats = $("#plaatsnaam li").last().detach();
	
	// De laatste plaats herstellen en bovenaan zetten (door prepend).
	$("#plaatsnaam").prepend(laatsteplaats);
});