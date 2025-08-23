type str = string;
let name:str = "Magdy";
console.log(typeof name);

type stdnum = string | number;
let gen:stdnum = 10;
console.log(typeof gen);
gen="Ahmed";
console.log(typeof gen);

//
type Button={
    up:string,
    down:string,
    left:string,
    right:string
}
const getActions = (btns:Button)=>{
    console.log(`Action for button up is: ${btns.up}`);
    console.log(`Action for button down is: ${btns.down}`);
    console.log(`Action for button left is: ${btns.left}`);
    console.log(`Action for button right is: ${btns.right}`);
}

getActions({up:"Go Up",down:"Go Down",left:"Go Left", right:"Go Right"});