const searchBtn = document.querySelector(".search button");

searchBtn.addEventListener("click", () => {
  const searchBox = document.getElementById("txt");
  console.log(searchBox.value);
  const weatherIcon = document.querySelector(".weather_icon");

  const apiKey = "0bec87d89e84ef7429f80b60157e766e";
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${
    searchBox.value === "" ? "Begusarai" : searchBox.value
  }&appid=${apiKey}&units=metric`;

  async function checkWeather() {
    const responce = await fetch(apiUrl);
    var data = await responce.json();

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML =
      Math.round(data.main.temp) + "°c";
    document.querySelector(".humidity").innerHTML =
      Math.round(data.main.humidity) + " %";
    document.querySelector(".wind").innerHTML =
      Math.round(data.wind.speed) + " km/h";

    console.log(data);

    if (data.weather[0].main == "Clouds") {
      weatherIcon.src = "photo/clouds.png";
    } else if (data.weather[0].main == "Clear") {
      weatherIcon.src = "photo/clear.png";
    } else if (data.weather[0].main == "Rain") {
      weatherIcon.src = "photo/rain.png";
    } else if (data.weather[0].main == "Smoke") {
      weatherIcon.src = "photo/smoke.png";
    } else if (data.weather[0].main == "Drizzle") {
      weatherIcon.src = "photo/drizzle.png";
    }
  }

  checkWeather();
});

// const txt = document.getElementById("txt");

// txt.addEventListener("input", function () {
//   let txtValue = this.value;
//   console.log(txtValue);
// });
