var APIKey="e7df9921dfd1d5f5d129ce1cd666c3b7";


    function fetchWeather(city){
        var queryURL= "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&APPID=" + APIKey;

        fetch(queryURL)
        .then(function (res) {
          return res.json();
        })
        .then(function (data) {
         console.log(data)
        })
        .catch(function (err) {
          console.error(err);
        });
    }
fetchWeather("dallas")