// T3

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
    }
  ];

function createNewTask (tasks) {
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

    tasksListArr = tasksListArr.join('');
    const tasksList = document.querySelector('.tasks-list');
    tasksList.innerHTML = tasksListArr;
};

createNewTask(tasks);

const form = document.querySelector('.create-task-block');
form.addEventListener('submit', (event) => {
    event.preventDefault();
    const { target } = event;
    const taskNameInput = target.taskName;
    const inputValue = taskNameInput.value;
    // console.log(inputValue);
    tasks.push({
        id: Date.now(),
        completed: false,
        text: inputValue
    });
    // console.log(tasks);
    createNewTask(tasks);
});


