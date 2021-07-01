const { Todo } = require("./model");

let counter = 0;
function myCountingProcess (){
    console.log(`ran ${counter} times`)
    counter++;
}

// delete tasks with {"done"= true; every}
function myCleanupProcess() {
    console.log(`running cleanup`);;
    let date = new Date();
    date.setDate(date.getDate()-1);
    console.log("deleting any todos after", date)

    Todo.deleteMany({done: true, deadline: {$gt: date}}, (err, deletedResult)=>{
        console.log(`deleted ${deletedResult.deletedCount} todos`);
    });
}

module.exports = {
    myCountingProcess,
    myCleanupProcess,
}