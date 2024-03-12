const numeros = [3, 1, 1, 10, 5, 7, 2];

const primerElemento = numeros [0];
console.log (primerElemento);
const segundoElemento = numeros [1];
console.log (segundoElemento);
const terceroElemento = numeros [2];
console.log (terceroElemento);
const cuartoElemento = numeros [3];
console.log (cuartoElemento);
const quintoElemento = numeros [4];
console.log (quintoElemento);
const sextoElemento = numeros [5];
console.log (sextoElemento);
const septimoElemento = numeros [6];
console.log (septimoElemento);

const suma= (primerElemento+segundoElemento+terceroElemento+cuartoElemento+quintoElemento+sextoElemento+septimoElemento);
console.log (suma);

const numeroMenor = Math.min(3, 1, 1, 10, 5, 7, 2);
console.log (numeroMenor);

const numeroMayor = Math.max(3, 1, 1, 10, 5, 7, 2);
console.log (numeroMayor);

const mensaje = ("La suma total es "+ suma+ " el número menor es "+ numeroMenor + " y el número mayor es "+ numeroMayor);
const parrafo= document.querySelector("#parrafo");
console.log(parrafo);
parrafo.innerHTML=  mensaje 
parrafo.classList.add("texto-color")


