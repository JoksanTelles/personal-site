//Get the button
var backToTop = document.getElementById("backToTop");

// Activate both functions
window.onscroll = function() {
	// Add and remove class to header to change color from navigation bar
	navbarTransparent();
	// When the user scrolls down 20px from the top of the document, show the button
	scrollFunction();
}



/*-------------------------------------------------
 # Back to top
-------------------------------------------------*/
function scrollFunction() {
  if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
    backToTop.style.display = "block";
  } else {
    backToTop.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}



/*-------------------------------------------------
 # Navigation bar effect
-------------------------------------------------*/

// Add and remove class to header to change color from navigation bar
const header = document.querySelector('#header');

function navbarTransparent() {
	var top = window.scrollY;
	console.log(top);
	if (top >= 150){
		header.classList.add('navbar-transparent')
	}else{
		header.classList.remove('navbar-transparent');
	}
}