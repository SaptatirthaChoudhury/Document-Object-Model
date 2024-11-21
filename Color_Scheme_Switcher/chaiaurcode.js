
const buttons = document.querySelectorAll('.button')

buttons.forEach(function (button) {
    //console.log(button);
    button.addEventListener('click', function (e) {
        console.log(e);
        console.log(e.target);
        if (e.target.id === 'grey') {
            document.body.style.backgroundColor = e.target.id
        }
        if (e.target.id === 'white') {
            document.body.style.backgroundColor = e.target.id
        }
        if (e.target.id === 'yellow') {
            document.body.style.backgroundColor = e.target.id
        }
        if (e.target.id === 'blue') {
            document.body.style.backgroundColor = e.target.id
        }
    })
})





