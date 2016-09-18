_ini();
function _ini(){

    document.getElementsByTagName("html")[0].style.visibility="hidden";
    
    window.onload = function(){

      var mainImage = document.querySelector("a.image > img");

      getCredentials();
      messWithNumbers();  


      postImage(mainImage.src)
      .then(function(tags) {
        var truncTags = tags.slice(0,5) || tags;
        //remove adult for obvious reasons
        var adult = truncTags.indexOf("adult")
        truncTags.splice(adult, 1)
        return getBingData(truncTags);
      })
      .then(function(url){
        replaceImage(mainImage, url);
        document.getElementsByTagName("html")[0].style.visibility="initial";
      })
      .catch(function (err) {
        console.log(err)
      });

      //replace that image's source with a new source'
      function replaceImage(image, url) {

        document.querySelector("a.image > img").src=url;
        document.querySelector("a.image > img").srcset=url;
        document.querySelector("a.image > img").style.display="block";
        document.querySelector("a.image > img").style.width="auto";
        document.querySelector("a.image > img").style.height="auto";
        document.querySelector("a.image > img").style.margin="0 auto";
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
      		console.log("cats!", r.data.value[0]);
      		return r.data.value[0].thumbnailUrl
      	})
      }
    }

}