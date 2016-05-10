//Les 5: 10 maart 2015 - Dinsdag

// Oefening:  Reageren op events

// Wanneer de pagina geladen wordt, voer de volgende javascript uit.

$(document).ready(function() {

	// Zet de tekst in vet wanneer je er op klikt	
	$("#plaatsnaam li").click(function(event){
		$(this).toggleClass("vet");
	});
	
	// Steekt de nieuwe ingegeven waarde in de lijst
	$("#btnToevoegen").click(Toevoegen);
	
	function Toevoegen() {
		var nieuweInput = '<ul><li>' + $('#inputPlaatsnaam').val() + '</ul></li>'
		$("#plaatsnaam").append(nieuweInput);
	}
});