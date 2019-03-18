// wrap code in jquery wrapper ref

$(document).ready(function() {

// define object + its array
var magic8Ball = {};

magic8Ball.listOfAnswers = ["It is certain", "It is decidedly so", "Outlook good", "Cannot predict now", "Reply hazy; try again", "Signs point to yes", "Ask again later"];

// define the method
magic8Ball.askQuestion = function(question) {

	// create a random number
	var randomNumber = Math.random();

	// random number between 0 and array total
	var randomNumberForListOfAnswers =
	randomNumber * this.listOfAnswers.length;

	// round down for a whole number
	var randomIndex =
	Math.floor(randomNumberForListOfAnswers);

	//use that # to pick an answer from array
	var answer =
	this.listOfAnswers[randomIndex];

	$("#answer").text(answer);

	console.log(question);
	console.log(answer);

};

// input a ? when function is called
// magic8Ball.askQuestion("Will my cat demand more food today?");

var onClick = function() {
	var question = prompt("ASK A YES/NO QUESTION!");

	magic8Ball.askQuestion(question);
};

$("#questionButton").click(onClick);

});     // end jquery wrapper ref
