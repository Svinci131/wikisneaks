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

function replaceNum (content, oldNum, newNum) {
	var reg = new RegExp(oldNum, "i");
	return content.replace(reg, newNum);
}

function getCurrentYear () {
	return new Date().getFullYear();
}

function monthCheck(string) {
	if (!string) return false;
	string = string.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, '');
	if (months[string.toLowerCase()]) return true;
	else return false;
}

function isDate (i, text) {
	//check next for dates
	var last = clean(text[i-1]);
	var secToLast = clean(text[i-2]);
	//if Jan 31 // 2016 January 31
	if (monthCheck(secToLast) || monthCheck(last)) return true;
	//word check 
	if (last == "in" || last == "from" ) return true; 
}

//(int, str) => int;
function alterNum (i, text, currNum) {
	var word = currNum;
	if (isDate(i, text)) {
		return parseInt(word)+10;
	} 
	else {
		var amount = Math.pow(10, word.length - 1);
		return parseInt(word) + amount;
	}
}
