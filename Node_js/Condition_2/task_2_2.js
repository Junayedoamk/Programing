<<<<<<< HEAD
process.stdout.write("This program can find the largest of three numbers, you enter from keyboard.\nPlease, enter three numbers separated with single space characters : ");
process.stdin.on("data",function(inputFromUser)
{
    let x = inputFromUser.toString().split(" ");
    let number1 =(Number(x[0]));
    let number2= (Number(x[1]));
    let number3= (Number(x[2]));
    if(number1>number2 && number1>number3){
        process.stdout.write("The largest number is "+number1);
    }
    else if(number2>number1 && number2>number3){
        process.stdout.write("The largest number is "+number2);
    }       
    else{
        process.stdout.write("The largest number is "+number3);
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
    if(number1>number2 && number1>number3){
        process.stdout.write("The largest number is "+number1);
    }
    else if(number2>number1 && number2>number3){
        process.stdout.write("The largest number is "+number2);
    }       
    else{
        process.stdout.write("The largest number is "+number3);
    }    
    process.exit();
    
}

>>>>>>> 4caa5405060a551ded6499c75d45734fa40b1c72
);