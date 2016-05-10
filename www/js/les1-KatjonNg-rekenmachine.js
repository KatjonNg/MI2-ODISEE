//Les 1: 8 Februari 2016 - Maandag

// Dit lijntje zorgt er voor dat je browser en ook brackets makkelijker fouten zal zien en zal tegenhouden.
"use strict";

// Oefening:  4 functies (+, -, *, /) + 2 parameters
var Getal1 = 0;
var Getal2 = 0;
var Resultaat;

function Optellen(Getal1, Getal2){
	return Getal1 + Getal2
}

function Aftrekken(Getal1, Getal2){
	return Getal1 - Getal2
}

function Vermenigvuldigen(Getal1, Getal2){
	return Getal1 * Getal2
}

function Delen(Getal1, Getal2){
	return Getal1 / Getal2
}

document.write("Oefening:  4 functies (+, -, *, /) + 2 parameters" + '<br>' + '<br>');
document.write("Getal 1: 5" + '<br>' + "Getal 2: 10" + '<br>' + '<br>');
document.write("Optellen: " + Optellen(5,10) + '<br>');
document.write("Aftrekken: " + Aftrekken(5,10) + '<br>');
document.write("Vermenigvuldigen: " + Vermenigvuldigen(5,10) + '<br>');
document.write("Delen: " + Delen(5,10) + '<br>' + '<br>' + '<br>');	

// Oefening:  Prototype voor rekenmachine
function Rekenmachine(){
	this.Getal1 = 5;
	this.Getal2 = 0;
	this.Resultaat;
	
	this.Optellen = function(){
		Resultaat = this.Getal1 + this.Getal2;
		return Resultaat;
	}
	
	this.Aftrekken = function(){
		Resultaat = this.Getal1 - this.Getal2;
		return Resultaat;
	}
	
	this.Vermenigvuldigen = function(){
		Resultaat = this.Getal1 * this.Getal2;
		return Resultaat;
	}
	
	this.Delen = function(){
		// Divide By Zero vermijden
		if(Getal2 != 0){
			Resultaat = this.Getal1 / this.Getal2;
		}
		else{
			Resultaat = 0
		}
	return Resultaat;	
	}
}

var rekenmachine = new Rekenmachine();
var Uitkomst;
	
document.write("Oefening:  Prototype voor rekenmachine" + '<br>' + '<br>');
document.write("Getal 1: " + rekenmachine.Getal1 + '<br>' + "Getal 2: " + rekenmachine.Getal2 + '<br>' + '<br>');
Uitkomst = rekenmachine.Optellen();
document.write("Optellen: " + Uitkomst + '<br>');
Uitkomst = rekenmachine.Aftrekken();
document.write("Aftrekken: " + Uitkomst + '<br>');
Uitkomst = rekenmachine.Vermenigvuldigen();
document.write("Vermenigvuldigen: " + Uitkomst + '<br>');
Uitkomst = rekenmachine.Delen();
document.write("Delen: " + Uitkomst + '<br>' + '<br>' + '<br>');

// Oefening: rekenmachine met behulp van Array

// Deze oplossing is van stackoverflow: http://stackoverflow.com/questions/24094466/javascript-sum-two-arrays-in-single-iteration
var Array1 = [5, 10];
var Array2 = [10, 20];

// Add a SumArray method to all arrays by expanding the Array prototype(do this once in a general place)
Array.prototype.SomArray = function (arr) {
    var Resultaat = [];
    if (arr != null && this.length == arr.length) {
        for (var i = 0; i < arr.length; i++) {
            Resultaat.push(this[i] + arr[i]);
        }
    }
    return Resultaat;
}

Array.prototype.AftrekkenArray = function (arr) {
    var Resultaat = [];
    if (arr != null && this.length == arr.length) {
        for (var i = 0; i < arr.length; i++) {
            Resultaat.push(this[i] - arr[i]);
        }
    }
    return Resultaat;
}

Array.prototype.VermenigvuldigenArray = function (arr) {
    var Resultaat = [];
    if (arr != null && this.length == arr.length) {
        for (var i = 0; i < arr.length; i++) {
            Resultaat.push(this[i] * arr[i]);
        }
    }
    return Resultaat;
}

Array.prototype.DelenArray = function (arr) {
    var Resultaat = [];
    if (arr != null && this.length == arr.length) {
        for (var i = 0; i < arr.length; i++) {
            Resultaat.push(this[i] / arr[i]);
        }
    }
    return Resultaat;
}

var Optellen = Array1.SomArray(Array2);
var Aftrekken = Array1.AftrekkenArray(Array2);
var Vermenigvuldigen = Array1.VermenigvuldigenArray(Array2);
var Delen = Array1.DelenArray(Array2);

document.write("Oefening: rekenmachine met behulp van Array" + '<br>' + '<br>');
document.write("De waarden bij de 1st array: " + Array1 + '<br>');
document.write("De waarden bij de 2de array: " + Array2 + '<br>' + '<br>');
document.write("Optellen: " + Optellen + '<br>');
document.write("Aftrekken: " + Aftrekken + '<br>');
document.write("Vermenigvuldigen: " + Vermenigvuldigen + '<br>');
document.write("Delen: " + Delen + '<br>');