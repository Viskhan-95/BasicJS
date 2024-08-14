
const arr=[1, 40, -5, 10, 0];

function sortAscending(array) {
    for(i = 0; i < array.length; i++) {
        for (let j = i; j < array.length; j++) {
            if(array[i] > array[j]) {
                let temp = array[i];
                array[i] = array[j];
                array[j] = temp;
            }
        }
    }
    return array;
}

function sortDescending(array) {
    for(i = 0; i < array.length; i++) {
        for (let j = i; j < array.length; j++) {
            if(array[i] < array[j]) {
                let temp = array[i];
                array[i] = array[j];
                array[j] = temp;
            }
        }
    }
    return array;
}



console.log(sortAscending(arr));

