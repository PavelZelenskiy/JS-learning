// T1

const createDropList = () => {
    const dropList = document.createElement('div');
        dropList.className = 'select-dropdown select-dropdown--123';
    
    const dropListSelectButton = document.createElement('button');
        dropListSelectButton.className = 'select-dropdown__button select-dropdown__button--123';

    const dropListSelectButtonText = document.createElement('span');
        dropListSelectButtonText.className = 'select-dropdown__text select-dropdown__text--123';
        dropListSelectButtonText.textContent = 'Выберите элемент';

    const dropListContainer = document.createElement('ul');
        dropListContainer.className = 'select-dropdown__list select-dropdown__list--123';
    
    const dropListItem1 = document.createElement('li');
        dropListItem1.className = 'select-dropdown__list-item';
        dropListItem1.dataset.value = 1;
        dropListItem1.textContent = 'JavaScript';
        // console.log(dropListItem1);

    const dropListItem2 = document.createElement('li');
        dropListItem2.className = 'select-dropdown__list-item';
        dropListItem2.dataset.value = 2;
        dropListItem2.textContent = 'NodeJS';
        // console.log(dropListItem2);

    const dropListItem3 = document.createElement('li');
        dropListItem3.className = 'select-dropdown__list-item';
        dropListItem3.dataset.value = 3;
        dropListItem3.textContent = 'ReactJS';
        // console.log(dropListItem3);

    const dropListItem4 = document.createElement('li');
        dropListItem4.className = 'select-dropdown__list-item';
        dropListItem4.dataset.value = 4;
        dropListItem4.textContent = 'HTML';
        // console.log(dropListItem4);

    const dropListItem5 = document.createElement('li');
        dropListItem5.className = 'select-dropdown__list-item';
        dropListItem5.dataset.value = 5;
        dropListItem5.textContent = 'CSS';
        // console.log(dropListItem5);

    dropList.append(dropListSelectButton);
    dropListSelectButton.append(dropListSelectButtonText);
    dropList.append(dropListContainer);
    dropListContainer.append(dropListItem1);
    dropListContainer.append(dropListItem2);
    dropListContainer.append(dropListItem3);
    dropListContainer.append(dropListItem4);
    dropListContainer.append(dropListItem5);
    return dropList;
};

// console.log(createDropList());

const container = document.querySelector('.container');
// console.log(container);
container.append(createDropList());
console.log(container);

class CustomSelect {
    #id;
    #options;
    constructor(id, options) {
        this.#id = id;
        this.#options = options;
    }

    #addID(id) {
        dropList.className = `select-dropdown select-dropdown--${this.#id}`;
        dropListSelectButtonText.className = `select-dropdown__text select-dropdown__text--${this.#id}`;
        dropListSelectButton.className = `select-dropdown__button select-dropdown__button--${this.#id}`;
        dropListContainer.className = `select-dropdown__list select-dropdown__list--${this.#id}`;
    }

    #addOptions(options) {
        
    }

};