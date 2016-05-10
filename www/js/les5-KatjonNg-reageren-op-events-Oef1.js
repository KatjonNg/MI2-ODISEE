//Les 5: 10 maart 2016 - Maandag

// Oefening:  Reageren op events

// Wanneer de pagina geladen wordt, voer de volgende javascript uit.

$(document).ready(function() {

	// Zet de tekst in vet wanneer je er op klikt	
	$("#plaatsnaam li").click(function(event){
		$(this).toggleClass("vet");
	});
	
	function Toevoegen() {
		var nieuweInput = '<ul><li>' + $("#inputPlaatsnaam").val() + '</ul></li>'
		$("#plaatsnaam1").append(nieuweInput);
	}

    // Steekt de nieuwe ingegeven waarde in de lijst
    $("#btnToevoegen").on( "click", Toevoegen );
});