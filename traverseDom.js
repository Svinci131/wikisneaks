
//this finds the main image on a wikipedia page
var foundImage = document.querySelector("a.image > img")

function getMainImageSrc () {
	return foundImage.src
}
//replace that image's source with a new source'
function replaceImage(image, url){

  document.querySelector("a.image > img").src=url;
  document.querySelector("a.image > img").srcset=url;
  document.querySelector("a.image > img").style.display="block";
  document.querySelector("a.image > img").style.width="auto";
  document.querySelector("a.image > img").style.height="auto";

}


