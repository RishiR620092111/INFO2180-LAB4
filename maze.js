
var bounds;
var begin;
var result;
var finish;
var limit = false;
var complete = false;


window.onload = function() {

		bounds = document.querySelectorAll(".boundary");
		begin = document.getElementById("start");
		result = document.getElementById("status");
		finish = document.getElementById("end");

		begin.onclick = restart;
		
		finish.onmouseover = winner;
		
		for (var x = 0; x < bounds.length; x++) { 
			bounds[x].onmouseover = loser;
		}
}

function loser(){ 

	if (!complete){ 
		if(!limit)
		{
			limit = true;
			
			result.innerText = 'Sorry, you lose! Click on "S" to restart game.';
			
			for (var x = 0; x < bounds.length; x++) {
				bounds[x].className = "boundary youlose";
			}
		}
	}
}

function winner(){
	
		if(!limit){ 
			complete = true;
			
			result.innerText = 'Yay, you won! Click on "S" to restart game.';
		}

}

function restart(){
	
	    limit = false;
		
		complete = false;
		
		result.innerText = 'Move your mouse over the "S" to start game.';	
		
		for (var x = 0; x < bounds.length; x++) {
			bounds[x].className = "boundary";
	}
}

