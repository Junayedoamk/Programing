let integerArray = [5,7,32,31,8];
let doubleArray = [12.4, -13.55, 67.44];
let stringArray = ["Helsinki", "Lissabon", "New York", "Shanghai"];
process.stdout.write("The value in the index number 3 is: "+stringArray[3]);
process.stdout.write("\nThe fourth item in the int array is: "+integerArray[3]);
process.stdout.write("\nIn the double array there are "+doubleArray.length+" items");
process.stdout.write("\nInteger array contents:");
for(let i=0; i<=integerArray.length-1; i++){
    process.stdout.write("\n"+integerArray[i]);
}

process.stdout.write("\ndouble array contents last to first:");
doubleArray.reverse();
for(let j=0; j<=doubleArray.length-1; j++){
    process.stdout.write("\n"+doubleArray[j]);
}
for (let k = 0; k < stringArray.length; k++) {
    stringArray[k] = "empty";
}

process.stdout.write("\nNew string array: "+stringArray);