

function isListFizzOrBuzz(array){
	var fizz =0;
	var buzz = 0;
	var fizzbuzz = 0;

	array.forEach(function(element){
		if(fizzBuzz(element)==="fizzbuzz"){
			fizzbuzz++;
		}else if (fizzBuzz(element)==="buzz"){
			buzz++;
		}else if (fizzBuzz(element)==="fizz"){
			fizz++;
		}
	});

	if (Math.max(fizz,buzz,fizzbuzz) === fizz){
		return "fizz";
	}else if (Math.max(fizz,buzz,fizzbuzz) === buzz){
		return "buzz";
	}else if (Math.max(fizz,buzz,fizzbuzz) === fizzbuzz){
		return "fizzbuzz";
	};
}

function fizzBuzz(number){
	if(number % 3 ===0 && number %5 ===0){
		return "fizzbuzz";
	}else if(number % 3 ===0){
		return "fizz";
	}else if (number % 5 ===0){
		return "buzz";
	};
}