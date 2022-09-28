function calendar(firstWeekDay, month, numberOfDays) {
    // Let's create a new variable for current weekday
    let weekday = firstWeekDay;
    // Your code goes here
    for ( let i = 1; i <= numberOfDays; i++ ) {
        if ( weekday == 1 ) {
            process.stdout.write("Monday ");
        } else if ( weekday == 2 ) {
            process.stdout.write("Tuesday ");
        } else if ( weekday == 3 ) {
            process.stdout.write("Wednesday ");
        } else if ( weekday == 4 ) {
            process.stdout.write("Thursday ");
        } else if ( weekday == 5 ) {
            process.stdout.write("Friday ");
        } else if ( weekday == 6 ) {
            process.stdout.write("Saturday ");
        } else {
            process.stdout.write("Sunday ");
        }
        weekday++;
        process.stdout.write(i + "." + month + ".");
        if ( weekday > 7 ) {
            // We have reached the end of the week -> go back to Monday
            weekday = 1;
            // Let's print out new line
            process.stdout.write("\n");
        }
        
    }
}
calendar(4, 9, 30);