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
    var day = date.day + 1;
    var month = date.month;
    var year = date.year;

    const arrOfMonths = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 ]

    if(month === 2){
        if(isLeapYear(year)){
            if(day > 29){
                day = 1;
                month++;
            }
        } else {
            if(day > 28){
                day = 1; 
                month++;
            }
        }
    } else {
        if(day > arrOfMonths[month - 1]){
            day = 1;
            month++
        }
    }

    if(month > 12){
        month = 1;
        year++;
    }

    return {
        day: day,
        month: month,
        year: year
    }

}

function getNextPalindromeDate(date){
    let counter = 0;
    let nextDate = getNextDate(date)

    while(1){
        counter++;
        let isPalindrome = checkPalindromeForAllDateFormats(nextDate);
        if(isPalindrome){
            break;
        }
        nextDate = getNextDate(nextDate);
    }

    return [counter, nextDate]
}

const birthDateInput = document.querySelector("#date-input");
const palindromeBtn = document.querySelector("#check-palindrome");
const showMessage = document.querySelector("#show-message");

function palindromeHandler(){
    let bdayStr = birthDateInput.value;

    if(bdayStr !== ''){
        var listOfDate = bdayStr.split('-');

        var date = {
            day: Number(listOfDate[2]),
            month: Number(listOfDate[1]),
            year: Number(listOfDate[0])
        };

        let isPalindrome = checkPalindromeForAllDateFormats(date);

        if(isPalindrome){
            showMessage.innerText = "Your birthday is palindrome"
        } else {
            var [counter, nextDate] = getNextPalindromeDate(date);
            showMessage.innerText = `The next palindrome date is ${nextDate.day}-${nextDate.month}-${nextDate.year}, you missed it by ${counter} days!`
        }
    }
}

palindromeBtn.addEventListener('click', palindromeHandler)