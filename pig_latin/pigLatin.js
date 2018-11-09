function translate(sentance) {

	//removing the unnecessary spaces and turing the sentance into an array of characters
	sentance=sentance.trim().split('');
	console.log('initial sentance has been turned into the following array: '+ sentance);

	//
	let startOfWordIndex = -1;
	let endOfWordIndex = -1;
	let translation = new Array();
	let word=[];

	for (var i = 0;i<sentance.length;i++){

		if(isALetter(sentance[i])){

			//detection of the first letter of the word
			if(startOfWordIndex==-1){
				startOfWordIndex=i;
				//console.log('First Letter of a word detected at index ' + startOfWordIndex);
			}

			//case when the last character is a letter
			if(i==sentance.length-1){
				endOfWordIndex= i;
				//console.log('Last letter of a word detected at index ' + endOfWordIndex +' (end of the sentance).');
				word = sentance.slice(startOfWordIndex,endOfWordIndex+1);
				//console.log('The word is '+ word);
				translation.push(addWord(word));
			}
		}else{
			//in case that it is not a letter then the word ended at the previous index
			if (startOfWordIndex>=0){
				endOfWordIndex= i-1;
				//console.log('Last letter of a word detected at index ' + endOfWordIndex);
				word = sentance.slice(startOfWordIndex,endOfWordIndex+1);
				//console.log('The word is '+ word);
				translation.push(addWord(word));
				startOfWordIndex=-1;
				endOfWordIndex=-1;
			}
			//in case the character is not a letter we directly add it to the final array
			translation.push(sentance[i]);
		}
	}
	console.log('last log. before joining, translation is :'+ translation);
	return translation.join('');
}

const isALetter = function (character){
	const code = character.charCodeAt();
    return ((code>=65 && code<=90 ) || (code>=97 && code<=122));
}

const addWord = function (word){
	
	//recreating a string based on the word
	const str=word.join('');

	console.log('Word detected: ' + str);
	//having all the vowels in the word
	const vowels = str.match(/[aeiouy]/g);

	if (vowels===null || vowels[0]==str[0]){
		return str+'ay'; //no vowel or beginning with a vowel
	} 

	const firstVowelIndex = str.indexOf(vowels[0]);
	const secondVowelIndex = str.indexOf(vowels[1]);

	let beginning = '';
	let ending='';

	if((vowels[0]=="u") && (str[firstVowelIndex-1]=='q')){
		beginning=str.slice(0,secondVowelIndex);
		ending=str.slice(secondVowelIndex);
	}else{
		beginning=str.slice(0,firstVowelIndex);
		ending=str.slice(firstVowelIndex);
	}
	const newWord = ending+beginning+'ay';
	console.log('creating the new word '+ newWord);
	return newWord;

}

module.exports = {
	translate
}

