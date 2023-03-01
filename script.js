

var APIKey="e7df9921dfd1d5f5d129ce1cd666c3b7";
var searchButton=document.getElementById("search-button")
var cityName=document.getElementById("current-city")
var searchCity=document.getElementById("search-city")
var temperature=document.getElementById("temperature")
var humidity=document.getElementById("humidity")

    function fetchWeather(city){
        var queryURL= "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial&APPID=" + APIKey;

        fetch(queryURL)
        .then(function (res) {
          return res.json();
        })
        .then(function (data) {
         console.log(data)
         cityName.textContent=data.name
         temperature.textContent=data.main.temp
         humidity.textContent=data.main.humidity
        
        })
        .catch(function (err) {
          console.error(err);
        });
    }
// fetchWeather("dallas")
searchButton.addEventListener("click", function(){fetchWeather(searchCity.value)})