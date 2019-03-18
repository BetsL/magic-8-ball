// wrap code in jquery wrapper ref

$(document).ready(function() {

		// create object
		var magic8Ball = {};
		$("#answer").hide();		// using jquery to hide the answer when the page loads


		// initialize array of answers
		magic8Ball.listOfAnswers = ["It is certain", "It is decidedly so", "Outlook good", "Cannot predict now", "Reply hazy; try again", "Signs point to yes", "Ask again later"];


		// define the method - ask question function - generate a random # from array
		magic8Ball.askQuestion = function(question) {
			// create a random number
			var randomNumber = Math.random();
			// random number between 0 and array total
			var randomNumberForListOfAnswers = randomNumber * this.listOfAnswers.length;
			// round down for a whole number
			var randomIndex = Math.floor(randomNumberForListOfAnswers);
			//use that # to pick an answer from array
			var answer = this.listOfAnswers[randomIndex];


			$("#answer").text( answer );
      $("#answer").hide();
      $("#answer").fadeIn(4000);
      $("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/magic8ballAnswer.png");


			// logging now (?)
			console.log(question);
			console.log(answer);
};


			//defines what happens when the button is clicked
    			var onClick = function() {
        			var question = prompt("ASK A YES/NO QUESTION!");
        			//passes the user-entered "question" into the method askQuestion
        			magic8Ball.askQuestion(question);
          			setTimeout(function() {
            			$("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/answerside.png");
        			}, 0500);
        			$("#8ball").effect("shake");
    			};

					$("#questionButton").click(onClick);

});     // end jquery wrapper ref
