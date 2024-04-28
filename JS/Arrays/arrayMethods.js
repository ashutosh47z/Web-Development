/* Other Array Methods
1.forEach -> It runs individually again and again for every element of an array
arr.forEach(some function definition or name);
*/
let arr = [15, 9, 6, 4, 10];
let print = function (el) {
    console.log(el);
};
arr.forEach(print);
arr.forEach(function (el) {  // We can pass function definition also into the farEach
    console.log(el);
});

let arr1 = [
    {
        name: 'Ashutosh',
        marks: 95,
    },
    {
        name: 'Advik',
        marks: 97,

    },
    {
        name: 'Suyash',
        marks: 70,

    },
];
arr1.forEach((student) => {
    console.log(student.marks);
});

// 2. Map Method -> It stores the return value of the function to a new array 
// let newArr = arr.map(some function definition or name);
let num = [1, 2, 3];
let double = num.map((el) => {
    return el * 2;
});
console.log(double);
let arr2 = [
    {
        name: 'Ashutosh',
        marks: 95,
    },
    {
        name: 'Advik',
        marks: 97,

    },
    {
        name: 'Suyash',
        marks: 70,

    },
];
let gpa = arr2.map((el) => {
    return el.marks / 10;
}
);
console.log(gpa);

// 3. Filter method -> It creates new array and store the element only and only if callback comes out to true
// let newArr = arr.filter(some function definition or name);
let nums = [1, 2, 5, 6, 9, 7, 10];
let even = nums.filter((el) => (
    (el % 2 == 0)   // Used parethesis instead of curly braces because return statement is not used
));                 // even -> true odd -> false
console.log(even);

//4. Every Method -> Returns true if every element of array gives true for some function. Else returns false
// arr.every(some function definition or name);
// Callback -> True or False
even = [2, 4, 6, 8, 10];
let res = even.every((el) => (el % 2 == 0));
console.log(res);

//5. Some Method -> returns true if some elements of array gives true for some function. Else returns false
//arr.some(some function definition or name);
let res1 = even.some((el) => el % 2 != 0);
console.log(res1);

//6. Reduce Method -> Reduces the array to single value
//arr.reduce(reducer function with 2 variables for (accumulator,element));
let num2 = [1, 2, 3, 4]
let finalVal = num2.reduce((res, el) => {   // res -> accumulator el-> element
    //console.log(res);
    return (res + el)
});
console.log(finalVal); 