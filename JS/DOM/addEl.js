//Adding Elements

//document.createElement('p')
let newP = document.createElement('p');
console.dir(newP);
newP.innerText = "Hi I am a new paragraph";
console.dir(newP);

//appendChild(element) -> To show element on the webpage
let classP = document.querySelector('.projectDetails');
classP.appendChild(newP);

//apend(element) - Appends string/text at the last
newP.append(". This is new text.");

//prepend(element) - Appends string/text at the first
newP.prepend("I am Ashutosh Shukla."); //Appends given string to the newP at the first

//insertAdjacent(where,element)
/*position ->
'beforebegin': before the targetElement itself
'afterbegin': Just inside the targetElement,before its first child
'beforend': Just inside the targetElement, after its first child
'afterend': after the targetElement itself
*/
