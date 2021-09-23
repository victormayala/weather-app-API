let weather = {
  apiKey: "30dafade0a63e08343ea8236b9a24921",
  fetchWeather: function (city) {
    fetch("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial&appid=" + this.apiKey)
      .then((response) => response.json())
      .then((data) => this.displayWeather(data));
  },
  displayWeather: function (data) {
    const { name } = data;
    const { icon } = data.weather[0];
    const { description } = data.weather[0];
    const { temp } = data.main;
    const { speed } = data.wind;
    const { humidity } = data.main;
    const { sunrise } = data.sys;
    document.querySelector(".weather-icon").innerHTML = '<img src="https://openweathermap.org/img/wn/' + icon + '@2x.png">';
    document.querySelector(".temperature").innerText = temp + "°F";
    document.querySelector(".city-name").innerText = name;
    document.querySelector(".wind").innerText = speed + "mph";
    document.querySelector(".humidity").innerText = humidity;
    document.querySelector(".sunrise").innerText = sunrise;
  },
};
weather.fetchWeather("katy");
