let myObject :{
    username:string,
    id:number,
    isHired:true,
    skills:{
        CICD:string,
        DBs:string,
        programming:string
    }
    }={
        username:"magdy",
        id:25,
        isHired:true,
        skills:{
            CICD:"gitHub",
            DBs:"Mongoose,SQL_Server",
            programming:"javascript, type script,node js"
        }
    };
myObject.username = "Magdy Mohamed";
myObject.id = 3072000;
myObject.isHired = true;
myObject.skills.programming = "javascript, type script,node.js,Express.js"
console.log(myObject);
console.log(myObject.skills.programming);