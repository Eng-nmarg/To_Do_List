const add_btn = document.querySelector(".add-btn");
const todo_input = document.querySelector("#todo-input");
const todo_list = document.querySelector(".todo-list");
let arr = [];

function adding() {
    const item = {
        id: Date.now(),
        title: todo_input.value
    }
    arr.push(item);
    display(item);
}
function display(item) {
    const itemdiv = document.createElement("div");
    itemdiv.classList.add("todo-item");
    itemdiv.setAttribute("data-id", item.id);
    itemdiv.innerHTML = `
 \<input type="checkbox">
 \<span>${item.title}\</span>
 \<button class="delete">Delet\</button>`
    todo_list.appendChild(itemdiv);
}
