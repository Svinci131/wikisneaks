This project was created for the Clarifiai "Robot Apocalypse" hackathon and took home "Most Secretly Evil". 

It's a chrome extension that claims to speed up your browser, but in reality it alters all numbers, mispells or replaces certain words (their becomes there, ect) and replaces images with very similar images. 
Numbers are altered according to their original size:

  "On 14 April 1912, four days into the crossing and about 375 miles (600 km) south of Newfoundland, [the Titanic] hit an iceberg"
  becomes: 
  "On 24 April 1912, four days into the crossing and about 475 miles (700 km) south of Newfoundland, [the Titanic] hit an iceberg"
  
 There are additional checks to make sure no dates are in the future and as we get closer to the present dates are altered less drastically, to make it obvious to our victims.
 
 We used the Clarifiai API to find classifying keys for the original images and the Flickr API to get new images. We implemented a simple system to weight certain keys. Man, Woman, Portrait come up a lot so they aren't that helpful for finding similar images, where as old, young, suit are much more useful. Eventually we would like to set up a more advanced system for decreasing the weight of the more frequent keys. 
 
