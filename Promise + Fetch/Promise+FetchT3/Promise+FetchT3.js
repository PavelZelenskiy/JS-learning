// T3

const photosURL ='https://jsonplaceholder.typicode.com/photos';
// console.log(photosURL);

const createPhoto = (photo) => {
    const photoItem = document.createElement('li');
        photoItem.className = 'photo-item';
    const photoItemImg = document.createElement('img');
        photoItemImg.className = 'photo-item__image';
        photoItemImg.src = `${photo.url}`;
    const photoItemTitle = document.createElement('h3');
        photoItemTitle.className = 'photo-item__title';
        photoItemTitle.textContent = `${photo.title}`;
    
    photoItem.append(photoItemImg, photoItemTitle);


   return photoItem;
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

const getFastestLoadedPhoto = (ids) => {
    toggleLoader();
    const requests = ids.map((id) => fetch(`${photosURL}/${id}`));
    Promise.race(requests)
        .then ((response) => {
            if (!response.ok) {
                throw new Error('Ошибка');
            };
            // console.log(response);
            return response.json();
        })
        .then ((photo) => {
                // console.log(photo);
                const photoHTML = createPhoto(photo);
                dataContainer.append(photoHTML);
                // console.log(photoHTML);
        })
        .catch ((error) => {
            console.error(error);
        })
        .finally (() => {
            toggleLoader();
        });
};


getFastestLoadedPhoto([60, 12, 55]);