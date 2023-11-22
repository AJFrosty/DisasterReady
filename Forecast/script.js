// Days
var d = new Date();
var weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

// Possible Weather Conditions and their Suggestions
const weatherSuggestions = {
    "scattered clouds": "Go outside and relax!",
    "broken clouds": "Be watchful and walk with your umbrella",
    "overcast clouds": "Be watchful and walk with your umbrella",
    "clear sky": "A good day to get some Sun. Stay hydrated!",
    "few clouds": "A good day to get some Sun. Stay hydrated!",
    "light rain": "Make sure you walk with your umbrella and coat!",
    "moderate rain": "Be careful on the road. Don't forget your umbrella and rain coat!",
    "heavy intensity rain": "Be careful on the road. Walk with your umbrella, rain coat and boots!",
    "very heavy rain": "Be careful on the road. Walk with your umbrella, rain coat and boots!",
    "extreme rain": "Stay inside! Be very careful if you have to go out.",
    "freezing rain": "Be careful on the road. Walk with your umbrella, rain coat and boots!",
    "light intensity shower rain": "Don't forget your umbrella and coat!",
    "shower rain": "Be careful on the road. Walk with your umbrella and rain coat!",
    "heavy intensity shower rain": "Stay inside! Be very careful if you have to go out.",
    "ragged shower rain": "Be very careful on the road. Walk with your umbrella and rain coat!",
    "light intensity drizzle": "Be watchful and walk with your umbrella",
    "drizzle": "Be watchful and walk with your umbrella",
    "heavy intensity drizzle": "Be very careful on the road. Walk with your umbrella and rain coat!",
    "light intensity drizzle rain": "Be very careful on the road. Walk with your umbrella and rain coat!",
    "drizzle rain": "Be very careful on the road. Walk with your umbrella and rain coat!",
    "heavy intensity drizzle rain": "Be very careful on the road. Walk with your umbrella and rain coat!",
    "shower rain and drizzle": "Be very careful on the road. Walk with your umbrella and rain coat!",
    "heavy shower rain and drizzle": "Be very careful on the road. Walk with your umbrella and rain coat!",
    "shower drizzle": "Be careful on the road. Don't forget your umbrella and rain coat!",
    "mist": "Be very careful on the road!",
    "smoke": "Be very careful on the road and wear your protective gear!",
    "fog": "Be very careful on the road!",
    "haze": "Be very careful on the road and wear your protective gear!",
    "sand/dust whirls": "Be very careful wherever you may be and wear your protective gear!",
    "sand": "Be very careful wherever you may be and wear your protective gear!",
    "dust": "Be very careful wherever you may be and wear your protective gear!",
    "volcanic ash": "Be very careful wherever you may be and wear your protective gear!",
    "squalls": "Be very careful wherever you may be and have your protective gear ready!",
    "tornado": "Do not stay in high places. Go in the basement if you are in direct danger!",
    "light snow": "Be careful on the road. Walk with your umbrella, rain coat and boots!",
    "snow": "Be careful on the road. Walk with your umbrella, coat and boots!",
    "heavy snow": "Stay indoors!",
    "sleet": "Be careful on the road. Walk with your umbrella, coat and boots!",
    "light shower sleet": "Be careful on the road. Walk with your umbrella, coat and boots!",
    "shower sleet": "Be careful on the road. Walk with your umbrella, coat and boots!",
    "light rain and snow": "Be careful on the road. Walk with your umbrella, coat and boots!",
    "rain and snow": "Be careful on the road. Walk with your umbrella, coat and boots!",
    "light shower snow": "Be careful on the road. Walk with your umbrella, coat and boots!",
    "shower snow": "Be careful on the road. Walk with your umbrella, coat and boots!",
    "heavy shower snow": "Stay indoors!",
    "thunderstorm with rain": "Do not stay under or next to tall structures! Walk with your rain coat!",
    "thunderstorm with heavy rain": "Do not stay under or next to tall structures! Walk with your rain coat!",
    "thunderstorm": "Do not stay under or next to tall structures! Walk with your rain coat!",
    "light thunderstorm": "Do not stay under or next to tall structures! Walk with your rain coat!",
    "heavy thunderstorm": "Do not stay under or next to tall structures! Walk with your rain coat!",
    "ragged thunderstorm": "Do not stay under or next to tall structures! Walk with your rain coat!",
    "thunderstorm with light drizzle": "Do not stay under or next to tall structures! Walk with your rain coat!",
    "thunderstorm with drizzle": "Do not stay under or next to tall structures! Walk with your rain coat!",
    "thunderstorm with heavy drizzle": "Do not stay under or next to tall structures! Walk with your rain coat!",
};

// Function To Get Weather Info
let caribbeanWeather = {
    "apikey": "e000516e4db572b82e8a0ff87c736d43",
    fetchWeather: function(city) {
        fetch("https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&units=metric&appid=" + this.apikey)
            .then((Response) => Response.json())
            .then((data) => this.displayWeather(data));
    },

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
            document.querySelector(".caribbean-temp-" + (i + 1)).innerText = Math.round(temp) + "°C";
            document.querySelector(".caribbean-humidity-" + (i + 1)).innerText = "Humidity: " + humidity + "%";
            document.querySelector(".caribbean-wind-" + (i + 1)).innerText = "Wind Speed: " + speed + " km/h";

            const suggestion = weatherSuggestions[description] || "No suggestion available.";
            document.querySelector(".caribbean-suggestion-" + (i + 1)).innerText = suggestion;
        }

        document.body.style.backgroundImage = "url('https://source.unsplash.com/1600x900/?" + name + "')";
        console.log(data);
    },

    search: function() {
        this.fetchWeather(document.querySelector(".caribbean-searchbar").value);
    }
};

// Correct Day Function
function CheckDay(day) {
    if (day + d.getDay() > 6) {
        return day + d.getDay() - 7;
    } else {
        return day + d.getDay();
    }
}
for (i = 0; i < 5; i++) {
    document.querySelector(".day" + (i + 1)).innerText = weekday[CheckDay(i)];
}

// Search Bar Information
document.querySelector(".caribbean-search button").addEventListener("click", function() {
    caribbeanWeather.search();
});

document.querySelector(".caribbean-searchbar").addEventListener("keyup", function(event) {
    if (event.key == "Enter") {
        caribbeanWeather.search();
    }
});

// Default Country
caribbeanWeather.fetchWeather("Antigua and Barbuda");
