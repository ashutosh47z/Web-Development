/* DOM -> Document Object Model
The DOM represents a document with a logical tree
It allows us to change/manipulate webpage content(HTML Elements)
*/
// Selecting Elements
//1. getElementById -> Returns a element as an object or null (if not found)
// document.getElementById
document.getElementById("mainImg");

//2. getElementByClassName -> Returns the element as HTML Collection or empty connection(if not found)
//document.getElementByClassName
document.getElementsByClassName("projectDetails");

//3.getElementByTagName -> Returns the element as an HTML Collection or empty collection(if not found)
//document.getElementByTagName
document.getElementsByTagName("p");

//Query Selectors-> Allows us to use any CSS selector
//document.querySelector
document.querySelector("h1");
console.dir(document.querySelector("#contact"));   // Selects a single value
console.dir(document.querySelectorAll("ul a"));  //Selects multiple values

// Using Properties and Methods
// innerText -> Shows the visible text contained in a node
// textContent -> Shows all the full text(hidden)
// innerHTML -> Shows the full markup
let para = document.querySelector("p");
para.innerText;
//para.innerText ='Hi!Ashutosh,this side' -> It will overwrite the paragraph
//para.innerText ='Hi!<b>Ashutosh</b>,this side' -> It will not recognise the tags
//para.innerHTML ='Hi!<b>Ashutosh</b>,this side' -> It will recognise content as well as tags