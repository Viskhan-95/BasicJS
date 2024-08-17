"use strict"

function check() {
    if(document.querySelector('.input-panel__left').value == '') return false;
    if(document.querySelector('.input-panel__right').value == '') return false;
    return true;
}

function clean() {
    document.querySelector('.input-panel__left').value = '';
    document.querySelector('.input-panel__right').value = '';
    document.querySelector('.error').style.display = 'none';
}

function mathOperations(operation) {
    if(!check()) {
        document.querySelector('.error').style.display = 'block'
        return;
    } else {
        const num1 = Number(document.querySelector('.input-panel__left').value);
        const num2 = Number(document.querySelector('.input-panel__right').value);

        switch (operation) {
            case '+' : document.querySelector('.output-panel').innerText = (num1 + num2);
                break;
            case '-' : document.querySelector('.output-panel').innerText = (num1 - num2);
                break;
            case '*' : document.querySelector('.output-panel').innerText = (num1 * num2);
                break;
            case '/' : document.querySelector('.output-panel').innerText = (num1 / num2);
        }
        
        clean();
    }
}
