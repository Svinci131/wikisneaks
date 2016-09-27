function stripPunc(word){
	return word.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, '');
}

function parseTag(str) {
	return str.replace(/<\/?[^>]+(>|$)/g,"")
}

function clean(str) {
	if (!str) return false
	else {
		str = str.toLowerCase();
		str = parseTag(str);
		return stripPunc(str);
	};
}