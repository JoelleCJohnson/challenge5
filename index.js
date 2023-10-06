function daysSinceBorn(event){
    event.preventDefault();
    const date = document.querySelector(birthDay.valueAsDate)
    const today = document.querySelector(today.valueAsDate)
    const yearDiff = today.Year
    const h2 = document.querySelector('h2')
    h2.innerText = "You are " + daydiff + "days old"
}
const form = document.querySelector('form')
form.addEventListener('submit', daysSinceBorn)