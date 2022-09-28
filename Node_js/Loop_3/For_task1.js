let i = 1;
for (let i=1; i<=10; i++){
    process.stdout.write("Multiplication table for "+i+"\n");
    process.stdout.write(("".padStart(25, "*")) + "\n");
    for (let j=1; j<=10; j++){
        process.stdout.write(("*"+j.toString().padStart(7, " ")+" * "+i+" = "+(j*i)).padEnd(24, " ") + "*\n");

    }
}
process.stdout.write("".padStart(25, "*"));
process.exit();