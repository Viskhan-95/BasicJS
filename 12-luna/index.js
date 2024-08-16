//Проверяем на валидность номер карты
const isValidCard = num => {
    num = num.replaceAll('-', '');

    if(num.length != 16) return false;

    for(const char of num) {
        if(isNaN(Number(char))) {
            return false;
        } else {
            return num;
        }
    }
}

//Реализовано с помощью разбиения строки на массив
const arrayLuna = numberCard => {
    const isValidNum = isValidCard(numberCard);

    if(!isValidNum) return false;

    const arrayNumCard = isValidNum.split('').map((char, i) => {
        if((i + 1) % 2 != 0) {
            return (Number(char) * 2 > 9 ? Number(char) * 2 - 9 : Number(char) * 2);
        } else {
            return Number(char);
        }
    });

    const res = arrayNumCard.reduce((acc, num) => {
        return acc += num;
    }, 0);

    return res % 10 == 0;
}


//Реализовано с помошью методов рабоы со строками
const stringLuna = numberCard => {
    const isValidNum = isValidCard(numberCard);

    if(!isValidNum) return false;

    let res = 0;
    for(const i in isValidNum) {
        console.log(typeof(i)) //Почему string? Замучился из-за этого)))
        
        if(i % 2 == 0){
            res += Number(isValidNum[i]) * 2 > 9 ? Number(isValidNum[i]) * 2 - 9 : Number(isValidNum[i]) * 2
        } else {
            res += Number(isValidNum[i]);
        }
    }

    return res % 10 == 0;
}

console.log(arrayLuna('4561-2612-1234-5464'));
console.log(arrayLuna('4561-2612-1234-5467'));

console.log(stringLuna('4561-2612-1234-5464'));
console.log(stringLuna('4561-2612-1234-5467'));