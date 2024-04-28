//'this' keyword in Java Script
//'this' keyword refers to an object that is executing the current piece of code
const student = {     //student is an object
    name: 'Ashutosh',
    age: 18,
    eng: 92,
    math: 94,
    phy: 97,
    getAvg() {
        let avg = (this.eng + this.math + this.phy) / 3; // 'this' keyword refers to the student object
        console.log(`${this.name} got average marks = ${avg}`); // Use of template literals
    }
}