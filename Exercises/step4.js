var bounds;
var begin;
var finish;

window.onload = function() {
 
     bounds = document.querySelectorAll(".boundary");
	 finish = document.getElementById("end");
	 finish.onmouseover = winner;
	 
	 begin = document.getElementById("start");
     begin.onclick = restart;
	 
     for (var x = 0; x < bounds.length; x++) {
 		bounds[x].onmouseover = loser;
 	}
}

function loser(){

		for (var x = 0; x < bounds.length; x++) {
			bounds[x].className = "boundary youlose";
		}
}
		
 
function winner(){
		alert("You Win!");
}

function restart(){
	for (var x = 0; x < bounds.length; x++) {
		bounds[x].className = "boundary";
	}
}
