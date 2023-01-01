function reverStr(str){
    const listOfChars = str.split('');
    const reverseChars = listOfChars.reverse();
    const reversedStr = reverseChars.join('');
    return reversedStr;

    // const reverseStr = str.split('').reverse().join("");
    // console.log(reverseStr)
}

function isPalindrome(str){
    let reverse = reverStr(str)
    return str === reverse;
}

function convertDateToStr(date){
    const dateStr = {day: "", month: "", year: ""}

    if(date.day < 10){
        dateStr.day = "0"+ date.day;
    } else {
        dateStr.day = date.day.toString();
    }

    if(date.month < 10){
        dateStr.month = "0"+ date.month;
    } else {
        dateStr.month = date.month.toString();
    }

    dateStr.year = date.year.toString();
    return dateStr;
}

function getAllFormatOfDate(date){
    const dateStr = convertDateToStr(date)

    let ddmmyyyy = dateStr.day + dateStr.month + dateStr.year;
    let mmddyyyy = dateStr.month + dateStr.day + dateStr.year;
    let yyyymmdd = dateStr.year + dateStr.month + dateStr.day;
    let ddmmyy = dateStr.day + dateStr.month + dateStr.year.slice(-2);
    let mmddyy = dateStr.month + dateStr.day + dateStr.year.slice(-2);
    let yymmdd = dateStr.year.slice(-2) + dateStr.month + dateStr.day;

    return [ddmmyyyy, mmddyyyy, yyyymmdd, ddmmyy, mmddyy, yymmdd]
}

function checkPalindromeForAllDateFormats(date){
    const dateFormats = getAllFormatOfDate(date)

    let flag = false;

    for(let i = 0; i < dateFormats.length; i++){
        if(isPalindrome(dateFormats[i])){
            flag = true;
            break;
        }
    }
    return flag;
}

function isLeapYear(year){
    if(year % 400 === 0){
        return true;
    }
    
    if(year % 100 === 0){
        return false;
    }

    if(year % 4 === 0){
        return true;
    }

    return false;
}

function getNextDate(date){


}

function getNextPalindromeDate(date){
    
}

var date = {
    day: 2,
    month: 2,
    year: 2020
}


console.log(checkPalindromeForAllDateFormats(date));


