<<<<<<< HEAD
process.stdout.write("Are you younger than 18?\nPlease, answer Y or N: ");
process.stdin.on("data", function(inputFroumUser){
    let getting =(String(inputFroumUser))[0];

    if (getting == 'n' ){
        process.stdout.write("You are grown up");

    }
    else if(getting== 'y'){
        process.stdout.write("You are still under 18");  
   }
   else{
    process.stdout.write(getting + " is not a valid input");
   }
   process.exit();
}

=======
process.stdout.write("Are you younger than 18?\nPlease, answer Y or N: ");
process.stdin.on("data", function(inputFroumUser){
    let getting =(String(inputFroumUser))[0];

    if (getting == 'n' ){
        process.stdout.write("You are grown up");

    }
    else if(getting== 'y'){
        process.stdout.write("You are still under 18");  
   }
   else{
    process.stdout.write(getting + " is not a valid input");
   }
   process.exit();
}

>>>>>>> 4caa5405060a551ded6499c75d45734fa40b1c72
);