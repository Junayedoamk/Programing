<<<<<<< HEAD
process.stdout.write("This program can find out whether a number is even or odd. Please, give a number: ");
process.stdin.on("data", function(inputFroumUser){
    let x= Number(inputFroumUser).toString();
    if ((x%2)==0){
        process.stdout.write(x+" is even.");

    }
    else{
        process.stdout.write(x+" is odd.");  
 
   }
   process.exit();
}

=======
process.stdout.write("This program can find out whether a number is even or odd. Please, give a number: ");
process.stdin.on("data", function(inputFroumUser){
    let x= Number(inputFroumUser).toString();
    if ((x%2)==0){
        process.stdout.write(x+" is even.");

    }
    else{
        process.stdout.write(x+" is odd.");  
 
   }
   process.exit();
}

>>>>>>> 4caa5405060a551ded6499c75d45734fa40b1c72
);