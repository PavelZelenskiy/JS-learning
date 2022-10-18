const tasks = [
    {
      id: "1138465078061",
      completed: false,
      text: "Посмотреть новый урок по JavaScript"
    },
    {
      id: "1138465078062",
      completed: false,
      text: "Выполнить тест после урока"
    },
    {
      id: "1138465078063",
      completed: false,
      text: "Выполнить ДЗ после урока"
    },
    {
        id: "12326564464",
        completed: false,
        text: "Понять откуда взялись запятые"
    },
    {
        id: "474984946",
        completed: false,
        text: "Понять как убрать запятые"
    },
  ];

const tasksList = document.querySelector('.tasks-list');
//   console.log(tasksList);
let tasksListArr =[];

for (const x of tasks) {
    tasksListArr.push( 
    `<div class="task-item" data-task-id='${x.id}'>
        <div class="task-item__main-container">
            <div class="task-item__main-content">
                <form class="checkbox-form">
                    <input class="checkbox-form__checkbox" type="checkbox" id='${x.id}'>
                    <label for='${x.id}'></label>
                </form>
                <span class="task-item__text">
                    ${x.text}
                </span>
            </div>
            <button class="task-item__delete-button default-button delete-button" data-delete-task-id='${x.id}'>
                Удалить
            </button>
        </div>
    </div>`);
};
// console.log(tasksListArr);

tasksListArr = tasksListArr.join('');
tasksList.innerHTML = tasksListArr;

// console.log(tasksList.innerHTML);



