<<<<<<< HEAD
process.stdout.write("This program can find the largest of two numbers, you enter from keyboard.\nPlease, enter two numbers separated with single space characters : ");
process.stdin.on("data",function(inputFromUser)
{
    let x = inputFromUser.toString().split(" ");
    let number1 =(Number(x[0]));
    let number2= (Number(x[1]));
    if(number1>number2){
        process.stdout.write("The largest number is "+number1);

    }
    else{
        process.stdout.write("The largest number is "+number2);
    }    
    process.exit();
}

=======
process.stdout.write("This program can find the largest of two numbers, you enter from keyboard.\nPlease, enter two numbers separated with single space characters : ");
process.stdin.on("data",function(inputFromUser)
{
    let x = inputFromUser.toString().split(" ");
    let number1 =(Number(x[0]));
    let number2= (Number(x[1]));
    if(number1>number2){
        process.stdout.write("The largest number is "+number1);

    }
    else{
        process.stdout.write("The largest number is "+number2);
    }    
    process.exit();
}

>>>>>>> 4caa5405060a551ded6499c75d45734fa40b1c72
);