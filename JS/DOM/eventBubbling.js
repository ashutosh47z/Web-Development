let div = document.querySelector('div');
let ul = document.querySelector('ul');
let lis = document.querySelectorAll('li');
div.addEventListener('click', function () {
    console.log("Div was clicked");
});
ul.addEventListener('click', function (event) {
    event.stopPropagation(); //stopPropagation() method will stop event bubbling
    console.log("Ul was clicked");
});
for (li of lis) {
    li.addEventListener('click', function (event) {
        event.stopPropagation(); //stopPropagation() method will stop event bubbling
        console.log("li was clicked");   // It will trigger other event listeners also and results into event bubbling
    });
};
