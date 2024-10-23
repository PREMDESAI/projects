// 3. Write the pseudocode & the program to calculate GCD of two numbers.
let num1 = 60; // 2*2*3*5
let num2 = 36; // 2*2*3*3
 let gcd;

 // Using while loop 

while (num1 != num2) {
    if ( num1 > num2) {
        num1 = num1 - num2;
    } else{
        num2 = num2 - num1;
    }
}
 console.log("GCD is: "+num1);
 
  
 
  
 