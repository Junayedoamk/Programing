
let numbersFromUser = [];

process.stdout.write( "\n This program calculates the mean value of\n the numbers you enter from the keyboard.\n The program stops when you enter a letter.\n\n" ) ;

process.stdout.write("Enter a number: ");

process.stdin.on("data", function(inputFromUser) {
    let numberFromKeyboard = Number(inputFromUser);

    if(isNaN(numberFromKeyboard)) {
        let sum = 0;

        for (let i = 0; i < numbersFromUser.length; i++) {
            sum = sum + numbersFromUser[i];
        }

        process.stdout.write("\nThe average is: " +sum/numbersFromUser.length + " \n\n");

        process.exit() ; 
    } else {
        numbersFromUser.push(numberFromKeyboard);
      
        process.stdout.write("Enter a number: ");
    }
});