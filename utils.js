function stripPunc(word){
	return word.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, '');
}

function parseTag(str) {
	return str.replace(/<\/?[^>]+(>|$)/g,"")
}

console.log("HERE", stripPuncuation("2016),"));
console.log("HERE", stripPuncuation("2016<a>"));
console.log("HERE", stripPuncuation("<a>2016),"));

console.log("HERE", parse("<a>2016"));
console.log("HERE", parse("<a>2016</a>"));
console.log("HERE", parse("2016</a>"));
