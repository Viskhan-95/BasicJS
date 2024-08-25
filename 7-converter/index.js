

const convertRubToEuro = sum => sum / 94;

const convertEuroToRub = sum => sum * 94;

const convertRubToDollar = sum => sum / 86;

const convertDollarToRub = sum => sum * 86;

const convertDollarToEuro = sum => sum * 0.9;

const convertEuroToDollar = sum => sum / 0.9;

function converter (sum, currencyOfFunds, currencyTarget) {

    switch (true) {
        case currencyOfFunds == 'ru' && currencyTarget == 'euro' :
            return convertRubToEuro(sum);

        case currencyOfFunds == 'euro' && currencyTarget == 'ru' :
            return convertEuroToRub(sum);

        case currencyOfFunds == 'ru' && currencyTarget == 'dollar' :
            return convertRubToDollar(sum);

        case currencyOfFunds == 'dollar' && currencyTarget == 'ru' :
            return convertDollarToRub(sum);

        case currencyOfFunds == 'dollar' && currencyTarget == 'euro' :
            return convertDollarToEuro(sum);

        case currencyOfFunds == 'euro' && currencyTarget == 'dollar' :
            return convertEuroToDollar(sum);

        default : return null;
    }
}

console.log(converter(100, 'euro', 'dollarff'));