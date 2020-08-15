// Social media sharing buttons

// Initial configuration
var enlace = window.location.href;
var facebook = "https://www.facebook.com/sharer/sharer.php?u=";
var twitter = "https://twitter.com/share?url=";
var reddit = "https://www.reddit.com/submit?url=";
var whatsapp = "https://wa.me/?text=";

// Function
function socialShare() {

	// Facebook
	document.getElementById("sm-facebook").setAttribute("href",facebook.concat(enlace));
	// Twitter
	document.getElementById("sm-twitter").setAttribute("href",twitter.concat(enlace));
	// Reddit
	document.getElementById("sm-reddit").setAttribute("href",reddit.concat(enlace));
	// WhatsApp
	document.getElementById("sm-whatsapp").setAttribute("href",whatsapp.concat(enlace));
	// Website link on Copy to Clipboard
	document.getElementById("copy-text").setAttribute("value",enlace);
}

// Execute my function
socialShare();