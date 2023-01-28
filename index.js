// Write your solution here!
const cats = ['Milo','Otis','Garfield'];

function destructivelyAppendCat(name) {
    cats.push(name);
}

function destructivelyRemoveFirstCat() {
    cats.shift();
}

function destructivelyPrependCat(name) {
    cats.unshift(name);
}

function destructivelyRemoveLastCat() {
    cats.pop();
}

function appendCat(name) {
    const copyCats = [...cats,name];
    return copyCats;
}

function prependCat(name) {
    const copyCats = [name,...cats];
    return copyCats;
}

function removeLastCat() {
    const copyCats = [...cats];
    copyCats.pop();
    return copyCats;
}

function removeFirstCat() {
    const copyCats = [...cats];
    copyCats.shift();
    return copyCats;
}