// CHALLENGE 1 : Reverse the string
// Return a string in revese
// ex. reverseString('Hello') === 'olleH'

function reverseString(str) {
    // Using inbuild methods
    // return str.split('').reverse().join('')

    ////////////////////////////////

    // using for loop decrement
    // let revStr = '';
    // for (let i = str.length - 1; i >= 0; i--) {
    //     revStr = revStr + str[i]
    // }
    // return revStr;

    ////////////////////////////////

    // using for loop dincrement
    // let revStr = '';
    // for (let i = 0; i <= str.length - 1; i++) {
    //     revStr = str[i] + revStr
    // }
    // return revStr;

    /////////////////////////////////

    // Using for of loop
    // let revStr = '';
    // for (let char of str) {
    //     revStr = char + revStr
    // }
    // return revStr

    /////////////////////////////////

    // Using for Each loop
    // let revStr = '';
    // str.split('').forEach((char) => revStr = char + revStr)
    // return revStr

}

///////////////////////////////////////////////

// CHALANGE 2 : VALIDATE PALINDROME
// Return true if Palindrome and false if not
// ex. isPalindrome('madam') === true , isPalindrome('hello') == false

function isPalindrome(str) {

    // let revStr = str.split('').reverse().join('');
    // return (revStr === str)
}

///////////////////////////////////////////////

// CHALLENGE 3: REVERSE AN INTEGER
// Return reverse integer
/// ex. reveerseInt(521) === 125

function reverseInt(int) {
    // let revInt = "" + int; or
    // let revInt = int.toString()
    // let reverse = revInt.split('').reverse().join('')
    // return parseInt(reverse) * Math.sign(int)
}

///////////////////////////////////////////////////

// CHAALLENGE 4: CAPITALIZE LETTERS
// Return a string with the first letter of every word is capitalized
// ex. capitalizeLetter('i love javascript') === 'I Love Javascript'

function capitalizeLetter(str) {
    //Using for loop
    // let splitStr = str.toLowerCase().split(' ')
    // for (let i = 0; i < splitStr.length; i++) {
    //     splitStr[i] = splitStr[i].substring(0, 1).toUpperCase() + splitStr[i].substring(1);
    // }
    // return splitStr.join(' ')

    /////////////////////////////////

    //using Map
    // return str
    //     .toLowerCase()
    //     .split(' ')
    //     .map((word) => word[0].toUpperCase() + word.substr(1))
    //     .join(' ')
}

/////////////////////////////////////////////////

//CHALLENGE 5: MAX CHARACTER
//Return a character that is most common in string
//ex. maxCharacter('javascript') === a

function maxCharacter(str) {
    // let charMap = {};
    // let maxNum = 0;
    // let maxChar = '';

    // str.split('').forEach(
    //     function (char) {
    //         if (charMap[char]) {
    //             charMap[char]++;
    //         } else {
    //             charMap[char] = 1;
    //         }
    //     }
    // )
    // for (let char in charMap) {
    //     if (charMap[char] > maxNum) {
    //         maxNum = charMap[char];
    //         maxChar = char;
    //     }
    // }

    // return maxChar + ": " + maxNum;
}

//////////////////////////////////////////////

//CHALLENGE 6: FIZZBUZZ
// Write a function that prints all the number from 1 to 100.
// For multiple of 3 instead of number print 'Fizz', for 
// multiple of 5 instead of number print 'Buzz', For numbers
// which are multiple of both 3 and 5  print 'FizzBuzz'

function fizzBuzz() {
    for (let i = 1; i <= 100; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log('FizzBuzz')
        } else if (i % 3 === 0) {
            console.log('Fizz')
        } else if (i % 5 === 0) {
            console.log('Buzz')
        } else {
            console.log(i)
        }
    }
}


fizzBuzz();