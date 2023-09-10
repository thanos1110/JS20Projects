const imageContainer = document.getElementById('image-container');
const loader = document.getElementById('loader')
let photosArray = [];

//Unsplash Api
const count = 10;
const api = 'DKjShxLSFbHqLmfO0BLm3YV0YYjzzZ20rbpXJ6Rg8II';

const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${api}&count=${count}`

//Create Elements For Links & Photos,Addto DOM
function diplayPhotos() {
    photosArray.forEach((photo) => {
        //Create <a> to link to Unsplash
        const item = document.createElement('a');
        item.setAttribute('href', photo.links.html);
        item.setAttribute('target', '_blank');
        //Create <img> for photo
        const img = document.createElement('img');
        img.setAttribute('src', photo.urls.regular);
        img.setAttribute('alt', photo.alt_description)
        img.setAttribute('title', photo.alt_description)
        //Put <img> inside <a>,then put both inside imageContainer Element
        item.appendChild(img);
        imageContainer.appendChild(item);
    })
}

async function getPhotos() {
    try {
        const response = await fetch(apiUrl);
        photosArray = await response.json();
        diplayPhotos();
    } catch (error) {
        console.log(error)
    }
}
getPhotos()


