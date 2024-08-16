
// let password = prompt('Введите пароль');

function crypto(password) {
    const res = password.split('');
    const resStart = res.slice(0, password.length / 2).reverse();
    const resEnd = res.slice(password.length / 2, password.length).reverse();
    
    return resStart.concat(resEnd).join('');
}

function check(secret, password) {
    const cryptoPassword = crypto(secret);
    return cryptoPassword == password
}

console.log(crypto('броняй'));
console.log(check('орбйян', 'броняй'))
