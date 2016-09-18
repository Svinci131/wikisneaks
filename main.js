_ini();

function _ini(){
    //hide page
    var html = document.getElementsByTagName("html")[0]
    html.style.visibility="hidden";
    
    window.onload = function(){

      var mainImage = document.querySelector("a.image > img");
      messWithNumbers();  

      //get clarify creditentials
      getCredentials();

      postImage(mainImage.src)
      .then(function(tags) {
        //use top five tags //remove adult for obvious reasons
        //weight specific tags
        var truncTags = tags.slice(0,5) || tags;
        var adult = truncTags.indexOf("adult");
        truncTags.splice(adult, 1);
        return getBingData(truncTags);

      })
      .then(function(url){
        replaceImage(mainImage, url);
        //show page after we've altered everything
        html.style.visibility="initial";
      })
      .catch(console.error);
    }

}