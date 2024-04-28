//Attributes Manipulation (getters and setters)
//obj.getAttribute(attr);
//obj.setAttribute(attr,val);
let img = document.querySelector('img');
img.getAttribute('src');
img.getAttribute('id'); // getting the value
img.setAttribute('class', 'image');// setting the value

//Manipulating Style with style attribute
// style property -> obj.style
let heading = document.querySelector('h1');
heading.style;
heading.style.color = 'purple';  //changes color to purple
heading.style.backgroundColor = 'aqua'; //changes background color to green

let links = document.querySelectorAll('ul a');
for (let i = 0; i < links.length; i++) {
    links[i].style.color = 'Yellow';
}
// Using for of loop
// for (link of links) {
//     link.style.color = 'Yellow';
// }
//Manipulating Style with classList
//obj.classList
let img1 = document.querySelector('img');
img1.classList;
//obj.classList.add() -> to add new classes
//obj.classList.remove() -> to remove classes
//obj.classList.contains() -> to check if class exists. It returns boolean value.
//obj.classList.toggle()-> to toggle between add and remove.It returns boolean value.

//Navigation on Page -> parentElement, children, previousElementSibling, nextElementSibling
//obj.parentElement will give parent element of the object

let ul = document.querySelector('ul');
ul.parentElement;
ul.children;
ul.childElementCount;
ul.children[2].previousElementSibling;
ul.children[1].nextElementSibling;

let navBar = document.querySelector('nav');
navBar.parentElement;
navBar.children;
navBar.childElementCount; //returns number of child for a parent