
// document.querySelectorAll("h1")[0].innerHTML = "my text"


//Function that search dom and get all image links
//Function that uses the api gets tags
	//Gets similar images
//Replaces

getCredentials(function() {
  console.log("got credentials");
});
var mainImage = getMainImageSrc();
var accessToken = localStorage.getItem('accessToken');
getImageTags ()
function getImageTags () {
	postImage(mainImage)
	.then(function(tags) {
		console.log(tags)
	});
}
// https://api.flickr.com/services/rest/?method=flickr.photos.getInfo&api_key=3bc2eb107650c442ed3c64a9ca0ef2a4&photo_id=hello&format=json&nojsoncallback=1
getFlickrImageUrl(28338354024);
function getFlickrImageUrl (photo_id) {
  var flickrUrl = "https://api.flickr.com/services/rest/";
  var api_key = "e7b4710e9ea3c0d71fee1d0ec25a5f37";
  var method = "flickr.photos.getInfo";
  var format = "json";
  var callback = 1;
  var url = flickrUrl
    + "?method=" + method
    + "&api_key=" + api_key
    + "&photo_id=" + photo_id
    + "&format=" + format
    + "&nojsoncallback=" + callback;
  console.log(url);
  return axios.get(url)
  .then(function(r) {
    var imgUrl = r.data.photo.urls.url[0]._content;
    console.log("imgUrl", r.data.photo.urls.url[0]._content);
    return imgUrl;
  }, function(err) {
    console.log('Sorry, something is wrong: ' + err);
  });
}
