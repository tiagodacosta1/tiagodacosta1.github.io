const date = new Date()


let day = date.getDate()
let month = (date.getMonth() + 1).toString().padStart(2, '0'); // pads the month with a leading 0 if it's a single digit month
let year = date.getFullYear()

let fullDate = `${day}-${month}-${year}`
document.getElementById("date").innerHTML = fullDate;
