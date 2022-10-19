function printLetters() {
    for(let i = 10;i < 36; i++){
        process.stdout.write(i.toString(36));
    }
}
function printNumbers() {
    for(let j = 0; j <= 9; j++) {
        process.stdout.write(j.toString());
    }
}
process.stdout.write("\n");
printLetters();
process.stdout.write("\n");
printNumbers();
process.stdout.write("\n");
printLetters();
process.stdout.write("\n");
process.stdout.write("\n");