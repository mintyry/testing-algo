// TAKE HEAD DOUBLE AND RETURN AS LIST

var doubleIt = function(head) {

    let headCount = head.length;
    console.log('count is ' + headCount);
    
    let stringArray = [];
    
    for(let i = 0; i < head.length; i++) {
        let stringNum = head[i].toString();
        stringArray.push(stringNum);
    }
    
    // At this point, it's now an array of strings, not numbers, so we can join/concatenate into one number
    let newStringArray = [...stringArray];
    let concatNumber = '';
    
    for(let i = 0; i < newStringArray.length; i++) {
        concatNumber += newStringArray[i];
        // confirm its a string number
        console.log(typeof concatNumber + ' ' + concatNumber);
    }
    
    let actualNumber = parseInt(concatNumber);
    console.log('actual number is ' + actualNumber);
    console.log(typeof actualNumber);
    
    const answer = actualNumber * 2;
    
    // now we have to reverse engineer from actual number to an array of numbers
    
    
    let stringAnswer = answer.toString();
    // '2002'
    console.log(stringAnswer + 'its type is ' + typeof stringAnswer);
    
    
    let answerArr = stringAnswer.split('');
    console.log(answerArr);
    
    let finalNumArr = [];
    for(let i = 0; i < answerArr.length; i++) {
        let numAnswer = parseInt(answerArr[i]);
        console.log(typeof numAnswer + numAnswer);
    
        finalNumArr.push(numAnswer);
        console.log(finalNumArr);
    }
    
    // let [num1, num2, num3] = head;
    // let numString = num1.toString() + num2.toString() + num3.toString();
    // let number = parseInt(numString);
    // console.log(typeof number);
    
    // let answer = number * 2;
    
    return finalNumArr;
    };
    
    let test =  [1, 1, 1]
    console.log(doubleIt(test));

    
    