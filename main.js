getCredentials(); 
var mainImage = getMainImageSrc(); 
var accessToken = localStorage.getItem('accessToken');
getImageTags();
messWithNumbers ()


function getImageTags () {
	postImage(mainImage)
	.then(function(tags) {
		console.log(tags)
		getSimilarImages()
	});
}

function isDate (string) {
	var months = {
		January: 31, 
		February: 28,
		March: 31,
		April: 30,
		May: 31,
		June: 30,
		July: 31,
		August: 31,
		September: 30,
		October: 31,
		November: 30,
		December: 31 
	}
	if (months[string]) return true
	else return false
}

function messWithNumbers () {
	var body = document.getElementById('mw-content-text')
	var els = body.childNodes

	for(var i = 0; i < els.length; i++) {
		var el = els[i]
		var text = el.innerHTML ? el.innerHTML.split(" ") : [];
		var newText = []; 
		text.forEach(function(word, i){
			if (!isNaN(word)) {
				var monthCheck = text[i-2]
				var newNum = parseInt(word)+10
				newText.push(newNum)
			}
			else {
				newText.push(word)
			}
		});

		if (newText.length) el.innerHTML = newText.join(" ")
	}	
}