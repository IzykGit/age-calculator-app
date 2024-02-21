

let dayInput = document.getElementById('day-input');
let monthInput = document.getElementById('month-input');
let yearInput = document.getElementById('year-input');
const inputs = [dayInput, monthInput, yearInput]

let dayResult = document.getElementById('day-result');
let monthResult = document.getElementById('month-result');
let yearResult = document.getElementById('year-result');

let day = 0;
let month = 0;
let year = 0
let currentYear = new Date().getFullYear()

let yearArray = Array.from(String(number), Number)
console.log(currentYear)
console.log(yearArray)

inputs.forEach(input => {
    input.addEventListener("input",  () => {
        if(input.value >= "0" && input.value <= "9") {
            console.log("this is a number key", input.value)
        }          
        else {
            console.log("This is not a number key")
            input.value = ""
        }

        getValues()
    })
})


function getValues() { 
    

    if(dayInput.value[0] > 3 || dayInput.value > 31) {
        console.log("To many days!")
        dayInput.value = ""
    }
    
    if(monthInput.value[0] > 1 || monthInput.value > 12) {
       console.log("Too many months!")
       monthInput.value = ""
    }

    if(yearInput.value > 2024) {
        console.log("Too many years")
        yearInput.value = ""
    }

    day = dayInput.value
    month = monthInput.value
    year = yearInput.value
    console.log(day)
    console.log(month)
    console.log(year)
}





function daysInMonth(month, year) {
    return new Date(year, month, 0).getDate();
}

console.log(daysInMonth(1, 1995))