let dateDiv = document.getElementById("dateDiv")
let timeDiv = document.getElementById("timeDiv")

let date = new Date()
let year = date.getFullYear()
let month = Number(date.getMonth()) + 1
let day = date.getDate()
let date1 = year + "-" + month + "-" + day
dateDiv.innerHTML = date1


let hours = date.getHours()
let minutes = date.getMinutes()
if (minutes < 10) {
    minutes = "0" + minutes
}
let date2 = hours + ":" + minutes
timeDiv.innerHTML = date2

setInterval(() => {

    let date = new Date()
    let year = date.getFullYear()
    let month = Number(date.getMonth()) + 1
    let day = date.getDate()
    let date1 = year + "-" + month + "-" + day
    dateDiv.innerHTML = date1


    let hours = date.getHours()
    let minutes = date.getMinutes()

    let today = date.toLocaleDateString('en-US', {
        weekday: 'short'
    });

    if (minutes < 10) {
        minutes = "0" + minutes
    }
    let date2 = today + " " + hours + ":" + minutes
    timeDiv.innerHTML = date2


}, 1000)