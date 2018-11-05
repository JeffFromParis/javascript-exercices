const snakeCase = function(str) {
    
    //For the WTF case, we will replace the 2 points by a space (assuming that the WTF case is always having two points between words...)
    str=str.replace(/\.\./g,' ');

    //For the kebab case
    str=str.replace(/\-/g,' ');

    //removing the unnecessary spaces at the beginning and the end of the string
    str=str.trim();

    //removing the ponctuation
    str=str.replace(/[^a-zA-Z ]/g,'');

    //dealing with the camel case if this is a complete camel case string)
    if(str.indexOf(' ')==-1){
        //$1 is here a reference of the capturing group (first arg of replace, in that case A to Z)
        //what is done here is replacinfg a capital letter with a space followed by the same capital letter
        str = str.replace(/([A-Z])/g, " $1");
    }
    //replacing the spaces by _
    str=str.replace(/ /g,'_');

    //turing everything into lower case
    str=str.toLowerCase();
    console.log(str);

    return str;
}

module.exports = snakeCase
