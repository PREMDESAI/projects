// 5. Write a program to count the number of digits in a number. 

let num = 3005789345;
let digitCount = 0;
while (num != 0) {
    digitCount = digitCount +1;
    num =  Math.floor(num / 10); // Here i use math property for convert float to integer
}
console.log("Total digit is: "+ digitCount);
 
