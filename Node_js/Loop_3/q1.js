calender (1, 2, 28);


function calender (firstWeekDay, month, numberOfDays)

{
    let gettingNumber = Number(firstWeekDay);
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
process.stdout.write("Number of digits: " + x + ".");