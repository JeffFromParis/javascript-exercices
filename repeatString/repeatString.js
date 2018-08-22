const repeatString = function(word,occurences) {

    //If number of Occurences is negative then retruens an error
    if (occurences<0){
        return 'ERROR';
    }

    let solution = '';

    for (var i=0; i<occurences; i++){
        solution=solution+word;
    }
    return solution;
}

module.exports = repeatString
