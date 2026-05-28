// Simple number guessing game

const input1 = document.querySelector('.input1');
const input2 = document.querySelector('.input2');
const input3 = document.querySelector('.input3');

const equal = document.querySelector('.imgofarrow');

const anotherdash = document.querySelector('.first');

const anotherdash2 = document.querySelector('.second');

const anotherdash3 = document.querySelector('.third');

const labels = document.querySelectorAll('label');
// console.log(labels);

const field1 = document.querySelector('.thaday');
const field2 = document.querySelector('.thamonth');
const field3 = document.querySelector('.thayear');

const valid1 = document.querySelector('.thatday');
const valid2 = document.querySelector('.thatmonth');
const valid3 = document.querySelector('.thatyear');

function allErrors() {
    field1.classList.remove('error')
    field2.classList.remove('error')
    field3.classList.remove('error')
    valid1.classList.remove('error')
    valid2.classList.remove('error')
    valid3.classList.remove('error')
}

// let day;
let today = new Date;
equal.addEventListener('click', (e) => {
    const dayin = Number(input1 .value);
    const month = Number(input2.value);
    const year = Number(input3.value);

    let yearCalculated = today.getFullYear() - year;
    let monthCalculated = today.getMonth() + 1 - month;
    let dayCalculated = today.getDate() - dayin;
    
//   Error Checks

// error check for not putting a number
if (isNaN(yearCalculated) || isNaN(monthCalculated) || isNaN(dayCalculated)) {
    field1.classList.remove('error')
    field2.classList.remove('error')
    field3.classList.remove('error')
        if (isNaN(dayin)) {
            valid1.classList.add('error')
        }
        if (isNaN(month)) {
            valid2.classList.add('error')
        }
        if (isNaN(year)) {
            valid3.classList.add('error')
        }
        return
    }
// error check for no input
if (input1.value == '' || input2.value == '' || input3.value == '') {
    valid1.classList.remove('error')
    valid2.classList.remove('error')
    valid3.classList.remove('error')
        if (input1.value == '') {
            field1.classList.add('error')
        }
        if (input2.value == ''){
            field2.classList.add('error')
        }
        if (input3.value == '') {
           field3.classList.add('error')
        }
        return
    }
// checking for correct date
if (dayin < 1 || month < 1 || year < 1) {
    allErrors()
    console.log('a');
    
    if (dayin < 1) {
        valid1.classList.add('error')
    }
    if (month < 1) {
        valid1.classList.add('error')
    }
    if (year < 1) {
        valid3.classList.add('error')
    }
    return
}
if (dayin > 31 || month > 12 || year >= today.getFullYear()) {
    allErrors()
    
    if (dayin > 31) {
        valid1.classList.add('error')
    }
    if (month > 12) {
        valid2.classList.add('error')
    }
    if (year >= today.getFullYear()) {
        if (month >= today.getMonth() + 1) {
            if (dayin >= today.getDate()) {
                valid3.classList.add('error')
                return
            }
        }
        // valid3.classList.add('error')
    }
}

// Clearing all errors
    
    allErrors();
    
// Calculating the time
    if (dayCalculated.toString().includes('-')) {
        monthCalculated = monthCalculated - 1;
        dayCalculated = 30 + dayCalculated;

    }
    if (monthCalculated.toString().includes('-')) {
        yearCalculated = yearCalculated - 1;
        monthCalculated = 12 + monthCalculated;
    }
    
    
    anotherdash.textContent = `${yearCalculated} ‎`;
    anotherdash2.textContent = `${monthCalculated} ‎`;
    anotherdash3.textContent = `${dayCalculated} ‎`;
})


