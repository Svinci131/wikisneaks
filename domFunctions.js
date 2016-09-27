function replaceImage(image, url) {
	document.querySelector("a.image > img").src=url;
	document.querySelector("a.image > img").srcset=url;
	document.querySelector("a.image > img").style.display="block";
	document.querySelector("a.image > img").style.width="auto";
	document.querySelector("a.image > img").style.height="auto";
	document.querySelector("a.image > img").style.margin="0 auto";
}

