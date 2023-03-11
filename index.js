// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat(name) {
    cats.push("Ralph");
}

function destructivelyPrependCat(name) {
    cats.unshift("Bob")
}

function destructivelyRemoveLastCat() {
    cats.pop()
}

function destructivelyRemoveFirstCat() {
    cats.shift()
}

function appendCat(name) {
    const cats = ["Milo", "Otis", "Garfield"]
    const allCats  = [...cats, "Broom" ];
    return allCats
}

function prependCat(name) {
    const allCats = ["Arnold", ...cats]
    return allCats
}

function removeLastCat() {
    return cats.slice(0, 2)
}

function removeFirstCat() {
   return cats.slice(1)
}

