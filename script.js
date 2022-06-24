let start = document.getElementById('start');
let up = document.getElementById('up');
let down = document.getElementById('down');
let conditioner = document.getElementById('conditioner');
let temperature = document.getElementById('temperature');
let snow = document.querySelector('.snow')
let onOf = false;
let initialtemperature = 20;
start.addEventListener('click', function () {
    conditioner.classList.toggle('display-temperature')
    onOf = !onOf
    onOf ? start.innerHTML = "Off" : start.innerHTML = "Start"
    snow.classList.toggle('display-snow')
})
up.addEventListener('click', function () {
    if (initialtemperature == 30) {
        return initialtemperature
    }
    else {
        temperature.removeAttribute("init");
        temperature.setAttribute("init", `${initialtemperature += 1}`)
    }

})
down.addEventListener('click', function () {
    if (initialtemperature == 17) {
        return initialtemperature
    }
    else {
        temperature.removeAttribute("init");
        temperature.setAttribute("init", `${initialtemperature -= 1}`)
    }

})