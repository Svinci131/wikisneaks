var mispellings = {
	"you're": "your", 
	"their": "there", 
	"there": "their", 
	"restaurant": "restraunt", 
	"receive": "recieve"
}

function messWithNums (word, text, cleaned, i) {
	if (!isNaN(cleaned)) {
		var newNum = alterNum(i, text, cleaned);
		newNum = replaceEl (word, cleaned, newNum);
		if(!isNaN(newNum)) return newNum;		
	}
}

function mispell(word, cleaned) {
	if (mispellings[cleaned]) {
		var newWord = replaceEl (word, cleaned, mispellings[cleaned]);
		return newWord;
	}
	else {
		return word;
	}
}

function messWithNumbers () {
	var body = document.getElementById('mw-content-text');
	var els = body.childNodes;

	for (var i = 0; i < els.length; i++) {
		var el = els[i];
		var text = el.innerHTML ? el.innerHTML.split(' ') : [];
		/////
		var newText = [];
		//check each word
		text.forEach(function(word, i){
			if (word.length) {
				var cleaned = clean(word);
				var alteredNum = messWithNums(word, text, cleaned, i); 
				if (alteredNum) newText.push(alteredNum);
				else {
					word = mispell(word, cleaned);
					newText.push(word);
				}	
			}
				
		});

		if (newText.length) el.innerHTML = newText.join(' ');
	}

}
