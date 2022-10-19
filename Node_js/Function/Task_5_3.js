function sum(firstNumber, secondNumber) {
    return firstNumber + secondNumber;
}

let result = sum(1, 1);
process.stdout.write("\nFirst sum is: " + result);

result = sum(10, 13);
process.stdout.write("\nSecond sum is: " + result);

result = sum(0.789, -11);
process.stdout.write("\nFirst sum is: " + result + "\n\n");