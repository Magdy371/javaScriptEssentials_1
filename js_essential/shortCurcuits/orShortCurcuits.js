const jobHunter = {
    name:"Magdy",
    jobArea:"Egypt"
}
// if(jobHunter.jobArea){
//     console.log(`job hunter name :${jobHunter.name} and its working area: ${jobHunter.jobArea}`);
// }else{
//     console.log(`job hunter name :${jobHunter.name} and its working area: WorldWide`);
// }


//instead we can use more short curcuit
// let workLocation = jobHunter.jobArea ? jobHunter.jobArea :'World Wide';
// console.log(`job hunter name :${jobHunter.name} and its working area: ${workLocation}`);

//we can use Or short curcuting
let workLocation = jobHunter.jobArea || 'World_Wide';
console.log(`job hunter name :${jobHunter.name} and its working area: ${workLocation}`);