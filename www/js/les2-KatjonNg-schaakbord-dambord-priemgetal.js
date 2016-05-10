//Les 2: 15 Februari 2016 - Maandag

// Dit lijntje zorgt er voor dat je browser en ook brackets makkelijker fouten zal zien en zal tegenhouden.
"use strict";

// Oefening:  Schaakbord
document.write('<h1> Schaakbord </h1>')

var nummer = 0;
//var letter = 0;


// Vertikale vierkantjes tekenen
for(var vertikaal = 9; vertikaal > 1; vertikaal--){	
	if (vertikaal % 2){
		nummer = vertikaal;
		document.write('<div class="white"> </div>');
	}
	else{
		nummer = vertikaal;
		document.write('<div class="gray"> </div>');
	}
		switch(nummer){
	case 8:
			document.write('<img src="./img/Schaakbord/8a.png" alt="8a" width="50" height="50">');
			break;
	case 7: 
			document.write('<img src="./img/Schaakbord/7a.png" alt="7a" width="50" height="50">');
			break;
	case 2: 
			document.write('<img src="./img/Schaakbord/2a.png" alt="2a" width="50" height="50">');
			break;
	case 1: 
			document.write('<img src="./img/Schaakbord/1a.png" alt="1a" width="50" height="50">');
			break;		
	}
}

document.write('<br>' + '<br>' + '<br>');


// Oefening: Dambord

document.write('<h1> Dambord </h1>')

// Vertikale vierkantjes tekenen
for(var vertikaal = 1; vertikaal <= 10; vertikaal++){
	if (vertikaal % 2){
		nummer = vertikaal;
		document.write('<div class="white"> </div>');
	}
	else{
		nummer = vertikaal;
		document.write('<div class="gray"> </div>');
	}		
}
document.write('<br>' + '<br>' + '<br>');


// Oefening: Priemgetal

document.write('<h1> Priemgetal </h1>');

// Gemiddelde duur: 900-1000ms bij 1.000.000
(function (){
	var startTijd = new Date().getTime();
	var priemgetallen = [2];
	var einde = 1000;
	var sqrt;

	// Priemgetallen berekenen...
	for(var i = 3; i <= einde; i++){
			var isDeelbaar = false;
			// Vierkantswortel van getal nemen
			sqrt = Math.sqrt(i);
			// Controleren of het getal een priemgetal is
			for(var j = 0; j < priemgetallen.length; j++)
			{
				// Priemgetal
				if(priemgetallen[j] > sqrt)
				{
					break;
				}
				// Geen priemgetal
				if(i % priemgetallen[j] == 0)
				{
					isDeelbaar = true;
				}
			}
			// Priemgetal
			if (isDeelbaar == false)
			{
				// Priemgetal aan de array toevoegen
				priemgetallen.push(i);
			}	
	}
	// Alle priemgetallen op het scherm weergeven
	for(var i = 0; i < priemgetallen.length; i++)
	{
		document.write('<div class ="span">' + priemgetallen[i]+'</div>');
	}
	//tijd op het einde
	var eindTijd = new Date().getTime();
	//verstreken tijd weergeven
	document.write('<br>Tijd: '+ (eindTijd - startTijd) + 'ms');
})();