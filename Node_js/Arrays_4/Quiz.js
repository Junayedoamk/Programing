let numbers = [0, 0, 0, 0, 55];
average(numbers);
function average(numbers) {
    let sum=0;
    for (i=0; i<=numbers.length-1; i++){
sum = sum + numbers[i];
}
    process.stdout.write((sum/numbers.length).toString());
   }