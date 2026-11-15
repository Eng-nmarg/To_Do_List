
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

function deletItem(id){
    arr= arr.filter(item=>item.id !==id);
    
    todo_list.innerHTML="";
    
    arr.forEach(item => display(item))
    
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


add_btn.addEventListener("click",(e)=>{

    adding ();
   
   
   })
   
   todo_list.addEventListener("click",(e)=>{
       const targ=e.target;
       const perent =targ.closest(".todo-item");
       const id =Number(perent.dataset.id);
   
   
       if(targ.classList.contains("delete")){
           deletItem(id);
       }
   
   
    
   })
   
 
