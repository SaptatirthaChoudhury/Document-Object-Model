const form = document.querySelector("form")
//console.log(form);

form.addEventListener('submit', function (e) {
    e.preventDefault()

    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const results = document.querySelector('#results')

    if (height === '' || height <= 0 || isNaN(height)) {
        results.innerHTML = 'Please give a valid height'
    } else if (weight === '' || weight <= 0 || isNaN(weight)) {
        results.innerHTML = 'Please give a valid weight'
    } else {
        const BMI = (weight / ((height * height) / 10000)).toFixed(2)
        // show the results
        results.innerHTML = `<span>${BMI}</span>`

        const span = document.createElement('span')

        if (BMI < 18.6) span.innerHTML = `<br> You are Under Weight`
        else if (BMI > 18.6 && BMI < 24.9) span.innerHTML = `<br> You are Normal Weight`
        else span.innerHTML = `<br> You are Over weight`

        results.appendChild(span)

    }



})