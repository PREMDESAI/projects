// Write the pseudocode & a program to input credits of a Code for Cause Campus leader and then output the badge of the lead on the basis of the following criteria:

//  a. 7500 <= credits : Tera leader
//  b. 6000 <= credits < 7500 : Gega leader 
//  c. 4500 <= credits < 6000 : Mega leader 
//  d.Credits < 4500 : Rising Star

// let credits = prompt("Credits of a Code for Cause Campus leader is: ");
let credits = 4000;
debugger;
if (7500 <= credits) {
    console.log("Tera leader");
} else {
    if (6000 <= credits && credits < 7500) {
        console.log("Gega leader");
    } else {
        if (4500 <= credits && credits < 6000) {
            console.log("Mega leader");
        } else {
            console.log("Rising Star");
        }
    }
}


