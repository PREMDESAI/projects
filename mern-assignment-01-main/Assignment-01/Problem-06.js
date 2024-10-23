// 6. Write a program to reverse a number (9735 -> 5379)
let num = 9735;
let rev = 0;
let rem ;
console.log("Given Number : "+num);
while (num != 0) {
    rem = num % 10;
    rev = rev*10 + rem;
    num = Math.floor(num / 10);
}
console.log("Revers Number: "+rev);

