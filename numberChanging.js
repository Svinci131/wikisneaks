
function isDate (string) {
	if (!string) return false
	string = string.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, '');
	var months = {
		january: 31,
		february: 28,
		march: 31,
		april: 30,
		may: 31,
		june: 30,
		july: 31,
		august: 31,
		september: 30,
		october: 31,
		november: 30,
		december: 31 
	}
	if (months[string.toLowerCase()]) return true
	else return false
}

function messWithNumbers () {
	var body = document.getElementById('mw-content-text');
	var els = body.childNodes;

	for (var i = 0; i < els.length; i++) {
		var el = els[i];
		var text = el.innerHTML ? el.innerHTML.split(' ') : [];
		var newText = [];
		text.forEach(function(word, i){
			if (!isNaN(word)) {
				var monthCheck = text[i-2];
				var wordBefore = text[i-1]
				var newNum;
				if (isDate(monthCheck, wordBefore)) {
					newNum = parseInt(word)+10
					var d = new Date();
					var currentYear = d.getFullYear();
					if (newNum > currentYear) {
						newNum-=20;
					}
				}
				else {
					var amount = Math.pow(10, word.length - 1);
					newNum = parseInt(word) + amount;
				}
				newText.push(newNum);
			}
			else {
				if (word === "you're") newText.push("your");
				else if (word === "there") newText.push("thier");
				else if (word === "restaurant") newText.push("restraunt");
				newText.push(word);
			}
		});

		if (newText.length) el.innerHTML = newText.join(' ');
	}

}
