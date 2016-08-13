

// document.querySelectorAll("h1")[0].innerHTML = "my text"


//Function that search dom and get all image links
//Function that uses the api gets tags
	//Gets similar images
//Replaces

getCredentials(function() {
  console.log('got credentials');
});
var mainImage = getMainImageSrc();
var accessToken = localStorage.getItem('accessToken');

messWithNumbers();

function getImageTags () {
	return postImage(mainImage)
	.then(function(tags) {
    return tags;
	});
}

// console.log(document.querySelector("a.image > img"));
// document.querySelector("a.image > img").src="https://www.placecage.com/200/300"
// document.querySelector("a.image > img").srcset="https://www.placecage.com/200/300"

getImageTags()
.then(getFlickrId)
.then(getFlickrImageUrl).then(function(url){
  replaceImage(foundImage, url);
});




//get images from tags

function getFlickrId (tagArr){
    var tagString = tagArr.join('%2C+');
    var method = 'flickr.photos.search';
    var flickrUrl = 'https://api.flickr.com/services/rest/';
    var api_key = 'e7b4710e9ea3c0d71fee1d0ec25a5f37';
    var format = 'json';
    var callback = 1;
    var url = flickrUrl
    + '?method=' + method
    + '&api_key=' + api_key
    + '&tags=' + tagString
    + '&format=' + format
    + '&nojsoncallback=' + callback;
    return axios.get(url)
    .then(function(r) {
      var imgId = r.data.photos.photo[0].id;
      console.log('imgId', imgId);
      return imgId;
    }, function(err){
      console.log("There's an error: " + err);
    });

	}


function isDate (string) {
  if(!string) return false;
	string = string.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, '');
	var months = {
		january: 31,
		february: 28,
		march: 31,
		april: 30,
		may: 31,
		june: 30,
		july: 31,
		august: 31,
		september: 30,
		october: 31,
		november: 30,
		december: 31
	};
	if (months[string.toLowerCase()]) return true;
	else return false;
}

function messWithNumbers () {
	var body = document.getElementById('mw-content-text');
	var els = body.childNodes;

	for (var i = 0; i < els.length; i++) {
		var el = els[i];
		var text = el.innerHTML ? el.innerHTML.split(' ') : [];
		var newText = [];
		text.forEach(function(word, i){
			if (!isNaN(word)) {
				var monthCheck = text[i - 2];
				var newNum;
				if (isDate(monthCheck)) {
					newNum = parseInt(word) + 10;
				}
				else {
					var amount = Math.pow(10, word.length - 1);
					newNum = parseInt(word) + amount;
				}
				newText.push(newNum);
			}
			else {
				newText.push(word);
			}
		});

		if (newText.length) el.innerHTML = newText.join(' ');
	}

}

// https://api.flickr.com/services/rest/?method=flickr.photos.getInfo&api_key=3bc2eb107650c442ed3c64a9ca0ef2a4&photo_id=hello&format=json&nojsoncallback=1
function getFlickrImageUrl (photo_id) {
  var flickrUrl = 'https://api.flickr.com/services/rest/';
  var api_key = 'e7b4710e9ea3c0d71fee1d0ec25a5f37';
  var method = 'flickr.photos.getInfo';
  var format = 'json';
  var callback = 1;
  var url = flickrUrl
    + '?method=' + method
    + '&api_key=' + api_key
    + '&photo_id=' + photo_id
    + '&format=' + format
    + '&nojsoncallback=' + callback;
  console.log(url);
  return axios.get(url)
  .then(function(r) {
    var imgUrl = r.data.photo.urls.url[0]._content;
    console.log('imgUrl', r.data.photo.urls.url[0]._content);
    return imgUrl;
  }, function(err) {
    console.log('Sorry, something is wrong: ' + err);
  });
}
