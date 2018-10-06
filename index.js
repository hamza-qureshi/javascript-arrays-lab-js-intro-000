// Add your fukittens = ["Milo", "Otis", "Garfield"]
var kittens = ["Milo", "Otis", "Garfield"]

function destructivelyAppendKitten(){
  kittens.pop()
}
function destructivelyAppendKitten(name){
  kittens.push(name)
}
function destructivelyAppendKitten(){
  kittens.shift()
}
function destructivelyAppendKitten(name){
  kittens.unshift(name)
}

function appendKitten (name){
return [...kittens,name]
}
function appendKitten (name){
return [name,...kittens]
}
function appendKitten() {
  kittens.slice(1)
}
function appendKitten (name){
kittens.slice(0,kittens.length - 1)
}
