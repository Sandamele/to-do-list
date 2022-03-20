var btnAddToDoList = document.getElementById("to-do-list-add-btn");
var num = 0;
btnAddToDoList.addEventListener("click", () => {
  num++;
  var getDate = document.getElementById("to-do-list-due-date");
  var getList = document.getElementById("to-do-list-info");
  var setDate = new Date(getDate.value);
  var divDisplayList = document.getElementById("display-list-table-body");
  var combineInfo = `
  <tr id='list${num}'>
    <td> 
    ${setDate.getDate()}/${setDate.getMonth()}/${setDate.getFullYear()} ${setDate.getHours()}:${setDate.getMinutes()}
    </td>
    <td> ${getList.value}</td> 
    <td>
        <button class='btnDelete' id='delete_${num}' onclick='deleteToDo(this.id)'>X</button>
    </td>
  </tr>`;
  divDisplayList.insertAdjacentHTML("beforeend", combineInfo);
  getDate.value = " ";
  getList.value = " ";
});

function deleteToDo(btn_id) {
  var getDeleteBtn = btn_id;
  var getNumber = getDeleteBtn.split("_");
  var paraId = document.getElementById(`list${getNumber[1]}`);
  paraId.parentNode.removeChild(paraId);
  // console.log(paraId);
}
