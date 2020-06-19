function obtainLocation() {
  return fetch(
    "http://api.ipstack.com/148.102.115.150?access_key=5e01a40b7c60102a3fe71ba2e2934aa7"
  )
    .then((response) => response.json())
    .then((data) => data);
}

async function setLocation() {
  let province = document.getElementById("province");
  let country = document.getElementById("country");
  let currentLocation = await obtainLocation().then((response) => response);
  province.textContent = currentLocation.location.capital;
  country.textContent = currentLocation.country_name;
}

setLocation();
