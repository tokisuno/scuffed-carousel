function importAll(r) {
    return r.keys().map(r);
}

const images = importAll(require.context('./images', false, /\.(png|svg|jpg|jpeg|gif)$/));

console.log('hello', images);

console.log('hello there')
