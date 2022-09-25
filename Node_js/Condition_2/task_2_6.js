<<<<<<< HEAD
const { time } = require("console");

process.stdout.write("Please select what you want to do\n1 - Print out Hello\n2 - Print out current date & time\n0 - Exit\n");
process.stdin.on("data",function(inputFromUser)
{
    let gettingNumber = Number(inputFromUser);
    switch(gettingNumber){
        case 1:
        process.stdout.write("Hello");
        break;
        
        case 2:
            process.stdout.write("Current date & time: "+ Date());
        break;
        case 0:
            process.stdout.write("Exit");
        break;
        default :
        process.stdout.write("Invalide input");
        break;
    }
    process.exit();
}

=======
const { time } = require("console");

process.stdout.write("Please select what you want to do\n1 - Print out Hello\n2 - Print out current date & time\n0 - Exit\n");
process.stdin.on("data",function(inputFromUser)
{
    let gettingNumber = Number(inputFromUser);
    switch(gettingNumber){
        case 1:
        process.stdout.write("Hello");
        break;
        
        case 2:
            process.stdout.write("Current date & time: "+ Date());
        break;
        case 0:
            process.stdout.write("Exit");
        break;
        default :
        process.stdout.write("Invalide input");
        break;
    }
    process.exit();
}

>>>>>>> 4caa5405060a551ded6499c75d45734fa40b1c72
);