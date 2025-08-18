let count = 0;
function increaseCount(){
    count++;
    displayCount();
    checkValue();
}
function displayCount(){
    document.getElementById("countDisolay").innerHTML =count; 
}

function checkValue(){
    if(count%10==0)
    {
        alert (`your instgram account reached ${count}`);
    }
}