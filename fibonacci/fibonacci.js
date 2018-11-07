const fibonacci = function(number) {

    if (number<1) return "OOPS";

    if (typeof(number)=='string'){
        if (number.charCodeAt()>=48 && number.charCodeAt()<=57){
            number=parseInt(number);
            console.log('String has been converted to number');
        }else{
            return "The argument is not a number";
        }
    }

    fiboArray=new Array(number);
    
    for(var i=0;i<number;i++){
        fiboArray[i]=computeFibo(i,fiboArray);
    }

    // console.log('initial fiboArray is ' + fiboArray);
    // const resultArray=fiboArray.map(x => computeFibo(x,fiboArray));
    // console.log('fibonacci suite is ' + resultArray);
    return fiboArray.pop();
}

const computeFibo = function (num, fiboArray){
    return a = (num<2) ? 1 : (fiboArray[num-1] + fiboArray[num-2]);
}

module.exports = fibonacci
