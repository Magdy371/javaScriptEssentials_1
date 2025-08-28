/*
1-Union types:
    | this symbol is used to create the union | =>or
2-intersection types:
    is the type that combines several types into 1
    & this symbol is used to create the intersection =>&
*/
type A = {
    one:string,
    two:number,
    three:boolean
}

type B = A & {
    four:string
}

type C = B & {
    final:string |boolean
}

function getAction(btns: C){
    console.log(`Hello ${btns.one}`);
    console.log(`your age is: ${btns.two}`);
    console.log(`is ${btns.three}`);
    console.log(`and it is ${btns.four}`)
    console.log(`${btns.final}`)
    return;
}
getAction({one:"Magdy Mohamed",two:25,three:true,four:"valid to continue",final:"thanks"});
