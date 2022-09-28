process.stdout.write("Please enter a string: ");
// Read in input 
process.stdin.on("data", function(inputFromUser) {
    // Store user input in a variable
    let enteredString = inputFromUser.toString().trim();
    process.stdout.write("The word in mixed case is:");
    for (let i = 0; i < enteredString.length; i++) {
        if (i % 2) {
            // even
            process.stdout.write(enteredString.charAt(i).toLowerCase());
        } else {
            // odd
            process.stdout.write(enteredString.charAt(i).toUpperCase());
        }
    }
    process.stdout.write("\n\n");
    process.exit();
})