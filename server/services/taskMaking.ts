// Date object
const date = new Date();
let currentDay= String(date.getDate()).padStart(2, '0');
let currentMonth = String(date.getMonth()+1).padStart(2,"0");
let currentYear = date.getFullYear();
// we will display the date as DD-MM-YYYY 
let currentDate = `${currentDay}-${currentMonth}-${currentYear}`;
// console.log("The current date is " + currentDate); 

// Generate a unique taskId
const GENERATE_HASH = require('random-hash').default;
const RANDOM_TASK_ID = GENERATE_HASH({ length: 15 });

function newTask(title:string, descr:string = "", shared:boolean = false): object {
    const task = {
        taskId: RANDOM_TASK_ID,
        title: title,
        descr: descr,
        date_created: currentDate,
        completed: false,
        shared: shared
    }
    return task;
}
// console.log(newTask("Test Task", ""))

module.exports = newTask;