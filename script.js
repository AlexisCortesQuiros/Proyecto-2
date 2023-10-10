const daysElement = document.getElementById('dias');
const hoursElement = document.getElementById('horas');
const minsElement = document.getElementById('minutos');
const secondsElement = document.getElementById('segundos');
const upcomingImg = document.getElementById('upcoming-img');

let currentDate = new Date();
let goalDate = new Date(2023, 2, 25, 0, 0); // Año, mes (enero==0), día, hora, minutos¡
let days, hours, mins, seconds, totalSeconds;

//Crea un intervalo que llama a la función cada segundo
let countdownInterval = setInterval(countdown, 1000);
countdown();

function countdown() {
  currentDate = new Date();
  totalSeconds = (goalDate - currentDate) / 1000;

  // Condición para comprobar si ha llegado la hora establecida
  if (Math.floor(totalSeconds) <= 0) {
    showProduct();
    secondsElement.innerHTML = 0;
    return;
  }

  //Para saber el equivalente de 1 segundo - dias se dividen los segundos entre 86400 o entre 3600 y luego entre 24
  //Para saber el equivalente de 1 segundo - horas se dividen los segundos entre 3600
  //Para saber el equivalente de 1 segundo - minutos se dividen los segundos entre 60

  days = Math.floor(totalSeconds / 3600 / 24);
  hours = Math.floor(totalSeconds / 3600) % 24;
  mins = Math.floor(totalSeconds / 60) % 60;
  seconds = Math.floor(totalSeconds) % 60;

  daysElement.innerHTML = days;
  hoursElement.innerHTML = hours;
  minsElement.innerHTML = mins;
  secondsElement.innerHTML = seconds;

};

function showProduct() {
  upcomingImg.classList.remove('nocolor-img');
  //Paramos el intervalo que se estaba ejecutando
  clearInterval(countdownInterval);
}

const backgroundImages = {
  spring: 'imagenes/primavera.jpg',
  summer: 'imagenes/verano.jpg',
  autumn: 'imagenes/otoño.jpg',
  winter: 'imagenes/invierno.jpg'
};

// Obtiene la fecha actual

// Determina la estación actual
function getCurrentSeason() {
  const month = currentDate.getMonth() + 1;
  if (month >= 3 && month <= 5) {
      return 'spring';
  } else if (month >= 6 && month <= 8) {
      return 'summer';
  } else if (month >= 9 && month <= 11) {
      return 'autumn';
  } else {
      return 'winter';
  }
}

// Cambia el fondo de acuerdo a la estación
function changeBackground() {
  const season = getCurrentSeason();
  document.body.style.backgroundImage = `url(${backgroundImages[season]})`;
}

// Llama a la función para cambiar el fondo al cargar la página
changeBackground();

function showBirthdayImage() {
  upcomingImg.classList.remove('nocolor-img');
  clearInterval(countdownInterval);

  // Muestra la imagen de Feliz Cumpleaños
  const cumpleanosImg = document.getElementById('tarta.png');
  cumpleanosImg.hidden = false;
}