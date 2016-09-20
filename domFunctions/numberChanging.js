var months = {
	january: 31,
	jan: 31,
	february: 28,
	feb: 28,
	march: 31,
	april: 30,
	may: 31,
	june: 30,
	july: 31,
	august: 31,
	aug: 31,
	september: 30,
	sept: 30,
	october: 31,
	oct: 31,
	november: 30,
	nov: 30,
	december: 31,
	dec: 31
};


function stripPunc(word){
	return word.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, '');
}

function parseTag(str) {
	return str.replace(/<\/?[^>]+(>|$)/g,"")
}

// console.log("WHAT?", parseTag("2016<span"));

function clean(str) {
	if (!str) return false
	else {
		str = str.toLowerCase();
		str = parseTag(str);
		return stripPunc(str);
	};
}
function replaceNum (content, oldNum, newNum) {
	var reg = new RegExp(oldNum, "i");
	return content.replace(reg, newNum);
}

function getCurrentYear () {
	var today = new Date();
	return today.getFullYear();
}

//str => bool
function monthCheck(string) {
	if (!string) return false
	string = string.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, '');
	if (months[string.toLowerCase()]) return true
	else return false
}

//(str) => bool
function isDate (i, text) {
	var last = clean(text[i-1]);
	var secToLast = clean(text[i-2]);
	//if Jan 31 // 2016 January 31
	if (monthCheck(secToLast) || monthCheck(last)) return true;
	//word check 
	if (last == "in" || last == "from" ) return true; 
}

function alterNum (i, text) {
	var word = text[i];
	if (isDate(i, text)) return parseInt(word)+10;
	else {
		var amount = Math.pow(10, word.length - 1);
		return parseInt(word) + amount;
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
			var cleaned = clean(word);

			if (!isNaN(cleaned)) {
				var newNum = "25";

				console.log("-----------------");
				console.log("cleaned", cleaned);
				console.log("word", word);
				console.log(replaceNum (word, cleaned, newNum));
				console.log("-----------------");
					
					newNum = replaceNum (word, cleaned, newNum)
				//var newNum = alterNum(i, text);
					//newNum = replaceNum (word, cleaned, newNum); 
				newText.push(newNum);

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
				
			}
			else {
				if (word === "you're") newText.push("your");
				else if (word === "there") newText.push("their");
				else if (word === "restaurant") newText.push("restraunt");
				else if (word === "receive") newText.push("recieve");
				else newText.push(word);
			}
		});

		if (newText.length) el.innerHTML = newText.join(' ');
	}

}
