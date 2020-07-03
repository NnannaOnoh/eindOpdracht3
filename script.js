log = console.log

const createListContent = task => {

  let li = document.createElement("li");
  let checkbox = document.createElement("input");
  let label = document.createElement('label');
  let btn = document.createElement('button')

  li.classList.add("li");
  checkbox.type = "checkbox"; 
  checkbox.name = task.id; 
  checkbox.value = true; 
  checkbox.id = task.id;
  checkbox.classList.add("checkbox");
  label.htmlFor = task.id;
  label.appendChild(document.createTextNode(task.description));

  li.append(checkbox); 
  li.append(label);
  li.append(btn);

  log(li)
  
  return li;
};

const addListContentToDom = tasks => {

  const list = document.getElementById("ul");
  list.innerHTML = "";
  const listItems = tasks.map(createListContent);

  listItems.forEach(listItem => {
    list.appendChild(listItem);
  });

};
















let ftr = document.getElementById("footer");
ftr.addEventListener('click', function(){
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  });

  let addField = document.getElementById("Fname")

  addField.addEventListener("click", myFunction1);
function myFunction1() {
  addField.value=""
}

let btn = document.getElementById("addBtn");
btn.addEventListener('click', function(){
  alert("btn clicked")
  postDataToFirebase()
});

addField.value="Enter task to add"