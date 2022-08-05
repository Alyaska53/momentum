const city = document.querySelector('.city');
const weatherIcon = document.querySelector('.weather-icon');
const temperature = document.querySelector('.temperature');
const weatherDescription = document.querySelector('.weather-description');
const wind = document.querySelector('.wind');
const humidity = document.querySelector('.humidity');
const weatherError = document.querySelector('.weather-error'); 

async function getWeather() { 
  let defaultCity = (pageLanguage === 'en') ? 'Minsk' : 'Минск';
  let cityName = localStorage.getItem('city') || defaultCity;
  city.value = cityName;

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&lang=${pageLanguage}&appid=6826903bd88db4c68c638b46c695e538&units=metric`;
  try {
    const res = await fetch(url);
    const data = await res.json();

    getWeatherDescription(data);
    weatherError.innerText = '';
  } catch(e) {
    getError();
  }
}

function getWeatherDescription(data) {
  weatherIcon.className = 'weather-icon owf';
  weatherIcon.classList.add(`owf-${data.weather[0].id}`);
  temperature.textContent = `${Math.floor(data.main.temp)}°C`;
  weatherDescription.textContent = data.weather[0].description;

  if (pageLanguage === 'en') {
    wind.textContent = `Wind speed: ${Math.floor(data.wind.speed)} m/s`;
    humidity.textContent = `Humidity: ${Math.floor(data.main.humidity)}%`;
  } else {
    wind.textContent = `Скорость ветра: ${Math.floor(data.wind.speed)} м/с`;
    humidity.textContent = `Влажность: ${Math.floor(data.main.humidity)}%`;
  }
}

function getError() {
  temperature.textContent = '';
  weatherDescription.textContent = '';
  wind.textContent = '';
  humidity.textContent = '';

  if (pageLanguage === 'en') {
    weatherError.innerText = `Error! Сity not found for '${city.value}'!`;
  } else {
    weatherError.innerText = `Ошибка! Не найден город для '${city.value}'!`;
  }
}

city.addEventListener('change', () => {
  localStorage.setItem('city', city.value);
  getWeather();
});

getWeather()