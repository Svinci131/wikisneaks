function replaceImage(image, url) {
	document.querySelector("a.image > img").src=url;
	document.querySelector("a.image > img").srcset=url;
	document.querySelector("a.image > img").style.display="block";
	document.querySelector("a.image > img").style.width="auto";
	document.querySelector("a.image > img").style.height="auto";
	document.querySelector("a.image > img").style.margin="0 auto";
}

//arr => arr
function weightTags (tags) {
	var truncTags = tags.slice(0,5) || tags;
    var adult = truncTags.indexOf("adult");
    truncTags.splice(adult, 1);
    return truncTags;
}
