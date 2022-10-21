let clParameters = process.argv;

if(clParameters.includes('greet')) {
    process.stdout.write("Hello");
    clParameters.forEach(parameter =>{
        let split = parameter.split("=");
        if (split[0] == "name") {
            process.stdout.write(" " + split[1] + "\n\n\n");
        }
    })

}

process.exit();