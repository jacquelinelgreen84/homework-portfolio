$(document).ready(){
	event.preventDefault();

	var cities = ["LA", "NYC", "SF", "ATX", "SYD"]

	for (var i = 0; i < cities.length; i++) {
	
	$("city-type").append('<option value="' + cities[i]+ '">'+cities[i]+ '</option>');
	}
	$("form").change(function(){
		var city = $("#city-type").val();

		if(city == "NYC"){
			$("body").attr("class", "nyc");
		}

		else if( city == "SF"){
			$("body").attr("class", ".sf");
		}
		else if (city == "LA"){
			$("body").attr("class", ".la");
		}
		else if (city == "ATX"){
			$("body").attr("class", ".austin")
		}
		else if(city == "SYD"){
			$("body").attr("class", "sydney");
		}
	}

	})
}
