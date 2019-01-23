var random_result;
var lost = 0;
var win = 0;
var previous = 0;


var resetAndStart = function () {

	$(".crystals").empty();

	var images = [
			'../unit-4-game/assets/images/crystal1.jpg', 
			'../unit-4-game/assets/images/crystal2.jpg', 
			'../unit-4-game/assets/images/crystal3.jpg', 
			'../unit-4-game/assets/images/crystal4.jpg'];
		
	random_result = Math.floor(Math.random() * 101 ) + 19; 


	$(".result").html('' + random_result);

	for(var i = 0; i < 4; i++){

		var random = Math.floor(Math.random() * 11) + 1;

		var crystal = $("<div>");
			crystal.attr({
				"class": 'crystal',
				"data-random": random
			});
			crystal.css({
				"background-image":"url('" + images[i] + "')",
				"background-size":"cover"

			});


		$(".crystals").append(crystal);

	}

	$(".previous").html('Total Score:'+ previous );
	$(".lost").html('Losses:'+ lost );
	$(".win").html('Wins:'+ win );

}


resetAndStart();



$(document).on('click', ".crystal", function () {

	var num = parseInt($(this).attr('data-random'));

	previous += num;


	$(".previous").html('Total score:'  + previous);

	console.log(previous);

	if(previous > random_result){

		lost++;

		$(".lost").html('Losses:'  + lost);

        previous = 0;
        

		resetAndStart();

	} 
	else if(previous === random_result){

		win++;

		$(".win").html('Wins:'+ win);

		previous = 0;

		resetAndStart();

	}

});