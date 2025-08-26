const response = await fetch("https://examples.org/post",{
    method:"POST",
    body:JSON.stringify({username: "magdy_elshrief"}),
    headers:{
        "Content-Type":"application/json",
    },
})