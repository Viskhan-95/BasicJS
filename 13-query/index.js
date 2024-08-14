
const query = {
    search: "Вася",
    take: 10
}

const returnQueryString = query => {
    const keys = Object.keys(query);
    const values = Object.values(query);

    return `${keys[0]}=${values[0]}&${keys[1]}=${values[1]}`
}

//Можно записать в одну строку
const returnQueryString2 = query => `${Object.keys(query)[0]}=${Object.values(query)[0]}&${Object.keys(query)[1]}=${Object.values(query)[1]}`;

console.log(returnQueryString(query));
console.log(returnQueryString2(query));