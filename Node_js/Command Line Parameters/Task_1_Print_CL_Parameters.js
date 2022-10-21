let clParameters = process.argv;

console.log( "\n This program was given the following " + clParameters.length + " strings" +  "\n as command line parameters (arguments): \n" ) ;

// Let's loop through found parameters
let i  =  0 ;
while (i < clParameters.length) {
   console.log("     " + clParameters[i]);
   i++ ;
}