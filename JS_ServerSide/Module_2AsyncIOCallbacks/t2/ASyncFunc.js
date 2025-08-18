async function myFunction()
{
    let message  = true;
    if(message)
    {
        return "succeded";
    }
    else{
        return 'rejected';
    }
}
async function execMyFunction()
{
    try {
        //wait untill it get the result
        const result = await myFunction();
        console.log(result);
    } catch (error) {
        console.error(error.message);
    }
}
execMyFunction();