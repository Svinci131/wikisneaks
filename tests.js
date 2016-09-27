//strip punctuation 
console.log("HERE", stripPuncuation("2016),"));

function isPunc(char) {
	return char.match(/[.,\<>/#!$%\^&\*;:{}=\-_`~()]/i)
}

function stripPuncuation (word) {
	var start = null,
		end = null, 
		char;
	for(var i = 0; i <word.length; i++) {
		char = word[i];

		if (start === null) {
			
			if (!isPunc(char)) {
				console.log("start2", char, isPunc(char))
				start = i;
			}
		}
		else {
			if (end === null) {
				if(isPunc(char)) {
					console.log("startend", char, isPunc(char))
					end = i;
				}
			}
		}
	}
	console.log(start, end)
	word = word.slice(start, end)
	return word
}