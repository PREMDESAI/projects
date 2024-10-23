// 7. Write programs to print the following patterns for an input ​n = 5​:
let n = 5;
let row = 0;

while (row < n) {
    let col = 0;
    while (col <= row) {
        process.stdout.write("* ");
        col++;
    }
    process.stdout.write("\n");
    row++;
}