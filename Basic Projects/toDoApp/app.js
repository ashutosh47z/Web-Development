let btn = document.querySelector("button");
let ul = document.querySelector("ul");
let inp = document.querySelector('input');
btn.addEventListener('click', function () {
    let item = document.createElement("li");
    let delBtn = document.createElement("button");
    delBtn.innerText = 'delete';
    delBtn.classList.add("delete");
    item.innerText = inp.value;
    item.appendChild(delBtn);
    ul.appendChild(item);
    console.log(inp.value);
    inp.value = '';

});
//Not a good approach, delete button will not work.It will not work for new items added in the list
// let delBtns = document.querySelectorAll('.delete');
// for (delBtn of delBtns) {
//     delBtn.addEventListener("click", function () {
//         let par = this.parentElement;
//         par.remove();

//     });
// };

//Event Delegation -> Event Bubbling will be used
ul.addEventListener('click', function (Event) {
    if (Event.target.nodeName == 'BUTTON') {
        let listItem = Event.target.parentElement;
        listItem.remove();
        console.log("Element has been deleted successfully");
    }
});



