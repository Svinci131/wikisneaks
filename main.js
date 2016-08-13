_ini();

function _ini(){

    document.getElementsByTagName("html")[0].style.visibility = "hidden"

    window.onload=function(){
    	var mainImage = getMainImageSrc();

		getCredentials();
		messWithNumbers();

		document.querySelector("a.image > img").style.height="0px";

		postImage(mainImage)
		.then(function(tags) {
		  var truncTags = tags.slice(0,5) || tags;
		  //remove adult for obvious reasons
		  var adult = truncTags.indexOf("adult")
		  truncTags.splice(adult, 1)
		  return getBingData(truncTags);
		})
		.then(function(url){
		  replaceImage(foundImage, url);
		  document.querySelector("a.image").style.visibility = "initial"
		})
		.catch(function (err) {
		  console.log(err)
		});

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
		  	});
		}
        //do your stuff
        
       //document.getElementsByTagName("html")[0].style.display="block"; //to show it all back again

    }

}
// (function() {
// 	document.querySelector("a.image").style.visibility = "hidden"
// })()
// // window.onload = function () {
// var mainImage = getMainImageSrc();

// getCredentials();
// messWithNumbers();


// document.querySelector("a.image > img").style.height="0px";

// postImage(mainImage)
// .then(function(tags) {
//   var truncTags = tags.slice(0,5) || tags;
//   //remove adult for obvious reasons
//   var adult = truncTags.indexOf("adult")
//   truncTags.splice(adult, 1)
//   return getBingData(truncTags);
// })
// .then(function(url){
//   replaceImage(foundImage, url);
// })
// .catch(function (err) {
//   console.log(err)
// });

// function isPainting (tags) {
// 	var paintingWords = {
// 		"art": true, 
// 		"painting": true
// 	}
// 	for(var i = 0; i < tags.length; i++) {
// 		if (paintingWords[tags[i]]) return true
// 	}
// 	return false
// }

// function getBingData (tags) {
// 	var url = "https://api.cognitive.microsoft.com/bing/v5.0/images/search?q="
//   + tags.join(", ")
//   + ", &count=1&offset=0&mkt=en-us&safeSearch=Moderate"
//   console.log("------------------------------")
//   console.log(url)
//   console.log("------------------------------")
// 	return axios.get(url, {
//     headers: {
//       "Ocp-Apim-Subscription-Key": "3fc3d83a1e7c44bca46c097afcaeb748"
//     }
//   })
//   	.then(function(r) {
//   		console.log("cats!", r.data.value[0]);
//   		return r.data.value[0].thumbnailUrl
//   	});
// }

