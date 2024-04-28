// Event Listener
// addEventListener
// element.addEventListener(event,callback);
let btns = document.querySelectorAll('button');
for (btn of btns) {
    btn.addEventListener('click', sayHello);
    btn.addEventListener('dblclick', sayName);
}
function sayHello() {
    alert('Hello!');
}
function sayName() {
    alert('Ashutosh,this side!');
}

//Event Listeners For Elements
let para = document.querySelector('p');
para.addEventListener('click', function () {
    alert("Paragraph was clicked");
});

// 'this' in Event Listener -> When 'this' is used in a callback of event handler of something, it refers to that something
let btn1 = document.querySelector('button');
btn1.addEventListener('click', function () {
    console.log(this.innerText);
});

