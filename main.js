getCredentials(function() {});

var mainImage = getMainImageSrc();
var accessToken = localStorage.getItem('accessToken');

messWithNumbers();

function getImageTags () {
	return postImage(mainImage)
	.then(function(tags) {
    return tags;
	});
}

// function weight (arr, word) {
// 	var index = arr.indexOf(word)
// 	if (arr.indexOfWord > 0) {
// 		arr[0] = word; 
// 	}
// }
getImageTags()
.then(function(tags) {
  var truncTags = tags
  // var truncTags = tags.slice(0,5) || tags;
  var adult = truncTags.indexOf("adult")
  truncTags.splice(adult, 1)
 console.log(truncTags)
  return getFlickrId(truncTags)
})
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


getBingData();

function getBingData () {
	var url = "https://api.cognitive.microsoft.com/bing/v5.0/images/search?q=cats&bow&count=1&offset=0&mkt=en-us&safeSearch=Moderate"
	return axios.get(url, {
    headers: {
      "Ocp-Apim-Subscription-Key": "3fc3d83a1e7c44bca46c097afcaeb748"
    }
  })
  	.then(function(r) {
  		console.log("cats!", r.data.value[0].thumbnailUrl);

  	});
}

function getFlickrImageUrl (photo_id) {
  var flickrUrl = 'https://api.flickr.com/services/rest/';
  var api_key = 'e7b4710e9ea3c0d71fee1d0ec25a5f37';
  var method = 'flickr.photos.getSizes';
  var format = 'json';
  var callback = 1;
  var url = flickrUrl
    + '?method=' + method
    + '&api_key=' + api_key
    + '&photo_id=' + photo_id
    + '&format=' + format
    + '&nojsoncallback=' + callback;
  return axios.get(url)
  .then(function(r) {
    console.log(r);
    var sizeArr = r.data.sizes.size;
    var imgUrl = sizeArr[Math.floor(sizeArr.length / 2)].source;
    console.log('imgUrl', imgUrl);
    return imgUrl;
  }, function(err) {
    console.log('Sorry, something is wrong: ' + err);
  });
}
