//get variables:
const questions = document.querySelectorAll('.qtn');
let plus;
let min;
let par;

//event listeners:
questions.forEach (element => {
    element.addEventListener('click', () => {
        par = element.querySelector('p');
        min = element.querySelector('.min');
        plus = element.querySelector('.plus');
        if (par) {
            showAnswer();
        };
    });
});


//functions:
function showAnswer(event) {
    if (par.style.display === 'none') {
        par.style.display = 'block';
        plus.style.display = 'none';
        min.style.display = 'block';
    } else {
        par.style.display = 'none';
        plus.style.display = 'block';
        min.style.display = 'none';
    }
}


