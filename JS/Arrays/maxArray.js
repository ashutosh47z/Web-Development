// Maximum of an array using reduce method
let arr = [6, 5, 4, 1, 7, 8, 9, 14, 13, 20, 25];
// let max = -1;
// for (let i = 0; i < arr.length; i++) {
//     if (max < arr[i]) {
//         max = arr[i];
//     }
// }
// console.log(max);
let max = arr.reduce((max, el) => {   //Using reduce method
    if (max < el) {
        return el;
    } else {
        return max;
    }
});
console.log(max);