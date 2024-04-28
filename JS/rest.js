// Rest -> Rest allows a function to take an indefinite number of arguments and bundle them in an array
function sum(...args) {   //arguments
    return args.reduce((add, el) => add + el);
}

function min(msg, ...args) { //collecting arguments in a single array using rest '...args'
    console.log(msg);
    return args.reduce((min, el) => {
        if (min > el) {
            return el;
        } else {
            return min;

        };
    });
};