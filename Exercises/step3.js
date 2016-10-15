 
var bounds;
var finish;

window.onload = function() {
 
     bounds = document.querySelectorAll(".boundary");
	 finish = document.getElementById("end");
	 finish.onmouseover = winner;
	 
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




