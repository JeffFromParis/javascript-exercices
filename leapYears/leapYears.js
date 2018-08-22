const leapYears = function(year) {

    if(year%4!=0) return false;
    // perfectly divisible by 4

    if (year<400) return true;
    // divisible by 4 and inferior to 400

    if (year%100==0 && year%400!=0){
        return false;
    }else{
        return true;
    }

}

module.exports = leapYears
