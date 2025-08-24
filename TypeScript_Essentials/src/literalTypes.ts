type nums = 0|1|-1;

function compare(num1:number ,num2:number):nums{
    if(num1===num2)
        return 0;
    else if(num1 > num2)
        return 1;
    else
        return -1;
}
console.log(compare(20,20));
console.log(compare(-20,14));
console.log(compare(55,20));


//will generate an error as it doesnot equal 1/0/-1
//let myNumber:nums = 100;