var mainImage = getMainImageSrc();

getCredentials();
messWithNumbers();

postImage(mainImage)
.then(function(tags) {
  var truncTags = tags.slice(0,5) || tags;
  var adult = truncTags.indexOf("adult")
  truncTags.splice(adult, 1)
  return getBingData(truncTags);
})
.then(function(url){
  replaceImage(foundImage, url);
})
.catch(function (err) {
  console.log(err)
});

function getBingData (tags) {
	var url = "https://api.cognitive.microsoft.com/bing/v5.0/images/search?q="
  + tags.join(", ")
  + ", &count=1&offset=0&mkt=en-us&safeSearch=Moderate"
  console.log("------------------------------")
  console.log(url)
  console.log("------------------------------")
	return axios.get(url, {
    headers: {
      "Ocp-Apim-Subscription-Key": "3fc3d83a1e7c44bca46c097afcaeb748"
    }
  })
  	.then(function(r) {
  		console.log("cats!", r.data.value[0].thumbnailUrl);
  		return r.data.value[0].thumbnailUrl
  	});
}

