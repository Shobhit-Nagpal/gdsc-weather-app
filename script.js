const API_KEY=""

const locationContainer = document.getElementById("location");
const dataContainer = document.getElementById("data");

console.log(locationContainer);
console.log(dataContainer);

const city = "Delhi";

async function getWeather() {
  const url = `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}&aqi=no`;
  const response = await fetch(url);
  console.log(response);
}

getWeather();
