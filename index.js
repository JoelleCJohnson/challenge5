function daysSinceBorn(event){
    
    event.preventDefault();

    //retrieve data from html doc
    const birthYear = event.target.birthYear.valueAsNumber
    const birthMonth = event.target.birthMonth.valueAsNumber
    const birthDay = event.target.birthDay.valueAsNumber
    const currentYear = event.target.currentYear.valueAsNumber
    const currentMonth = event.target.currentMonth.valueAsNumber
    const currentDay = event.target.currentDay.valueAsNumber

    //set a counter for days
    let days = 0
    
    //calculate leap years
    for(let i = birthYear; i <= currentYear; i++){
        let leapYears = 0
        if (i % 4 === 0){
            leapYears++
        }
    }
    //add leap year days to days counter
    days += leapYears


    //calculate years
    let years = currentYear - birthYear
    //add years to days counter
    days += (years * 365)
  
    //calcluate how many days alive in birth month & add to counter
    if((birthMonth === 1) || (birthMonth === 3) || (birthMonth === 5) || (birthMonth === 7) || (birthMonth === 8) || (birthMonth === 10) || (birthMonth === 12)){
        days += 31 - birthDay
    }
    else if((birthMonth === 4) || (birthMonth === 6) || (birthMonth === 9) || (birthMonth === 11)){
        days += 30 - birthDay
    }
    else{
        days += 28 - birthDay
    }

    //calculate how many days alive in birth year & add to counter
    if (birthMonth === 1){
        days += 334
    } else if(birthMonth === 2){
        days += 306
    } else if(birthMonth === 3){
        days += 275
    } else if(birthMonth === 4){
        days += 245
    } else if(birthMonth === 5){
        days += 214
    } else if(birthMonth === 6){
        days += 184
    } else if(birthMonth === 7){
        days += 153
    } else if(birthMonth === 8){
        days += 122
    } else if(birthMonth === 9){
        days += 92
    } else if(birthMonth === 10){
        days += 61
    } else if(birthMonth === 11){
        days += 31
    } else {
        days += 0
    }

    //calculate how many days alive in current year & add to counter
    if (currentMonth === 1){
        days += 0
    } else if(currentMonth === 2){
        days += 31
    } else if(currentMonth === 3){
        days += 59
    } else if(currentMonth === 4){
        days += 90
    } else if(currentMonth === 5){
        days += 120
    } else if(currentMonth === 6){
        days += 151
    } else if(currentMonth === 7){
        days += 181
    } else if(currentMonth === 8){
        days += 212
    } else if(currentMonth === 9){
        days += 243
    } else if(currentMonth === 10){
        days += 273
    } else if(currentMonth === 11){
        days += 304
    } else {
        days += 334
    }
    //calculate days alive in current month
    days += currentDay
    
    //output to h2 in html
    const h2 = document.querySelector('h2')
    h2.innerText = "You are " + days + "days old"
}
const form = document.querySelector('form')
form.addEventListener('submit', daysSinceBorn)