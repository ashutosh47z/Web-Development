// 'this' with arrow functions
// for functions, this refers to the calling object
// for arrow function, this refers to the parent object/scope. They inherit he scope of parent object i.e. Lexical Scope
const student = {
    name: 'Ashutosh',
    marks: 95,
    prop: this,
    getName: function () {
        console.log(this);   //global scope 
        return this.name;
    },
    getMarks: () => {
        console.log(this); //parent's scope or lexical scope -> 'window' object
        return this.marks;
    },
    getinfo1: function () {
        setTimeout(() => {
            console.log("Ashutosh Shukla")
            console.log(this);  //student object

        }, 2000);
    },
    getinfo2: function () {
        setInterval(function () {
            console.log("Time changes");
            console.log(this);  //window object
        }, 2000);
    }
};