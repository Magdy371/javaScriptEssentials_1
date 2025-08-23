/*
*in type Script there is Optional parameters and default ones
* in optional parameters you can choose it or not
* the default parameter must be chosen
* the optional parameter wether we intialize it then use undefined
* or we can use ? like ----> age?number
* the optional parameter must be after the required ones
*  */
function printMessage(name:string = "UnKnown", age?:number,country:string = "UK-United Kingdom"):string{
    //let test = 10;
    return `Name: ${name} & Age: ${age} ---> HomeLand: ${country}` ;
}
console.log(printMessage(undefined,20,"Egypt"));
console.log(printMessage("Magdy",20));
console.log(printMessage("Magdy"));