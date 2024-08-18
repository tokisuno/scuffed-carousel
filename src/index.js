function importAll(r) { return r.keys().map(r) }
const images = importAll(require.context('./images', false, /\.(png|svg|jpg|jpeg|gif)$/));
const container = document.querySelector('div.container');
const slides = document.querySelector('div.slides');

let state = false;
while (state === true) {
    let i = 0;
    const ms = 2000;

    const interval = setInterval(() => {
        console.log(images[i]);     
        if (interval === 2) {
            i++;
        }
    }, ms);
    state = false;
}


function drawImage(image) {
    const imageDiv = document.createElement('div');
    imageDiv.setAttribute('class', 'image');
    const img = document.createElement('img');
    img.setAttribute('src', `${image}`);
    img.setAttribute('alt', 'unloaded image');
    img.setAttribute('width', '640');
    img.setAttribute('height', '360');
    imageDiv.appendChild(img);
    slides.appendChild(imageDiv);
}
function removeImage() {
    const oldImage = document.querySelector('div.image'); 
    oldImage.remove();
}

container.appendChild(slides);

console.log('hello there')
