var perro=["p","e","r","r","o"]
var gato=["g","a","t","o"]
var caballo=["c","a","b","a","l","l","o",]

var animales=[gato,perro,caballo]

var aleatoria =animales[Math.floor(Math.random() * animales.length)]// seleccionar una palabra de un array
var totalChars = aleatoria.length;// contar el total de caracteres
console.log(aleatoria);
console.log(totalChars);

if(aleatoria.indexOf('a') != -1){
console.log('siiiiiiiiiii')
} else {

console.log('nooooo')

}