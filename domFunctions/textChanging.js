function messWithNums (word, text, cleaned, i) {
	if (!isNaN(cleaned)) {
		var newNum = alterNum(i, text, cleaned);
		newNum = replaceNum (word, cleaned, newNum);
		if(!isNaN(newNum)) return newNum;		
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
					if (word === "you're") newText.push("your");
					else if (word === "there") newText.push("their");
					else if (word === "restaurant") newText.push("restraunt");
					else if (word === "receive") newText.push("recieve");
					else newText.push(word);
				}
			}

			// if (!isNaN(cleaned)) {
			// 	var newNum = "8";
			// 	var newNumTest = alterNum(i, text, cleaned);
			// 	newNum = replaceNum (word, cleaned, newNum);
				//console.log(newNumTest, cleaned)
				

				// var monthCheck = text[i-2];
				// var newNum;

				// if (isDate(monthCheck)) {
				// 	newNum = parseInt(word)+10
				// 	var d = new Date();
				// 	var currentYear = d.getFullYear();
				// 	if (newNum > currentYear) {
				// 		newNum-=20;
				// 	}
				// }

				// else {
				// 	var amount = Math.pow(10, word.length - 1);
				// 	newNum = parseInt(word) + amount;
				// }
				
		});

		if (newText.length) el.innerHTML = newText.join(' ');
	}

}
