const removeFromArray = function(array,out1) {

    nArgs=arguments.length;

    if (nArgs>1) {

        for(i=1;i<nArgs;i++){
            index = array.indexOf(arguments[i]);

            if(index>=0){
                array.splice(index,1);
            }
        }
    }
    return array;
}

module.exports = removeFromArray
