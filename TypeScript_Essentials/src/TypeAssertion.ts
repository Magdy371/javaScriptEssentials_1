/*
Type Assertions:
    Some times compiler does not recognize the info we provide
    if we add type: Type Script compiler do not perform any checks in your provided info 
    as lon as its suitable for the type we asserted
*/


//const img  = document.getElementById("my_img") as HTMLImageElement;
// let img = <HTMLImageElement> document.getElementById("my_img");
// console.log(img.src);

let data:any = "1000 ";
console.log((data as string).repeat(3));
//if "1000" was 1000 it will not generate error only when the runtime