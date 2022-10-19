function sum2(number1, number2) {
    // calculates the sum of the two numbers
    let sum = number1 + number2;
    // return the result
    return sum;
}

// Call the function
process.stdout.write("\nSum is " +sum2());
process.stdout.write("\nSum is " + sum2(100, 5));
let average = sum2(10, 55, 456, 10) / 4;
process.stdout.write("\nAverage is " + average);

