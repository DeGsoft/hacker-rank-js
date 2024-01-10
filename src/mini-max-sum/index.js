// 'use strict';

// process.stdin.resume();
// process.stdin.setEncoding('utf-8');

// let inputString = '';
// let currentLine = 0;

// process.stdin.on('data', function(inputStdin) {
//     inputString += inputStdin;
// });

// process.stdin.on('end', function() {
//     inputString = inputString.split('\n');

//     main();
// });

// function readLine() {
//     return inputString[currentLine++];
// }

/*
 * Complete the 'miniMaxSum' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function miniMaxSum(arr) {
    // Write your code here
    const ordered = arr.sort((a, b) => a - b);
    let min = 0;
    let max = 0;
    let length = ordered.length;

    for (let i = 0; i < length; i++) {
        if (i < length-1) min += ordered[i];
        if (i > 0) max += ordered[i];
    }

    console.log(min + "  " + max);
}

// function main() {

//     const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

//     miniMaxSum(arr);
// }
console.log(miniMaxSum([1, 3, 5, 7, 9]))//16 24