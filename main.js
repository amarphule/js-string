// CHALLENGE 1 : Reverse the string
// Return a string in revese
// ex. reverseString('Hello') === 'olleH'

function reverseString(str) {
    // Using inbuild methods
    // return str.split('').reverse().join('')

    //////////////////////////////////////////

    // using for loop decrement
    // let revStr = '';
    // for (let i = str.length - 1; i >= 0; i--) {
    //     revStr = revStr + str[i]
    // }
    // return revStr;

    /////////////////////////////////////////////

    // using for loop dincrement
    // let revStr = '';
    // for (let i = 0; i <= str.length - 1; i++) {
    //     revStr = str[i] + revStr
    // }
    // return revStr;

    /////////////////////////////////////////////

    // Using for of loop
    // let revStr = '';
    // for (let char of str) {
    //     revStr = char + revStr
    // }
    // return revStr

    /////////////////////////////////////////////

    // Using for Each loop
    // let revStr = '';
    // str.split('').forEach((char) => revStr = char + revStr)
    // return revStr

    ///////////////////////////////////////////
}


// CHALANGE 2 : VALIDATE PALINDROME
// Return true if Palindrome and false if not
// ex. isPalindrome('madam') === true , isPalindrome('hello') == false

function isPalindrome(str) {

    let revStr = str.split('').reverse().join('');

    return (revStr === str)
}


console.log(isPalindrome("racecar"))