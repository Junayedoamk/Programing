process.stdout.write("Please enter size of triangle: ");
process.stdin.on("data", function(inputFromUser){
for(let x = 1; x<=Number(inputFromUser); x++){
    process.stdout.write("\n");
    for(let y=1;y<=x;y++){
        process.stdout.write("*");
        
    
    }
    
}
process.exit();
})