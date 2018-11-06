const caesar = function(str,shift) {

    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    const lowerStr = str.toLowerCase();
    let oldIndex = 0;
    let newIndex = 0;
    let newStr =[];

    for(var i=0;i<str.length;i++){
        oldIndex=alphabet.indexOf(lowerStr[i]);
        if(oldIndex>=0){  //if is indeed a letter
            console.log('letter number '+ i + ', has index ' + oldIndex +' in the alphabet');
            
            newIndex=((shift+oldIndex)%alphabet.length);

            if(newIndex<0) newIndex=alphabet.length+newIndex;

            console.log('its new index will be ' + newIndex);

            if(str[i]===str[i].toUpperCase()){ //the original letter was in upper case
                console.log(str[i] + ' will be replaced by ' + alphabet[newIndex].toUpperCase());
                newStr.push(alphabet[newIndex].toUpperCase());
            }else{
                console.log(str[i] + ' will be replaced by ' + alphabet[newIndex]);
                newStr.push(alphabet[newIndex]);
            }
        }else{
            newStr.push(str[i]);
        }
    }
    return newStr.join('');
}

module.exports = caesar
