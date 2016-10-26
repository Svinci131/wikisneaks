_init();

function _init(){
    //hide page
    var html = document.getElementsByTagName("html")[0]
    html.style.visibility="hidden";
    
    window.onload = function() {
      var mainImage = document.querySelector("a.image > img");
      messWithNumbers();  
      //get clarify creditentials
      getCredentials();
      postImage(mainImage.src)
      .then(function(tags) {
        //use top five tags //remove adult for obvious reasons
        //weight specific tags
        truncTags = weightTags(tags)
        return getBingData(truncTags);
      })
      .then(function(url){
        replaceImage(mainImage, url);
        //show page after we've altered everything
        html.style.visibility="initial";
      })
      .catch(console.error);
    };

}