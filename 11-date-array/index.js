//Проверяем дату на корректность и возвращаем массив даты
const parsingDate = date => {
    switch (true) {
        case date.split('-') != date && date.split('-').length == 3 :
            return date.split('-');
        case date.split('.') != date && date.split('.').length == 3 :
            return date.split('.');
        case date.split('/') != date && date.split('/').length == 3 :
            return date.split('/');
        default : 
            return false;
    }
}

//Проверяем, является ли год высокосным
const isLeapYear = year => (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)


//Проверяем дату на валидность
const isValidDate = date => {
    if(parsingDate(date) == false) return false;

    const parsDate = parsingDate(date)
        const day = parseInt(parsDate[0]);
        const month = parseInt(parsDate[1]);
        const year = parseInt(parsDate[2]);
    
        const daysInMonth = [31, (isLeapYear(year) ? 29 : 28), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
        
        if(isNaN(day) || isNaN(month) || isNaN(year)) return false;
        if(daysInMonth < 1 || day > daysInMonth[month - 1]) return false;
        if(year.length == 4 ) return false;
    
        return true;
}


//Проверяем массив дат на валидность
const isValidArrayDate = arrayDate => {
    const filterArrayDate = arrayDate.filter(date => isValidDate(date));
    return filterArrayDate.map(date => {
        if(date.includes('/')) {
            return `${date.split('/')[1]}-${date.split('/')[0]}-${date.split('/')[2]}`
        } else {
            return date.split(/\.|\-/).join('-');

        }
    })
}

console.log(isValidArrayDate(['10/30/2020', '10.10.2022', '30-12-1987', '32-12-1987', '29-02-2023', '29-02-2024']));