const taskList = [];
let createTask = document.getElementById("createTask");

createTask.addEventListener("click", (event) => {
  console.log("click");
  pushNewTask();
});

function pushNewTask() {
  // title
  const obj = [];
  let inputTitle = document.getElementById("title").value;
  obj["title"] = inputTitle;
  // date
  let inputDate = document.getElementById("date").value;
  obj["date"] = inputDate;
  // start time
  let inputStartTime = document.getElementById("startTime").value;
  obj["startTime"] = inputStartTime;
  // end time
  let inputEndTime = document.getElementById("endTime").value;
  obj["endTime"] = inputEndTime;
  // desciption
  let inputDescription = document.getElementById("description").value;
  obj["description"] = inputDescription;
  // urgent
  let inputUrgent = document.getElementById("urgent").checked;
  obj["urgent"] = inputUrgent;

  taskList.push(obj);
  
  
  location.href = "index.html";
}
