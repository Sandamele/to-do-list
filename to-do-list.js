var btnAddToDoList = document.getElementById("to-do-list-add-btn");
var num = 0;
btnAddToDoList.addEventListener("click", () => {
  num++;
  var getDate = document.getElementById("to-do-list-due-date").value;
  var getList = document.getElementById("to-do-list-info").value;
  var divDisplayList = document.getElementById("display-list-table-body");
  var combineInfo = `
  <tr id='list${num}'>
    <td> ${getDate}</td>
    <td> ${getList}</td> 
    <td>
        <button class='btnDelete' id='delete_${num}' onclick='deleteToDo(this.id)'>X</button>
    </td>
  </tr>`;
  divDisplayList.insertAdjacentHTML("beforeend", combineInfo);

  console.log(num);
});

function deleteToDo(btn_id) {
  var getDeleteBtn = btn_id;
  var getNumber = getDeleteBtn.split("_");
  var paraId = document.getElementById(`list${getNumber[1]}`);
  paraId.parentNode.removeChild(paraId);
  // console.log(paraId);
}
