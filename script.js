function getWeather() {
  
let cityName = document.getElementById(`cityName`).value;

// Make a request for a user with a given ID
axios.get(`https://api.weatherapi.com/v1/current.json?key=0da7dd395404425e991122808223007&q=${cityName}&aqi=no
`)
  .then(function (response) {
    // handle success

    let weatherData = response.data;

    console.log(weatherData);
    document.querySelector('#wln').innerHTML = `<b>Location:</b>  ${weatherData.location.name}`;
    document.querySelector('#wh').innerHTML = `<b>Humidity:</b> ${weatherData.current.humidity}<br>`;
    document.querySelector('#wc').innerHTML = `<b>Temperature in celcius °C:</b> ${weatherData.current.temp_c}<br>`;
    document.querySelector('#wf').innerHTML = `<b>Temperature in farenheit °F:</b>  ${weatherData.current.temp_f}<br>`;
    document.querySelector(`#prp`).innerHTML = `<b>Precipitation (mm):</b> ${weatherData.current.precip_mm}`;
    document.querySelector(`#ws`).innerHTML = `<b>Wind Speed:</b> ${weatherData.current.wind_kph} Km/h`;
    document.querySelector(`#cty`).innerHTML = `<b>City:</b> ${weatherData.location.name}`;
    document.querySelector(`#rgn`).innerHTML = `<b>Region:</b> ${weatherData.location.region}`;
    document.querySelector(`#cont`).innerHTML = `<b>Country:</b> ${weatherData.location.country}`;
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
}

//API KEY
//0da7dd395404425e991122808223007 
