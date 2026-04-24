var button = document.getElementById("Addtask")
var task = document.getElementById("task")
 var todos = document.getElementById("list")

 function Addatask ()
 {
    var item = document.createElement("li");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    item.textContent = (task.value);
    item.appendChild(checkbox);
    todos.appendChild(item);
    
    task.value = "";

    checkbox.addEventListener("change",(event) =>
{
  if(event.target.checked){
    event.target.closest("li").remove();
  }
});
 }





task.addEventListener("keydown", (event) =>{
  if (event.key === "Enter")
  {
      Addatask();
  }
});

button.addEventListener("click", function()
{
    Addatask();
});
