//Les 5: 10 maart 2016 - Maandag

// Oefening:  Reageren op events

// Wanneer de pagina geladen wordt, voer de volgende javascript uit.

$(document).ready(function() {

var posX, posY, bericht;

function verwerkTouchstart(event) {
   posX = event.originalEvent.touches[0].pageX;
   posY = event.originalEvent.touches[0].pageY;
   bericht = "TS: x:" + posX + " y:" + posY;
   $("#log").text($("#log").text() + bericht + "\r\n");
}

function verwerkTouchend(event) {
   posX = event.originalEvent.changedTouches[0].pageX;
   posY = event.originalEvent.changedTouches[0].pageY;
   bericht = "TE: x:" + posX + " y:" + posY;
   $("#log").text($("#log").text() + bericht + "\r\n");
}

$("#log").on("touchstart", verwerkTouchstart);
$("#log").on("touchend", verwerkTouchend);

/*
var startTimer, posX, posY, bericht;

function resetTimer(){ startTimer= new Date().getTime(); };
function verwerkTouchstart(event) {
   resetTimer();
   posX = event.originalEvent.touches[0].pageX;
   posY = event.originalEvent.touches[0].pageY;
   bericht = "TS:" + startTimer +" x:" + posX + " y:" + posY;
   $("#logTouchstart").text($("#logTouchstart").text() + bericht + "\r\n");
}

function verwerkTouchend(event) {
   posX = event.originalEvent.changedTouches[0].pageX;
   posY = event.originalEvent.changedTouches[0].pageY;
   bericht = "TE:" + (new Date().getTime() - startTimer) + " x:" + posX + " y:" + posY;
   $("#logTouchend").text($("#logTouchend").text() + bericht + "\r\n");
}

function verwerkClick(event) {
   posX = event.originalEvent.offsetX;
   posY = event.originalEvent.offsetY;
   bericht = "click:" + " x:" + posX + " y:" + posY;
   $("#logClick").text($("#logClick").text() + bericht + "\r\n");
}

$("#klikMij").on("touchstart", verwerkTouchstart);
$("#klikMij").on("touchend", verwerkTouchend);
$("#klikMij").on("click", verwerkClick);
*/
});