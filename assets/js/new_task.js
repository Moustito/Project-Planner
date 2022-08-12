var taskList = [];

let createTask = document.getElementById("createTask");
let newTask = document.getElementsByClassName("newTask")[0];

createTask.addEventListener("click", (event) => {
  console.log("click");
  if (
    !(document.getElementById("title").value === "") &&
    !(document.getElementById("date").value === "")
  ) {
    let obj = pushNewTask();
    displayTaskList(obj);
    newTask.style.display = "none";
    clearInput();
  }
});

let Back = document.getElementsByClassName("buttonBack")[0];
Back.addEventListener("click", (event) => {
  newTask.style.display = "none";
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
  return obj;
}

function displayNewTask() {
  newTask.style.display = "block";
}

function clearInput() {
  document.getElementById("title").value = "";
  document.getElementById("date").value = "jj/mm/aaaa";
  document.getElementById("startTime").value = "--:--";
  document.getElementById("endTime").value = "--:--";
  document.getElementById("description").value = "";
  document.getElementById("urgent").checked = false;
}

function displayTaskList(obj) {
  // Card closed
  let task__cards = document.getElementsByClassName("task__cards");
  let task__card = document.createElement("div");
  task__cards[0].appendChild(task__card);
  task__card.classList.add("task__card", "card__todo");

  let task__card__closed = document.createElement("section");
  task__card.appendChild(task__card__closed);
  task__card__closed.classList.add("task__card__closed", "card__todo__closed");

  let task__card__icon = document.createElement("div");
  task__card__closed.appendChild(task__card__icon);
  task__card__icon.classList.add("task__card__icon");
  let icon = document.createElement("img");
  icon.src = "assets/images/todo.png"; // remplacer par un if entre 'to do', 'doing' , 'done'
  task__card__icon.appendChild(icon);
  icon.classList.add("todo__icon");

  let task__card__presentation = document.createElement("div");
  task__card__closed.appendChild(task__card__presentation);
  task__card__presentation.classList.add("task__card__presentation");

  let task__card__presentation__title = document.createElement("h3");
  task__card__presentation.appendChild(task__card__presentation__title);
  task__card__presentation__title.classList.add(
    "task__card__presentation__title"
  );
  task__card__presentation__title.id = "task__title";
  let task__card__presentation__title_text = document.createTextNode(obj.title);
  task__card__presentation__title.appendChild(
    task__card__presentation__title_text
  );

  let task__card__presentation__daysLeft = document.createElement("p");
  task__card__presentation.appendChild(task__card__presentation__daysLeft);
  task__card__presentation__daysLeft.classList.add(
    "task__card__presentation__daysLeft"
  );
  let task__card__presentation__daysLeft_text = document.createTextNode(
    obj.date
  );
  task__card__presentation__daysLeft.appendChild(
    task__card__presentation__daysLeft_text
  );

  let task__card__presentation__daysLeftUntil = document.createElement("span");
  task__card__presentation__daysLeft.appendChild(
    task__card__presentation__daysLeftUntil
  );
  task__card__presentation__daysLeftUntil.classList.add(
    "task__card__presentation__daysLeftUntil"
  );

  if (document.getElementById("urgent").checked == true) {
    let task__card__important = document.createElement("img");
    task__card__important.src = "assets/images/danger.png"; // remplacer par un if si checkbox= true => visible
    task__card__closed.appendChild(task__card__important);
    task__card__important.classList.add("task__card__important");
    console.log('checked');
  }

  // Card open
  let task__card__opened = document.createElement("section");
  task__card.appendChild(task__card__opened);
  task__card__opened.classList.add("task__card__opened", "card__todo__opened");

  let task__card__header = document.createElement("div");
  task__card__opened.appendChild(task__card__header);
  task__card__header.classList.add("task__card__header");

  let task__card__header__category = document.createElement("h4");
  task__card__header.appendChild(task__card__header__category);
  task__card__header__category.classList.add(
    "task__card__header__category",
    "title__todo"
  );
  let task__card__header__category_text = document.createTextNode("todo");
  task__card__header__category.appendChild(task__card__header__category_text);

  let task__card__header__title = document.createElement("h3");
  task__card__header.appendChild(task__card__header__title);
  task__card__header__title.classList.add("task__card__header__title");
  let task__card__header__title_text = document.createTextNode(obj.title);
  task__card__header__title.appendChild(task__card__header__title_text);

  let task__card__content = document.createElement("div");
  task__card__opened.appendChild(task__card__content);
  task__card__content.classList.add("task__card__content");

  let task__card__content__description = document.createElement("p");
  task__card__content.appendChild(task__card__content__description);
  task__card__content__description.classList.add(
    "task__card__content__description"
  );
  let task__card__content__description_text = document.createTextNode(
    taskList.desciption
  );
  task__card__content__description.appendChild(
    task__card__content__description_text
  );

  let task__card__content__startEnd = document.createElement("div");
  task__card__content.appendChild(task__card__content__startEnd);
  task__card__content.classList.add("task__card__content__startEnd");

  let task__time = document.createElement("div");
  task__card__content__startEnd.appendChild(task__time);
  task__time.classList.add("task__time");
  let task__time_text = document.createTextNode("Start : ");
  task__time.appendChild(task__time_text);

  let start__task = document.createElement("span");
  task__time.appendChild(start__task);
  start__task.id = "start__task";
  let start__task_text = document.createTextNode(obj.startTime);
  start__task.appendChild(start__task_text);

  let task__time2 = document.createElement("div");
  task__card__content__startEnd.appendChild(task__time2);
  task__time2.classList.add("task__time");
  let task__time2_text = document.createTextNode("End : ");
  task__time2.appendChild(task__time2_text);

  let end__task = document.createElement("span");
  task__time.appendChild(end__task);
  end__task.id = "end__task";
  let end__task_text = document.createTextNode(obj.endTime);
  end__task.appendChild(end__task_text);

  let task__card__content__select = document.createElement("div");
  task__card__content.appendChild(task__card__content__select);
  task__card__content__select.classList.add("task__card__content__select");

  let task__card__select__label = document.createElement("label");
  task__card__content__select.appendChild(task__card__select__label);
  task__card__select__label.id = "task__card__select__label";
  let task__card__select__label_text =
    document.createTextNode("Current Status : ");
  task__card__select__label.appendChild(task__card__select__label_text);

  let checkboxTodo = document.createElement("option");
  task__card__select__label.appendChild(checkboxTodo);
  checkboxTodo.classList.add("checkbox");
  checkboxTodo.id = "select__todo";
  // set value "todo"
  let checkboxTodo_text = document.createTextNode("To Do");
  checkboxTodo.appendChild(checkboxTodo_text);

  let checkboxProgress = document.createElement("option");
  task__card__select__label.appendChild(checkboxProgress);
  checkboxProgress.classList.add("checkbox");
  checkboxProgress.id = "select__progress";
  // set value "progress"
  let checkboxProgress_text = document.createTextNode("In Progress");
  checkboxProgress.appendChild(checkboxProgress_text);

  let checkboxDone = document.createElement("option");
  task__card__select__label.appendChild(checkboxDone);
  checkboxDone.classList.add("checkbox");
  checkboxDone.id = "select__done";
  // set value "Done"
  let checkboxDone_text = document.createTextNode("To Do");
  checkboxDone.appendChild(checkboxDone_text);
}
