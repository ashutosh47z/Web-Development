//Form Events
let form = document.querySelector('form');
form.addEventListener("submit", function (event) {
    event.preventDefault();
    //alert("Form Submitted");

    //Extracting Form Elements
    // let name = document.querySelector("#name");
    // let email = document.querySelector("#email");
    //Alternative approach for extractig form elements
    let name = this.elements[0];  // Same as form[0] or form.elements[0]
    let email = this.elements[1]; //Same as form[1] or form.elements[1]
    console.log(name.value, email.value);
    alert(`hi ${name.value},Your email is ${email.value}`);

});





