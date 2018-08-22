const reverseString = function(word) {
    let solution='';
    const numberOfIndexMax=word.length - 1;

    for(i=numberOfIndexMax; i>=0; i--){
        solution+=word[i];
    }
    return solution;
}

module.exports = reverseString
