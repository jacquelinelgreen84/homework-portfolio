$(document).ready() {

	$("#submit-btn").click(function(event){

		event.prevenDefault();
		showCity();

function showCity(){

		var userInput = $("#city-type").val();
		
		var newYork = [ "new york", "nyc" ,"new york city" ,"New York", "NYC", "New York City"];
		var sanFranciso = [ "San Franncisco", "San Fran", "SF", "san francisco", "san fran", "sf"];
		var losAngeles = ["Los Angeles", "LA", "los angeles", "la"];
		var austin = ["Austin", "austin"];

		var sydney = ["Sydney", "sydney"];

		if (userInput = newYork[0] || userInput = newYork[1] || userInput = newYork[2] || userInput = newYork[3] || userInput = newYork[4] || userInput = newYork[5]){
			$("body").css("background-image", "url(../images/nyc");
		} else if (userInput = sanFranciso[0] || userInput = sanFranciso[1] || userInput = sanFranciso [2] || userInput = sanFranciso[3] || userInput = sanFranciso[4] || userInput = sanFranciso[5]){
			$("body").css("background-image", "url(../images/sf.jpg");
		} else if (userInput = losAngeles[0] ||userInput = losAngeles[1] || userInput = losAngeles[2] || userInput = losAngeles[3]){
			$("body").css("background-image", "url(../images/la.jpg");
		} else if (userInput = austin[1] || userInput = austin[2]){
			$("body").css("background-image", "url(../images/austin.jpg");
		} else if(userInput = sydney[1]|| userInput = sydney[2]){
			$("body").css("background-image", "url(../images/sydney.jpg");
		}


		}

	})
}