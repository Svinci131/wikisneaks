///var header = document.querySelectorAll("h1")[0].innerHTML = "my text"
document.querySelectorAll('h1')[0].innerHTML = 'my text';

//this finds the main image on a wikipedia page
var foundImage = document.querySelector("a.image > img")
//replace that image's source with a new source'
function replaceImage(image, url){
	image.src = url;
	image.srcset = url
}




//(el, url)
function replaceAnImage() {}

function replaceAllImages() {
	//for each image replace tag 
}

