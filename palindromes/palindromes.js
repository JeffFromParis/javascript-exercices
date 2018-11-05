const palindromes = function(stringToCheck) {

    //converting into lower case
    stringToCheck=stringToCheck.toLowerCase().replace(/[^a-z]/g,"");
    console.log('converted string is ' + stringToCheck);

    let tempo = stringToCheck.split(''); //separates all the characters which all become the elements of an array
    tempo = tempo.reverse(); //reversing the order of the elements of the array
    tempo = tempo.join('');  //reuniting into one single string
    
    return tempo==stringToCheck;
}

module.exports = palindromes
