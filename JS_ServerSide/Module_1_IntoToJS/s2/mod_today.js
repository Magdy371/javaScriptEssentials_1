let date = new Date();
let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
exports.dayOfWeek = function()
{
    return days[date.getDay()];
}