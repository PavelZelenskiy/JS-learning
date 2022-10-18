// T5

let tasks = [
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

let tasksList = document.querySelector('.tasks-list');


// function createNewTask (tasks) {
//     let tasksListArr =[];
//         for (const x of tasks) {
//             tasksListArr.push( 
//             `<div class="task-item" data-task-id='${x.id}'>
//                 <div class="task-item__main-container">
//                     <div class="task-item__main-content">
//                         <form class="checkbox-form">
//                             <input class="checkbox-form__checkbox" type="checkbox" id='${x.id}'>
//                             <label for='${x.id}'></label>
//                         </form>
//                         <span class="task-item__text">
//                             ${x.text}
//                         </span>
//                     </div>
//                     <button class="task-item__delete-button default-button delete-button" data-delete-task-id='${x.id}'>
//                         Удалить
//                     </button>
//                 </div>
//             </div>`);
//         };

//     tasksListArr = tasksListArr.join('');
//     tasksList.innerHTML = tasksListArr;
// };

function createNewTask (taskID, taskText) {
    const taskItem = document.createElement('div');
        taskItem.className  = 'task-item';
        taskItem.dataset.taskId = taskID;

    const taskItemContainer = document.createElement('div');
        taskItemContainer.className = 'task-item__main-container';

    const taskItemContent = document.createElement('div');
        taskItemContent.className = 'task-item__main-content';

    const checkboxForm = document.createElement('form');
        checkboxForm.className = 'checkbox-form';
        
    const checkboxInput = document.createElement('input');
        checkboxInput.className = 'checkbox-form__checkbox';
        checkboxInput.type = 'checkbox';
        const inputID = `task-${taskID}`;
        checkboxInput.dataset.id = inputID;

    const checkboxInputLabel = document.createElement('label');
        checkboxInputLabel.htmlFor = inputID;

    const taskItemText = document.createElement('span');
        taskItemText.className = 'task-item__text';
        taskItemText.innerText = taskText;

    const taskItemDeleteButton = document.createElement('button');
        taskItemDeleteButton.className = 'task-item__delete-button default-button delete-button';
        taskItemDeleteButton.innerText = 'Удалить';
        taskItemDeleteButton.dataset.deleteTaskId = taskID;
    
    taskItem.append(taskItemContainer);
    taskItemContainer.append(taskItemContent);
    taskItemContent.append(checkboxForm);
    checkboxForm.append(checkboxInput);
    checkboxForm.append(checkboxInputLabel);
    taskItemContent.append(taskItemText);
    taskItemContainer.append(taskItemDeleteButton);

    return taskItem;
}

tasks.forEach((task) => {
    const taskItem = createNewTask(task.id, task.text);
    tasksList.append(taskItem);
});



const createErrorBlock = (errorMessage) => {
    const errorBlock = document.createElement("span");
    errorBlock.innerText = errorMessage;
    errorBlock.className = "error-message-block";
    return errorBlock;
  };
  
  const createTaskForm = document.querySelector(".create-task-block");
  createTaskForm.addEventListener("submit", (event) => {
    event.preventDefault();
  
    const newTaskText = (event.target.taskName.value || "").trim();
    const isTaskExists = tasks.some((task) => task.text === newTaskText);
    const errorMessageBlockFromDOM = createTaskForm.querySelector(
      ".error-message-block"
    );
  
    if (!newTaskText) {
      const errorBlock = createErrorBlock(
        "Название задачи не должно быть пустым"
      );
      createTaskForm.append(errorBlock);
    } else if (isTaskExists) {
      const errorBlock = createErrorBlock(
        "Задача с таким названием уже существует."
      );
      createTaskForm.append(errorBlock);
    } else if (newTaskText && !isTaskExists) {
      const newTask = {
        id: Date.now().toString(),
        text: newTaskText
      };
      tasks.push(newTask);
      const taskItem = createNewTask(newTask.id, newTask.text);
      tasksList.append(taskItem);
    }
    if (errorMessageBlockFromDOM) {
      errorMessageBlockFromDOM.remove();
    }
  });
  
  
const createModalOverlay = () => {
    const modalOverlay = document.createElement('div');
        modalOverlay.className = 'modal-overlay modal-overlay_hidden';

    const deleteModalContainer = document.createElement('div');
        deleteModalContainer.className = 'delete-modal';
    
    const deleteModalQuestion = document.createElement('h3');
        deleteModalQuestion.className = 'delete-modal__question';
        deleteModalQuestion.textContent = 'Вы действительно хотите удалить эту задачу?';

    const deleteModalButtonsContainer = document.createElement('div');
        deleteModalButtonsContainer.className ='delete-modal__buttons';

    const deleteModalButtonCansel = document.createElement('button');
        deleteModalButtonCansel.className ='delete-modal__button delete-modal__cancel-button';
        deleteModalButtonCansel.textContent = 'Отмена';

    const deleteModalButtonConfirm = document.createElement('button');
        deleteModalButtonConfirm.className = 'delete-modal__button delete-modal__confirm-button';
        deleteModalButtonConfirm.textContent = 'Удалить';

    modalOverlay.append(deleteModalContainer);
    deleteModalContainer.append(deleteModalQuestion);
    deleteModalContainer.append(deleteModalButtonsContainer);
    deleteModalButtonsContainer.append(deleteModalButtonCansel);
    deleteModalButtonsContainer.append(deleteModalButtonConfirm);
    
    return modalOverlay;
};


const body = document.querySelector('body');
body.append(createModalOverlay());
const modalOverlay = body.querySelector('.modal-overlay');


tasksList.addEventListener('click', (event) => {
    const isDeleteButton = event.target.closest('.task-item__delete-button');
    const isDeleteButtonId = isDeleteButton.getAttribute('data-delete-task-id');
    const elementToDelete = tasksList.querySelector(`[data-task-id='${isDeleteButtonId}']`);
    // console.log(tasksList);
    // console.log(isDeleteButtonId);
    // console.log(elementToDelete);
    if (isDeleteButton) {
        modalOverlay.classList.remove('modal-overlay_hidden');
    };
    modalOverlay.addEventListener('click', (event) => {
        const isCanselButton = event.target.closest('.delete-modal__cancel-button');
        const isConfirmButton = event.target.closest('.delete-modal__confirm-button');
        if (isCanselButton) {
            modalOverlay.classList.add('modal-overlay_hidden')
        } else if (isConfirmButton) {
            modalOverlay.classList.add('modal-overlay_hidden');
            tasks = tasks.filter(x => x.id !== isDeleteButtonId);
            elementToDelete.remove();
        };
    });
});


