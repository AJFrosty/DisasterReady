//Days
var d = new Date();
var weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday",];

//Function To Get Weather Info
let caribbeanWeather = {
    "apikey": "e000516e4db572b82e8a0ff87c736d43",
    fetchWeather : function (city) {
        fetch("https://api.openweathermap.org/data/2.5/forecast?q=" 
        + city 
        + "&units=metric&appid=" 
        + this.apikey)
        .then((Response) => Response.json())
        .then((data) => this.displayWeather(data));
    },
//Displaying the 5 Day Weather Forecast
    displayWeather: function(data) {
        const { name } = data.city;
        document.querySelector(".caribbean-country").innerText = "Weather in " + name;
      
        const forecastList = data.list;
      
        for (let i = 0; i < 5; i++) {
          const forecast = forecastList[i];
          const { temp, humidity } = forecast.main;
          const { speed } = forecast.wind;
          const { icon, description } = forecast.weather[0];
      
          document.querySelector(".caribbean-icon-" + (i + 1)).src = "http://openweathermap.org/img/wn/" + icon + ".png";
          document.querySelector(".caribbean-description-" + (i + 1)).innerText = description;
          document.querySelector(".caribbean-temp-" + (i + 1)).innerText = temp + "°C";
          document.querySelector(".caribbean-humidity-" + (i + 1)).innerText = "Humidity: " + humidity + "%";
          document.querySelector(".caribbean-wind-" + (i + 1)).innerText = "Wind Speed: " + speed + " km/h";
        }
        document.body.style.backgroundImage = "url('https://source.unsplash.com/1600x900/?" + name + "')"
        console.log(data);
      },
    search : function() {
        this.fetchWeather(document.querySelector(".caribbean-searchbar").value);
    }
};

//Correct Day Function
function CheckDay(day){
    if(day + d.getDay() > 6){
        return day + d.getDay() - 7;
    }
    else{
        return day + d.getDay();
    }
}    
for(i = 0; i<5; i++){
    document.querySelector(".day" + (i+1)).innerText = weekday[CheckDay(i)];
}; 


//Search Bar Information
document.querySelector(".caribbean-search button").addEventListener("click", function() {
    caribbeanWeather.search();
});

document.querySelector(".caribbean-searchbar").addEventListener("keyup", function(event){
    if(event.key == "Enter"){
        caribbeanWeather.search();
    }
});

//Default Country
caribbeanWeather.fetchWeather("Antigua and Barbuda");
