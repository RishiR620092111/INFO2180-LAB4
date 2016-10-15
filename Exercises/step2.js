var bounds;

window.onload = function() {

		bounds = document.querySelectorAll(".boundary");
		for (var i = 0; i < bounds.length; i++) {
		bounds[i].onmouseover = changeBounds;
		}
}
 
function changeBounds(){

		for (var i = 0; i < bounds.length; i++) {
		bounds[i].className = "boundary youlose";
		}
 }
		

	
