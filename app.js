const apiKey = "7b22d962c5a1ac115f208781aac6ae7f";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.querySelector(".search input");
const button = document.querySelector(".search button");
const weatherIcon=document.querySelector(".weather-icon");

async function checkWeather(city) {
    try {
        const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
        if (!response.ok) {
            // document.querySelector(".error").style.display="block"
            document.querySelector(".weather").style.display="none"
            alert("invalid city")
        }
        const data = await response.json();
        console.log(data)
        document.querySelector(".weather").style.display="block"
        // document.querySelector(".error").style.display="none"

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "ºC";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

        if(data.weather[0].main=="Clouds"){
            weatherIcon.src="images/clouds.png"
        }
        else if(data.weather[0].main=="Clear"){
            weatherIcon.src="images/clear.png" 
        }
        else if(data.weather[0].main=="Rain"){
            weatherIcon.src="images/rain.png" 
        }
        else if(data.weather[0].main=="Drizzle"){
            weatherIcon.src="images/drizzle.png" 
        }
        else if(data.weather[0].main=="Mist"){
            weatherIcon.src="images/mist.png" 
        }

    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
    }
}

button.addEventListener("click", () => {
    const city = searchBox.value.trim();
    if (city) {
        checkWeather(city);
    } else {
        console.error('Please enter a city name.');
    }
});



// Example usage:
// checkWeather("London");
