const languages = prompt("Введите язык");

switch (languages.toLowerCase()) {
    case "ru" : 
        console.log("Добрый день");
        break;
    case "en" : 
        console.log("Good afternoon");
        break;
    case "de" : 
        console.log("Guten Tag");
        break;
        default : 
        console.log("Не правильный ввод. Введите язык")
}