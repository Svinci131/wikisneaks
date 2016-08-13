///var header = document.querySelectorAll("h1")[0].innerHTML = "my text"
// document.querySelectorAll('h1')[0].innerHTML = 'my text';

//this finds the main image on a wikipedia page
var foundImage = document.querySelector("a.image > img")

function getMainImageSrc () {
	return foundImage.src
}
//replace that image's source with a new source'
function replaceImage(image, url){
  document.querySelector("a.image > img").src=url;
  document.querySelector("a.image > img").srcset=url;
 //  console.log("image to be replaced", image);
 //  console.log("replacing human");
	// image.src = url;
	// image.srcset = url
}


