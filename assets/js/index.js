import { Leon, Lobo, Oso, Serpiente, Aguila } from "./modulo/tipo.js";
import animalesData from "./modulo/Animales.js";

const animalSelect = document.getElementById("animal");
const edadSelect = document.getElementById("edad");
const comentarios = document.getElementById("comentarios");
const preview = document.getElementById("preview");
const btnRegistrar = document.getElementById("btnRegistrar");
const animalesCard = document.getElementById("Animales");

let imageSrc;
let sonido;
let animales = [];

//agregar el evento para cambiar la imagen del preview

animalSelect.addEventListener("change", async () => {
  const animal = animalSelect.value;
  const animales = await animalesData.getData();
  const animalData = animales.find((a) => a.name === animal);
  console.log(animalData);
  imageSrc = `./assets/imgs/${animalData.imagen}`;
  sonido = `./assets/sounds/${animalData.sonido}`;

  preview.style.backgroundImage = `url(${imageSrc})` 
});

//agergar el evento que me permita agregar los animales

btnRegistrar.addEventListener("click", () => {
    
})
