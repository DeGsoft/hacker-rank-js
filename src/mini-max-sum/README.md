# Mini-Max Sum
Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers. 

Then print the respective minimum and maximum values as a single line of two space-separated long integers.

## Example
> arr = [1,3,5,7,9]

The minimum sum is __1 + 3 + 5 + 7 = 16__ and the maximum sum is __3 + 5 + 7 + 9 = 24__. 

The function prints
> 16 24


## Function Description

Complete the miniMaxSum function in the editor below.

miniMaxSum has the following parameter(s):

* arr: an array of __5__ integers

## Print

Print two space-separated integers on one line: the minimum sum and the maximum sum of __4__ of __5__ elements.

## Input Format

A single line of five space-separated integers.

## Constraints
> 1 <= arr[i] <= 10^9

## Output Format

Print two space-separated long integers denoting the respective minimum and maximum values that can be calculated by summing exactly four of the five integers.

(The output can be greater than a 32 bit integer.)

## Sample Input
> 1 2 3 4 5

## Sample Output

> 10 14

## Explanation

The numbers are __1, 2, 3, 4, and 5__.

Calculate the following sums using four of the five integers:

1. Sum everything except __1__, the sum is __2 + 3 + 4 + 5 = 14__.
2. Sum everything except __2__, the sum is __1 + 3 + 4 + 5 = 13__.
3. Sum everything except __3__, the sum is __1 + 2 + 4 + 5 = 13__.
4. Sum everything except __4__, the sum is __1 + 2 + 3 + 5 = 11__.
5. Sum everything except __5__, the sum is __1 + 2 + 3 + 4 = 10__.

__Hints:__ Beware of integer overflow! Use 64-bit Integer.

#
# Author
## *DeGsoft*

[Youtube](https://www.youtube.com/channel/UCA3EHMeYoeCRN5gBm97UaHQ)

[LinkedIn](https://www.linkedin.com/in/diegoezequielguillen)

[Twitter](https://twitter.com/DeGsoft)

[TikTok](https://www.tiktok.com/@degsoft)

[Instagram](https://www.instagram.com/degsoft)