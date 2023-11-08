'use strict';

// Weather display function
function displayWeather(data) {
  const cityName = document.getElementById('city-name');
  const temperature = document.getElementById('temperature');
  const pressure = document.getElementById('pressure');
  const description = document.getElementById('description');
  const humidity = document.getElementById('humidity');
  const windSpeed = document.getElementById('wind-speed');
  const windDirection = document.getElementById('wind-direction');
  const weatherIcon = document.getElementById('weather-icon');

  cityName.textContent = data.name;
  temperature.textContent = data.main.temp;
  pressure.textContent = data.main.pressure;
  description.textContent = data.weather[0].description;
  humidity.textContent = data.main.humidity;
  windSpeed.textContent = data.wind.speed;
  windDirection.textContent = data.wind.deg;
  weatherIcon.src = `http://openweathermap.org/img/w/${data.weather[0].icon}.png`;
}

// function for outputing the weather through a fetch request
function getWeatherWithFetch(city) {
  fetch(
    `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=5d066958a60d315387d9492393935c19`
  )
    .then((response) => response.json())
    .then((data) => {
      displayWeather(data);
    })
    .catch((error) => {
      console.error('Помилка отримання погоди:', error);
    });
}

const city = 'LVIV';
getWeatherWithFetch(city);
