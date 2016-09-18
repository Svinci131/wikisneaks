function getBingData (tags) {
    var url = "https://api.cognitive.microsoft.com/bing/v5.0/images/search?q="
    + tags.join(", ")
    + ", &count=1&offset=0&mkt=en-us&safeSearch=Moderate"
    return axios.get(url, {
      headers: {
        "Ocp-Apim-Subscription-Key": "3fc3d83a1e7c44bca46c097afcaeb748"
      }
    })
    .then(function(r) {
      return r.data.value[0].thumbnailUrl
    })
}

function isPainting (tags) {
  var paintingWords = {
    "art": true,
    "painting": true
  }
  for(var i = 0; i < tags.length; i++) {
    if (paintingWords[tags[i]]) return true
  }
  return false
}


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
