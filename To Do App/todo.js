let toDoList = [];
displayItems();

function addToDo() {
  let inputElement = document.querySelector('#todo_input');
    let dateElement = document.querySelector('#todo_date');
  let toDoItem = inputElement.value;
 let toDoDate= dateElement.value;
  toDoList.push({item : toDoItem, dueDate: toDoDate});
  
  inputElement.value = '';
dateElement.value = '';
  displayItems();
}

function displayItems(){
  let containerElement = document.querySelector('.todo_container');
let newHtml='';
    for(let i = 0; i< toDoList.length; i++){
     let{item,dueDate}= toDoList[i];
      newHtml += `
      <div>
      <span> ${itme}</span>
       <span> ${dueDate}</span>
      <button onclick="to</DoList.splice(${i},1);
      displayItem();"> Delete button> 
      </div>
      `;
  }
  containerElement.innerHTML = newHtml;
}