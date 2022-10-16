
let givenNumbers = [] ;
process.stdout.write( "This program reads numbers from the keyboard. After receiving a zero, it prints the numbers in reverse order. Please, start entering numbers. The program will stop when you enter a zero.\n") ;

process.stdout.write(givenNumbers.length + " Enter a number: ");

process.stdin.on( "data", function(inputFromUser) {
    let numberFromKeyboard = Number(inputFromUser);
    givenNumbers.push(numberFromKeyboard);
    if (numberFromKeyboard == 0) {
        process.stdout.write( "\nReverse order:  " );
        givenNumbers.reverse();
        for (let i=0; i<=givenNumbers.length-1; i++){
            
            process.stdout.write(givenNumbers[i].toString());
        }
        process.exit();
    } else {
        process.stdout.write(givenNumbers.length + " Enter a number: ");
   }
});