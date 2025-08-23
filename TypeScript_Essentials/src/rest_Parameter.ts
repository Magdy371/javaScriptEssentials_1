function addNumbers(...nums:number[]){
    let result =0;
    /*
    * for(let c of nums){
        result+=c;
    }
    return result;
    * */
    nums.forEach((num)=> result+=num);
    return result;
}
console.log(addNumbers(20,43,52,455,234,2,4334,43.5));