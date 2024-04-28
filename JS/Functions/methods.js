/* Methods in Js
Methods -> Actions that can be performed on an object
*/
const calculator = {      // declaring an object 'calculator'
    num: 55,
    add: function (a, b) {
        return a + b;
    },
    sub: function (a, b) {
        return a - b;
    },
    mul: function (a, b) {
        return a * b;
    },

};
calculator.add(3, 4); // add is method of calculator object
calculator.sub(3, 4); //sub is another method of calculator object
calculator.mul(3, 4); //mul is another method of calculator object

//Methods Shorthand
const calculator1 = {      // declaring an object 'calculator' 
    add(a, b) {
        return a + b;
    },
    sub(a, b) {            // Shorthand for declaring methods
        return a - b;
    },
    mul(a, b) {
        return a * b;
    }

};
