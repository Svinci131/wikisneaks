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

function messWithNumbers () {
	var body = document.getElementById('mw-content-text')
	var els = body.childNodes

	for(var i = 0; i < els.length; i++) {
		var el = els[i]
		var text = el.innerHTML ? el.innerHTML.split(" ") : [];
		var newText = []; 
		text.forEach(function(word){
			if (!isNaN(word)) {
				var newNum = parseInt(word)+500
				newText.push(newNum)
				console.log(word, isNaN(word))
			}
			else {
				newText.push(word)
			}
		});

		if (newText.length) el.innerHTML = newText.join(" ")
	}

	

	console.log(els, els[3])
	//add 100 to all numbers greater then 100
	// for(var i = 0; i < paragraphs.length; i++) {
	// 	var newContent = [];
	// 	text = paragraphs[i].innerHTML.split(" "); 
	// 	text.forEach(function(word) {
	// 		// console.log(word, isNaN(word))
	// 		if (!isNaN(word)) {
	// 			console.log(word, isNaN(word))
	// 		}
	// 		else {
	// 			newContent.push(word);
	// 		}
	// 	});
	// 	newContent = newContent.join()
	// 	console.log(newContent)
	// 	paragraphs[i].innerHTML = newContent;
	// 	//only over 100
		
	// }
}
// function getSimilarImage () {
// 	var API_KEY = "fe03e6cf12d2f0ad16e81c15cc926317";
// 	var API_BASE = 'https://api.flickr.com/services/rest/';
// 	var method 	= 'flickr.photos.search',
// }

//http://developer.streak.com/2014/10/how-to-use-gmail-api-in-chrome-extension.html
//https://developers.google.com/image-search/v1/devguide


// OAuth client
// Here is your client ID
// 675415601767-59gk5fhqalir1n38q9o4vtamam6m7tmm.apps.googleusercontent.com
// Here is your client secret
// h5vwNPsxFREJZ7d_NcB4mEMB
// API key
// Here is your API key
// AIzaSyCOkaVMDvRtk7CuwBZhXE6gzedH-tx71Yg