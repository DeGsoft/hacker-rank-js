// 'use strict';

// const fs = require('fs');

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
 * Complete the 'timeConversion' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function timeConversion(s) {
    // Write your code here
    const isAM = s.includes("AM");
    const isPM = s.includes("PM");
    const hh = s.slice(0, 2);

    const pad = (v) => String(v).padStart(2, '0');

    const replace = (v) => s.replace(hh, v).slice(0, -2);

    if (isAM) return replace((hh != 12) ? hh : pad(0));
    if (isPM) return replace((hh != 12) ?
        pad(parseInt(hh) + 12) : 12);
    return s;
}

// function main() {
//     const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

//     const s = readLine();

//     const result = timeConversion(s);

//     ws.write(result + '\n');

//     ws.end();
// }
console.log(timeConversion('12:01:00AM'))//'00:01:00'
console.log(timeConversion('07:05:45PM'))//'19:05:45'