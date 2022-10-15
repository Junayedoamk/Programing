let numberArray=[1,4,0,9,2,5,3,10];
process.stdout.write(numberArray[3].toString());
let stringArray=["Shammi","Shimi","Shoma","Junayed"];
stringArray[2]="Shovo";
process.stdout.write("\n"+stringArray[2]);
process.stdout.write("\n"+stringArray.length);
process.stdout.write("\n"+numberArray.length);
numberArray.push(7);
numberArray.unshift(14);
process.stdout.write("\n"+numberArray.length);
numberArray.reverse();
for(let i=0; i<=numberArray.length-1; i++){
process.stdout.write("\n"+numberArray[i]);
}
stringArray.sort();

for(let j=0; j<=stringArray.length-1; j++){

process.stdout.write("\n"+stringArray[j]);
}
