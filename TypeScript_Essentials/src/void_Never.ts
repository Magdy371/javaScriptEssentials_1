/*
Void:
    function taht will return nothing
    function in js the not return a value will be shown as undefined
    undifined in not void

Never:
    this type never returns
    the function does not have a norma completion
    it throws an error
    never finishes
    the return statement is not reachable
*/

function logging(msg: string):void{
    console.log(msg);
    return;
}

console.log(logging('Hello to type script'));

const fail = (msg:string):never=>{
    throw new Error(msg)
    //return msg;
}

function alwaysName(name:string):never{
    while(true){
        console.log(name);
    }
}
//alwaysName("magdy");
//console.log("Ahmed");