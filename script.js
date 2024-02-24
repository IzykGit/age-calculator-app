

const dayInput = document.getElementById('day-input');
const monthInput = document.getElementById('month-input');
const yearInput = document.getElementById('year-input');
const inputs = [dayInput, monthInput, yearInput]

const dayResult = document.getElementById('day-result');
const monthResult = document.getElementById('month-result');
const yearResult = document.getElementById('year-result');

const dayError = document.getElementById('day-error');
const monthError = document.getElementById('month-error');
const yearError = document.getElementById('year-error')
const errors = [dayError, monthError, yearError]

const calculate = document.getElementById('calculate-button')

let day = 0;
let month = 0;
let year = 0
let currentYear = new Date().getFullYear().toString()


let daysInMonth;

console.log(currentYear)


inputs.forEach(input => {
    input.addEventListener("input",  () => {

        if(!isNaN(input.value) || input == "Backspace") {
            console.log("this is a number key", input.value)

            input.classList.remove('input-error')
            input.classList.add('input')
            errors.forEach(error => error.innerHTML = "")

        }          
        else if(isNaN(input)){
            console.log("This is not a number key")
            errors.forEach(error => error.innerHTML = "Input not a number!")
            input.value = ""
            input.classList.remove('input')
            input.classList.add('input-error')
        }

        getValues()
    })
})




function getValues() { 
    

    if(dayInput.value > 31) {
        console.log("To many days!")
        dayInput.value = ""
        dayError.innerHTML = "Not a valid day!"

        dayInput.classList.remove('input')
        dayInput.classList.add('input-error')
    }
    
    if(monthInput.value > 11) {
       console.log("Too many months!")
       monthInput.value = ""
       monthError.innerHTML = "Not a valid month!"

       monthInput.classList.remove('input')
       monthInput.classList.add('input-error')
    }

    if(yearInput.value > currentYear) {
        console.log("Too many years")
        yearInput.value = ""
        yearError.innerHTML = "Must be a past year!"

        yearInput.classList.remove('input')
        yearInput.classList.add('input-error')
    }


    month = monthInput.value
    year = yearInput.value

    
    daysInMonth = new Date(year, month + 1, 0).getDate()
    console.log(daysInMonth)
}



function calculateDates() {
    
    if(dayInput.value > daysInMonth) {
        dayInput.value = daysInMonth;
        dayInput.innerHTML = `${daysInMonth}`
    }

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