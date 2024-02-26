
// User inputs
const dayInput = document.getElementById('day-input');
const monthInput = document.getElementById('month-input');
const yearInput = document.getElementById('year-input');
const inputs = [dayInput, monthInput, yearInput]


// Result texts
const dayResult = document.getElementById('day-result');
const monthResult = document.getElementById('month-result');
const yearResult = document.getElementById('year-result');


// Error texts
const dayError = document.getElementById('day-error');
const monthError = document.getElementById('month-error');
const yearError = document.getElementById('year-error')
const errors = [dayError, monthError, yearError]

const calculate = document.getElementById('calculate-button')

let day = 0;
let month = 0;
let year = 0

// Grabs the current year and converts it to a string. This is so it can be compared with the user input.
let currentYear = new Date().getFullYear().toString()


let daysInMonth;

console.log(currentYear)


// For each input made this function checks if the input is either a number or backspace. If not either then an error is given.
// This function also calls the getValues() function for every input made to run checks.

inputs.forEach(input => {
    input.addEventListener("input",  () => {

        if(!isNaN(input.value)) {
            console.log("this is a number key", input.value)

            input.classList.remove('input-error')
            input.classList.add('input')
            errors.forEach(error => error.innerHTML = "")

        }          
        else if(isNaN(input) || input.value.trim() !== ""){
            console.log("This is not a number key")
            errors.forEach(error => error.innerHTML = "Input not a number!")
            input.value = ""
            input.classList.remove('input')
            input.classList.add('input-error')
        }

        getValues()
    })
})


// Each time an input is made this function runs to fetch the valid amount of days in a month.
// This function checks if the amount of entered days, months, and years is valid. If not valid function displays error.

function getValues() { 
    
    // Checks if the days input exceeds 31 as there cannot be more than 31 days in a month.
    if(dayInput.value > 31) {
        console.log("To many days!")
        dayInput.value = ""
        dayError.innerHTML = "Not a valid day!"

        dayInput.classList.remove('input')
        dayInput.classList.add('input-error')
    }

    // Checks if the month input exceeds 11 as there is no more than 12 months in a year. 12 months equals a year, therefore user input cannot be more than 11.
    if(monthInput.value > 11) {
       console.log("Too many months!")
       monthInput.value = ""
       monthError.innerHTML = "Not a valid month!"

       monthInput.classList.remove('input')
       monthInput.classList.add('input-error')
    }


    // Checks if the year input is greater than the current year. 
    if(yearInput.value > currentYear) {
        console.log("Too many years")
        yearInput.value = ""
        yearError.innerHTML = "Must be a past year!"

        yearInput.classList.remove('input')
        yearInput.classList.add('input-error')
    }
    
    month = monthInput.value
    year = yearInput.value

    // Checks the amount of days in a month.
    daysInMonth = new Date(year, month + 1, 0).getDate()
    console.log(daysInMonth)
}



function calculateDates() {


    // If the entered day is valid yet exceeds the amount of days in that month, the day is automatically set to the max amount of days in that month.
    // This accounts for leap years.
    if(dayInput.value > daysInMonth) {
        dayInput.value = daysInMonth;
        dayInput.innerHTML = `${daysInMonth}`
    }


    // Fetches current date.
    const now = new Date()
    day = now.getDate()
    month = now.getMonth() + 1
    year = now.getFullYear()

    dayResult.innerHTML = day - dayInput.value;
    monthResult.innerHTML = month - monthInput.value;
    yearResult.innerHTML = year - yearInput.value;

    
}

calculate.addEventListener("click", () => {
    calculateDates()
})
