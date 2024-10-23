let n = 5;
let a = 1;
let b = 0;
for (let i = 5; i > 0; i--) {
    for (let j = i; j > 0; j--) {
        process.stdout.write("* ");
    }
    for (let k = 1; k < a; k++) {
        process.stdout.write("  ");
    }
    a = a + 2;
    for (let m = i; m > 0; m--) {
        process.stdout.write("* ");
    }
    process.stdout.write("\n");
}
for (i = 1; i <= 4; i++) {
    for (j = 0; j <= i; j++) {
        process.stdout.write("* ");
    }
    for (k = 6; k > b; k--) {
        process.stdout.write("  ");
    }
    b = b + 2;
    for (m = 0; m <= i; m++) {
        process.stdout.write("* ");
    }
    process.stdout.write("\n");
}

// Output:
/*
* * * * * * * * * *
* * * *     * * * *
* * *         * * *
* *             * *
*                 *
* *             * *
* * *         * * *
* * * *     * * * *
* * * * * * * * * *

*/