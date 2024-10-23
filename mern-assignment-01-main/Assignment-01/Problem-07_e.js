 // Javascript code for Pascal's Triangle
 
    // Function to print first
    // n lines of Pascal's Triangle
    function printPascal(n)
    {
         
    // Iterate through every line
    // and print entries in it
    for (let line = 0; line < n; line++)
    {
        // Every line has number of
        // integers equal to line number
        for (let i = 0; i <= line; i++)
        process.stdout.write(binomialCoeff
                        (line, i)+" ");
                         
        process.stdout.write("\n");
    }
    }
 function binomialCoeff(n, k)
    {
        let res = 1;
         
        if (k > n - k)
        k = n - k;
             
        for (let i = 0; i < k; ++i)
        {
            res *= (n - i);
            res /= (i + 1);
        }
        return res;
    }
 let n = 7;
    printPascal(n);