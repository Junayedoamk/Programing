
let numericArray = [55, 23, 6456, 324, 21, 234, 72, 21];

process.stdout.write("\nThe number you'd like to search: ");

process.stdin.on("data", function(inputFromUser){
    let numberToSearch = Number(inputFromUser);
 
    for (let i = 0; i < numericArray.length; i++) {
    
        if (numberToSearch == numericArray[i]) {

            process.stdout.write(numberToSearch + " was found in index " + i + "\n\n");
            process.exit();
        }
    }
    process.stdout.write(numberToSearch + " was not found\n\n");
    process.exit();
})