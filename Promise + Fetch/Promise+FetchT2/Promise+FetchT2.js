// T2


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

const getUsersbyIds = (ids) => {
    toggleLoader();
    const requests = ids.map((id) => fetch(`${usersURL}/${id}`));
    Promise.all(requests)
        .then((responses) => {
            const dataResults = responses.map((response) => response.json());
            return Promise.all(dataResults);
        })
        .then ((usersArr) => {
            usersArr.forEach((user) => {
                const userHTML = createUser(user.name);
                dataContainer.append(userHTML);
            })
        })
        .catch ((error) => {
            console.error(error);
        })
        .finally (() => {
            toggleLoader();
        });
};


getUsersbyIds([5, 6, 2, 1]);