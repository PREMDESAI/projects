let n = 10;
let row = 1;
while (row <= n) {

    let noOfSpaces = 0;
    while (noOfSpaces < n - row) {
        process.stdout.write("  ");
        noOfSpaces++;
    }

    let col = row;
    while (col < 2*row) {
        process.stdout.write(col + " ");
        col++; 
    }

    let extraCol = 2*(row-1);
    while (extraCol >= row) {
        process.stdout.write(extraCol + " ");
        extraCol--;
    }
    process.stdout.write("\n");
    row++;
}