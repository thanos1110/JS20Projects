const imageContainer = document.getElementById('image-container');
const loader = document.getElementById('loader');

let ready = false;
let imageLoaded = 0;
let totalImages = 0;

let photosArray = [];

const count = 30;

// const apiKey = "DKjShxLSFbHqLmfO0BLm3YV0YYjzzZ20rbpXJ6Rg8II";
const apiKey = "9LfjECxejPpVMJ9TbPfRV_KzI66IPY6MFbUrzCjvE_k";
const apiUrl = `https://api.unsplash.com/photos/random?client_id=${apiKey}&count=${count}`

//dry function set Attribute

function setAttributes(element, attributes) {
    for (key in attributes) {
        element.setAttribute(key, attributes[key]);
        // console.log(attributes[key]);
    }
}

// image loaded function
function image_loaded() {
    console.log("Image Loaded");
    imageLoaded++;
    if (imageLoaded === totalImages) {
        ready = true;
        loader.hidden = true;
        console.log("ready=", ready);
    }
}

// Get photos from unsplash api 
function dispalyPhotos() {
    imageLoaded = 0;
    totalImages = photosArray.length;
    console.log(totalImages);
    photosArray.forEach((photo) => {
        //Creating Anchor tag for image 
        const item = document.createElement('a');
        setAttributes(item, {
            href: photo.links.html,
            target: '_blank',
        });

        //commented because its dry 
        // item.setAttribute('href', photo.links.html)
        // item.setAttribute('target', '_blank');

        //Creating Image
        const img = document.createElement('img');
        setAttributes(img, {
            src: photo.urls.regular,
            alt: photo.alt_description,
            title: photo.alt_description,
        });
        // adding event Listener
        img.addEventListener('load', image_loaded)

        //commented because its dry 
        // img.setAttribute('src', photo.urls.regular);
        // img.setAttribute('alt', photo.alt_description)
        // img.setAttribute('title', photo.alt_description)

        // img-container > a > img
        item.appendChild(img);
        imageContainer.appendChild(item);
    });
}
async function getPhotos() {
    try {
        const response = await fetch(apiUrl)
        photosArray = await response.json();
        // console.log(photosArray); Instead of console this we will call the display function
        dispalyPhotos();
    } catch (error) {
        console.log(error)
    }
}

window.addEventListener('scroll', () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 1000 && ready) {
        ready = false;
        getPhotos();
        console.log('More Loaded');
    }
})

//Check to see if scrolling near bottom of page,Load more photos

getPhotos();



