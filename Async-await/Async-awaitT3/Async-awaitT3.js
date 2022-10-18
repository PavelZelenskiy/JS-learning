// T3

const albumsURL = 'https://jsonplaceholder.typicode.com/albums';

const body = document.querySelector('body');

const albumList = document.createElement('ul');
    albumList.className = 'data-container';
 
body.append(albumList);
// console.log(body);

const createAlbumPost = (albumTitle) => {
    const albumItem = document.createElement('li');
        albumItem.textContent = albumTitle;

    return albumItem;
};


const renderAlbums = async () => {
    const loader = document.createElement('span');
    loader.textContent = 'Загрузка...';
    body.append(loader);
    try {
        const response = await fetch(albumsURL);
        if (!response.ok) {
            throw new Error ('Произошла ошибка в получении данных об альбомах...');
        };
        // console.log(response);
        const albums = await response.json();
        console.log(albums);
        albums.forEach((album) => {
            const albumItem = createAlbumPost(album.title);
            albumList.append(albumItem);
        });
        
    } catch (error) {
        console.error(error)
    } 
    loader.remove();
};


renderAlbums();