
function deletItem(id){
    arr= arr.filter(item=>item.id !==id);
    
    todo_list.innerHTML="";
    
    arr.forEach(item => display(item))
    
    }