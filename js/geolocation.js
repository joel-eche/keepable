function getLocation() {
  return fetch(
    "http://api.ipstack.com/148.102.115.150?access_key=5e01a40b7c60102a3fe71ba2e2934aa7"
  )
    .then((response) => response.json())
    .then((data) => data);
}

async function addCountryProvince() {
  let province = document.getElementById("province");
  let country = document.getElementById("country");
  let currentLocation = await getLocation().then((response) => response);
  province.textContent = currentLocation.location.capital;
  country.textContent = currentLocation.country_name;
}

function addWeather() {
  navigator.geolocation.getCurrentPosition((position) => {
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;
    getWeather(latitude, longitude);
  });
}

function getWeather(latitude, longitude) {
  let weather = document.getElementById("weather");
  let temperature = document.getElementById("temp");
  fetch(
    `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=7dbf0a5e29ee4a645e704fe415d2d407`
  )
    .then((response) => response.json())
    .then((data) => {
      weather.textContent = data.weather[0].main;
      temperature.textContent = data.main.temp - 273.15 + "°c";
    });
}

addCountryProvince();
addWeather();
