let n = 10;
let row = 1;
while (row <= n) {

    let noOfSpaces = 0;
    while (noOfSpaces < n - row) {
        process.stdout.write("  ");
        noOfSpaces++;
    }

    let col = 1;
    while (col <= row) {
        process.stdout.write(col + " ");
        col++;
    }

    let extraCol = row - 1;
    while (extraCol >= 1) {
        process.stdout.write(extraCol + " ");
        extraCol--;
    }
    process.stdout.write("\n");
    row++;
}