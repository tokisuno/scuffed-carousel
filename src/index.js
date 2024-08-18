import './style.css';

function importAll(r) { return r.keys().map(r) }
const images = importAll(require.context('./images', false, /\.(png|svg|jpg|jpeg|gif)$/));
const container = document.querySelector('div.container');
const slides = document.querySelector('div.slides');

let intID;
let i = 0;

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
    container.appendChild(slides);
    spawnDots();
}

function spawnDots() {
    if (document.querySelector('div.dot-container') !== null) {
        const old = document.querySelector('div.dot-container');
        old.remove();
    }
    const dotContainer = document.createElement('div');
    dotContainer.setAttribute('class', 'dot-container');
    images.forEach((_, iter) => {
        const dot = document.createElement('span');
        if (i === iter) {
            dot.setAttribute('class', 'dot-selected');
            dotContainer.appendChild(dot);
        } else {
            dot.setAttribute('class', 'dot');
            dotContainer.appendChild(dot);
        }
    });
    container.appendChild(dotContainer);
}

function removeImage() {
    const oldImage = document.querySelector('div.image'); 
    oldImage.remove();
}

function previousImage () {
    --i;
    removeImage();
    if (i < 0) {
        i = images.length - 1;
    } 
    drawImage(images[i]);
}

function nextImage() {
    i++;
    removeImage();
    if (i == images.length) {
        i = 0;
    } 
    drawImage(images[i]);
}

const previous = document.querySelector('button#prev');
previous.addEventListener('click', () => {
    stop();
    previousImage();
    start();
});

const next = document.querySelector('button#next');
next.addEventListener('click', () => {
    stop();
    nextImage();
    start();
});

container.appendChild(slides);

function start() {
    if (!intID) {
        intID = setInterval(() => {
            i++;
            removeImage();
            if (i > images.length - 1) {
                i = 0;
            }
            drawImage(images[i]);  
            console.log(i);
        }, 1000);
    }
}
function stop() {
    clearInterval(intID);
    intID = null;
}

drawImage(images[i]);
start();

