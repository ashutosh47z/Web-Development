/* JS Object Literals -> Used to store keyed collections and complex entities
property -> (key, value) pair
objects are collection of properties
*/
// Creating Object Literals
//Usually We declare objects with const keyword
const student = {
    Name: "Ashutosh Shukla",
    Age: 18,
    Marks: 88,
    city: 'Kanpur'
}
console.log(student);
console.log(typeof (student));

// JS automatically converts object keys to strings
//Even if we made the number as a key, the number will be converted to string
student.city = 'Noida';
console.log(student);
// Key: Value can be deleted using 'delete' keyword
//delete.object.keyname; // Syntax for deletion