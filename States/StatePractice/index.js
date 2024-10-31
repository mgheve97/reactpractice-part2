// function addTwoNumbers(a, b) {
//     a = 42  // Don't do this!
//     return a + b
// }

// addTwoNumbers(1, 2)

/*
Challenge: complete the function below
Given a name, return "Good <timeOfDay>, <name>!" depending
on the current time of day.

4 am - 11:59 am, timeOfDay = "morning"
12 pm - 4:59 pm: timeOfDay = "afternoon"
5 pm - 7:59 pm: timeOfDay = "evening"
8 pm - 3:59 am: timeOfDay = "night"

E.g. if it's currently 1 pm, greeting("Jane") ==> "Good afternoon, Jane!"

Hint: you can get the current time of day by using: 

const date = new Date()
const hours = date.getHours()
*/

function greeting(name) {
    const date = new Date()
    const hours = date.getHours()

    console.log(hours)


    if(hours>= 4 && hours <= 11 ){
        console.log("morning " + name )
    }

    else if(hours >= 12 && hours <= 16 ){
        console.log("afternoon " + name )
    }

    else if(hours >= 17 && hours <= 19 ){
        console.log("evening " + name )
    }

    else if(hours >= 20 && hours <= 23 || hours>= 0 && hours <= 3 ){
        console.log("night " + name )
    }
    
}

greeting("Bob")