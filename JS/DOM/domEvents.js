//DOM Events -> Events are signals that something has occures(user inputs/actions)
//onclick: when an element is clicked
//ommouseenter: when mouse enters an element
let btn = document.querySelector("button");
console.dir(btn);
btn.onclick = function () {
    alert("button was clicked");

};
btn.onmouseenter = function () {
    console.log('You entered a button');
}