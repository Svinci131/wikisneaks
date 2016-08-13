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
// var newDiv = document.createElement("div"); 
// foundImage.src = "http://www.animalplanet.com/breed-selector/dog-breeds.html"
// foundImage.srcset  = "http://www.animalplanet.com/breed-selector/dog-breeds.html"
// console.log(foundImage)

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
