const API_KEY=""

const locationContainer = document.getElementById("location");
const dataContainer = document.getElementById("data");

console.log(locationContainer);
console.log(dataContainer);

const city = "Delhi";

async function getWeather() {
  const url = ``;
  const response = await fetch(url);
  console.log(response);
}

getWeather();
