"use strict"

function getInputValues() {
    const leftValue = document.querySelector('.input-panel__left').value;
    const rightValue = document.querySelector('.input-panel__right').value;
    return [leftValue, rightValue];
}

function check() {
    const [leftValue, rightValue] = getInputValues();
    return leftValue !== '' && rightValue !== '';
}

function clean() {
    document.querySelectorAll('.input-panel__left, .input-panel__right').forEach(input => input.value = '');
    document.querySelector('.error').style.display = 'none';
}

function displayResult(result) {
    document.querySelector('.output-panel').innerText = result;
}

function error(text) {
    document.querySelector('.error').innerText = text;
    document.querySelector('.error').style.display = 'block';
}

document.querySelector('.math-operation').addEventListener('click', function(e) {
    if(e.target.classList.contains('operation-btn')) {
        if(!check()) {
            error('заполните все поля');
            return;
        }

        let res;
        const [leftValue, rightValue] = getInputValues();
        const num1 = Number(leftValue);
        const num2 = Number(rightValue);
        const operation = e.target.getAttribute('data-operation');

        switch (operation) {
            case '+' : res = num1 + num2;
                break;
            case '-' : res = num1 - num2;
                break;
            case '*' : res = num1 * num2;
                break;
            case '/' : res = num2 !== 0 ? num1 / num2 : '';
            break;
        }
        displayResult(res);

        res !== '' ? clean() : clean() & error('нельзя делить на ноль');
    }
})
