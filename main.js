
// document.querySelectorAll("h1")[0].innerHTML = "my text"


//Function that search dom and get all image links 
//Function that uses the api gets tags 
	//Gets similar images
//Replaces

getCredentials(); 
var mainImage = getMainImageSrc(); 
var accessToken = localStorage.getItem('accessToken');
getImageTags ()
function getImageTags () {
	postImage(mainImage)
	.then(function(tags) {
		console.log(tags)
	});
}

function getSimilarImage () {
	
}