module.exports = function toReadable(number) {
    let stringNumber = number.toString();
    let firstNumber = stringNumber[0];
    let secondNumber = stringNumber[1];
    let thirdNumber = stringNumber[2];

    if (stringNumber.length == 3 && firstNumber >= "1" && secondNumber > "1" && thirdNumber > "0") {
        return units0to9(firstNumber) + " hundred " + tens20to90(secondNumber) + " " + units0to9(thirdNumber);  //ex. 9 8 6
    } else if (stringNumber.length == 3 && firstNumber >= "1" && secondNumber > "1" && thirdNumber == "0") {
        return units0to9(firstNumber) + " hundred " + tens20to90(secondNumber);                                 //ex. 9 8 0
    } else if (stringNumber.length == 3 && firstNumber >= "1" && secondNumber == "1" && thirdNumber >= "0") {
        return units0to9(firstNumber) + " hundred " + tens10to19(thirdNumber);                                  //ex. 9 1 8
    } else if (stringNumber.length == 3 && firstNumber >= "1" && secondNumber == "0" && thirdNumber > "0") {
        return units0to9(firstNumber) + " hundred " + units0to9(thirdNumber);                                   //ex. 9 0 8
    } else if (stringNumber.length == 3 && firstNumber >= "1" && secondNumber == "0" && thirdNumber == "0") {
        return units0to9(firstNumber) + " hundred";                                                             //ex. 9 0 0
    } else if (stringNumber.length == 2 && firstNumber >= "2" && secondNumber > "0") {
        return tens20to90(firstNumber) + " " + units0to9(secondNumber);                                         //ex. 8 7
    } else if (stringNumber.length == 2 && firstNumber >= "2" && secondNumber == "0") {
        return tens20to90(firstNumber);                                                                         //ex. 80
    } else if (stringNumber.length == 2 && firstNumber == "1" && secondNumber >= "0") {
        return tens10to19(secondNumber);                                                                        // ex. 16                                                              // ex. 10
    } else if (stringNumber.length == 1 && firstNumber >= "0") {
        return units0to9(firstNumber);                                                                          // ex. 9
    }
}

function units0to9(arg) {
    switch (arg) {
        case "0":
            return "zero";
        case "1":
            return "one";
        case "2":
            return "two";
        case "3":
            return "three";
        case "4":
            return "four";
        case "5":
            return "five";
        case "6":
            return "six";
        case "7":
            return "seven";
        case "8":
            return "eight";
        case "9":
            return "nine";
    }
}

function tens10to19(arg) {
    switch (arg) {
        case "0":
            return "ten";
        case "1":
            return "eleven";
        case "2":
            return "twelve";
        case "3":
            return "thirteen";
        case "4":
            return "fourteen";
        case "5":
            return "fifteen";
        case "6":
            return "sixteen";
        case "7":
            return "seventeen";
        case "8":
            return "eighteen";
        case "9":
            return "nineteen";
    }
}

function tens20to90(arg) {
    switch (arg) {
        case "2":
            return "twenty";
        case "3":
            return "thirty";
        case "4":
            return "forty";
        case "5":
            return "fifty";
        case "6":
            return "sixty";
        case "7":
            return "seventy";
        case "8":
            return "eighty";
        case "9":
            return "ninety";
    }
}