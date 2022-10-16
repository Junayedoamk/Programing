let numbers = [];
process.stdout.write("\n\nRandom numbers: ");
for(let i = 0; i < 100; i++) {
    let randomNumber = Math.floor(Math.random() * 1000);
    numbers.push(randomNumber);
    process.stdout.write(randomNumber + ", ");
}

let largest = numbers[0];
for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > largest) {
        largest = numbers[i];
    }
}
process.stdout.write("\nLargest number is " + largest + "\n");

let smallest = numbers[0];
for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] < smallest) {
        smallest = numbers[i];
    }
}
process.stdout.write("\Smallest number is " + smallest + "\n\n");
process.exit();