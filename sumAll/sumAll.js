const sumAll = function(num1,num2) {

    if (typeof(num1)!="number" || typeof(num2)!="number") return "ERROR";
    if (num1<0 || num2<0) return 'ERROR';

    let minNumber=0;
    let maxNumber=0;
    let sum=0;

    if(num1<num2){
        minNumber=num1;
        maxNumber=num2;
    }else{
        minNumber=num2;
        maxNumber=num1;
    }

    for (i=minNumber;i<=maxNumber;i++){
        sum+=i;
    }

    return sum;

}

module.exports = sumAll
