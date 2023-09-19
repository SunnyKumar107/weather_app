const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");

const apiKey = "0bec87d89e84ef7429f80b60157e766e";
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${"mumbai"}&appid=${apiKey}&units=metric`;

async function checkWeather() {
  const responce = await fetch(apiUrl);
  var data = await responce.json();

  document.querySelector(".city").innerHTML = data.name;
  document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
  document.querySelector(".humidity").innerHTML =
    Math.round(data.main.humidity) + " %";
  document.querySelector(".wind").innerHTML =
    Math.round(data.wind.speed) + " km/h";
  console.log(data);
}

searchBtn.addEventListener("click", () => {
  checkWeather();
});

searchBox.addEventListener("input", function () {
  var cityName = this.value;

  console.log(cityName);
});
