// T1

const usersURL ='https://jsonplaceholder.typicode.com/users';

const createUser = (name) => {
    const userElement = document.createElement('li');
    const userElementAnchor = document.createElement('a');
    userElementAnchor.href = '#';
    userElementAnchor.textContent = name;
    userElement.append(userElementAnchor);

   return userElement;
};

const toggleLoader = () => {
    const loaderHTML = document.querySelector('#loader');
    const isHidden = loaderHTML.hasAttribute('hidden');
    if (isHidden) {
        loaderHTML.removeAttribute('hidden');
    } else {
        loaderHTML.setAttribute('hidden', '');
    };
};

const dataContainer = document.querySelector('#data-container');


const getAllUsers = () => {
    toggleLoader();
    const users = fetch(usersURL);
        users
            .then ((response) => {
                if (!response.ok) {
                    throw new Error('Ошибка');
                };
                return response.json();
            })
            .then ((usersArr) => {
                usersArr.forEach((user) => {
                    const userHTML = createUser(user.name);
                    dataContainer.append(userHTML);
                });
            })
            .catch ((error) => {
                console.error(error);
            })
            .finally (() => {
                toggleLoader();
            });
};

getAllUsers();