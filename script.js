const API_KEY = "";
// Note: NEVER EVER LEAK API KEY LIKE THIS

//Select all elements where we will show data
const city = document.getElementById("city");
const feels_like = document.getElementById("feels_like");
const actual_temp = document.getElementById("actual_temp");
const humidity = document.getElementById("humidity");

//Trick to show some default data when page loads
document.addEventListener("DOMContentLoaded", async () => {
  const result = await getWeather("Delhi");
  const location = result.location;
  const weatherData = result.current;
  displayWeatherData(location, weatherData);
});

//Add event listener to button and show data
const weatherBtn = document.getElementById("weatherBtn");
weatherBtn.addEventListener("click", async (e) => {
  e.preventDefault();
  const city = document.getElementById("weatherInput").value;
  console.log(city);
  const result = await getWeather(city);
  console.log(result);
  const location = result.location;
  const weatherData = result.current;
  displayWeatherData(location, weatherData);
});

//Declare functions which get data and display that data
async function getWeather(city) {
  const url = `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}&aqi=no`;
  try {
    const response = await fetch(url);
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
  }
}

function displayWeatherData(location, weatherData) {
  city.textContent = location.name;
  feels_like.textContent = `Feels like: ${weatherData.feelslike_c} C`;
  actual_temp.textContent = `Temp: ${weatherData.temp_c} C`;
  wind_speed.textContent = `Wind speed: ${weatherData.wind_kph} km/h`;
  humidity.textContent = `Humidity: ${weatherData.humidity}%`;
}
