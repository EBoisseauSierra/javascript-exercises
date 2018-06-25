function translate(sentence) {
	return sentence.split(' ').map(word => pigLatin(word)).join(' ');
}

function pigLatin(word) {
	// word beginning with a vowel
	if(/^[aeiou]/.test(word)) return word + 'ay';
	// word beginning with three consonant
	if(/^[bcdfghjklmnpqrstvwxz]{3}/.test(word)) return word.slice(3) + word.slice(0,3) + 'ay';
	// word beginning with consonant then 'qu'
	if(/^[bcdfghjklmnpqrstvwxz]qu/.test(word)) return word.slice(3) + word.slice(0,3) + 'ay';
	// word beginning with two consonant
	if(/^[bcdfghjklmnpqrstvwxz]{2}/.test(word)) return word.slice(2) + word.slice(0,2) + 'ay';
	// word beginning with 'qu'
	if(word.slice(0, 2) == 'qu') return word.slice(2) + 'quay'
	// word beginning with a consonant
	if(/^[bcdfghjklmnpqrstvwxz]/.test(word)) return word.slice(1) + word.slice(0,1) + 'ay';
}


module.exports = {
	translate
}
