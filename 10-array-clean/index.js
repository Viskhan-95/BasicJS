
const check = num => num < 0;

const array = [1, 5, -7, 8, -1, 0];

const filter = (arr, fn) => {
    for (let i = 0; i < arr.length; i++) {
        fn(arr[i]) ? arr.splice(i, 1) : '';
    }
    return arr;
}

console.log(filter(array, check))