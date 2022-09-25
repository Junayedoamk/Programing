<<<<<<< HEAD
process.stdout.write("This program can find the largest of three numbers, you enter from keyboard.\nPlease, enter three numbers separated with single space characters : ");
process.stdin.on("data",function(inputFromUser)
{
    let x = inputFromUser.toString().split(" ");
    let number1 =(Number(x[0]));
    let number2= (Number(x[1]));
    let number3= (Number(x[2]));
    if(number1==number2 && number1==number3 && number2==number3){
        process.stdout.write("You entered three matching numbers");
        if(number1==2 || number2==2 || number3==2){
            process.stdout.write("\nYou entered the magic number 2!");
        }
    }
    else if(number1!==number2 && number1!==number3 && number2!==number3){
        process.stdout.write("You entered three different numbers");
        if(number1==2 || number2==2 || number3==2){
            process.stdout.write("\nYou entered the magic number 2!");
        }
    }    
    else if(number1==number2 && number1!==number3 && number2!==number3){
        process.stdout.write("Third one doesn't fit");
        if(number1==2 || number2==2 || number3==2){
            process.stdout.write("\nYou entered the magic number 2!");
        }
    }     
    
    process.exit();
    
}

=======
process.stdout.write("This program can find the largest of three numbers, you enter from keyboard.\nPlease, enter three numbers separated with single space characters : ");
process.stdin.on("data",function(inputFromUser)
{
    let x = inputFromUser.toString().split(" ");
    let number1 =(Number(x[0]));
    let number2= (Number(x[1]));
    let number3= (Number(x[2]));
    if(number1==number2 && number1==number3 && number2==number3){
        process.stdout.write("You entered three matching numbers");
        if(number1==2 || number2==2 || number3==2){
            process.stdout.write("\nYou entered the magic number 2!");
        }
    }
    else if(number1!==number2 && number1!==number3 && number2!==number3){
        process.stdout.write("You entered three different numbers");
        if(number1==2 || number2==2 || number3==2){
            process.stdout.write("\nYou entered the magic number 2!");
        }
    }    
    else if(number1==number2 && number1!==number3 && number2!==number3){
        process.stdout.write("Third one doesn't fit");
        if(number1==2 || number2==2 || number3==2){
            process.stdout.write("\nYou entered the magic number 2!");
        }
    }     
    
    process.exit();
    
}

>>>>>>> 4caa5405060a551ded6499c75d45734fa40b1c72
);