let array1:number[] =[100,233,3342,534,235];
let array2:string[] = ["Magdy","Mohamed","Gaber","Elshrief"];
let array3=[30,7,2000,"Magdy","Elshrief",["Elmahad","Eldiny"]];
//Type annotations with functions
let iteration:number = 0;
for(let c of array1){
    console.log(`index: ${iteration} --> ${c}`);
    iteration++;
}
console.log('------------------------');
for(let c of array2){
    console.log(`index: ${iteration} --> ${c}`);
    iteration++;
}
console.log('------------------------');
for(let c of array3){
    console.log(`index: ${iteration} --> ${c}`);
    iteration++;
}
console.log('-----Data annotation for function-------');
let showMessage:boolean = true;
function printMessage(name:string, age:number,salary:number):string{
    //let test = 10;
    if(showMessage){
        return `Name: ${name} & Age: ${age} ---> Salary: ${salary}` ;
    }
    return 'no Data to be shown';
}
let message:string =printMessage("Magdy Elshrief",25, 12000);
console.log(`The shown message is ${message}`);