function getWeather() {
  
let cityName = document.getElementById(`cityName`).value;

// calling an api:
axios.get(`https://api.weatherapi.com/v1/current.json?key=0da7dd395404425e991122808223007&q=${cityName}&aqi=no
`)
  .then(function (response) {

    let weatherData = response.data;

    console.log(weatherData);
    document.querySelector('#wln').innerHTML = `${weatherData.location.name},`;
    document.querySelector(`#rgn`).innerHTML = `${weatherData.location.region}`;
    document.querySelector('#wh').innerHTML = `<hr><b><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="0.8em" width="0.8em" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 16a6 6 0 006-6c0-1.655-1.122-2.904-2.432-4.362C10.254 4.176 8.75 2.503 8 0c0 0-6 5.686-6 10a6 6 0 006 6zM6.646 4.646c-.376.377-1.272 1.489-2.093 3.13l.894.448c.78-1.559 1.616-2.58 1.907-2.87l-.708-.708z" clip-rule="evenodd"></path></svg> Humidity:</b> ${weatherData.current.humidity}%<br>`;
    document.querySelector('#wc').innerHTML = `${weatherData.current.temp_c}<b>°</b><br>`;
    document.querySelector('#wf').innerHTML = `<hr><b><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M416 0c-52.9 0-96 43.1-96 96s43.1 96 96 96 96-43.1 96-96-43.1-96-96-96zm0 128c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm-160-16C256 50.1 205.9 0 144 0S32 50.1 32 112v166.5C12.3 303.2 0 334 0 368c0 79.5 64.5 144 144 144s144-64.5 144-144c0-34-12.3-64.9-32-89.5V112zM144 448c-44.1 0-80-35.9-80-80 0-25.5 12.2-48.9 32-63.8V112c0-26.5 21.5-48 48-48s48 21.5 48 48v192.2c19.8 14.8 32 38.3 32 63.8 0 44.1-35.9 80-80 80zm16-125.1V112c0-8.8-7.2-16-16-16s-16 7.2-16 16v210.9c-18.6 6.6-32 24.2-32 45.1 0 26.5 21.5 48 48 48s48-21.5 48-48c0-20.9-13.4-38.5-32-45.1z"></path></svg> Temperature in fahrenheit:</b>  ${weatherData.current.temp_f}°F`;
    document.querySelector(`#prp`).innerHTML = `<hr><b><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="1.2em" width="1.2em" xmlns="http://www.w3.org/2000/svg"><path d="M624 706.3h-74.1V464c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v242.3H400c-6.7 0-10.4 7.7-6.3 12.9l112 141.7a8 8 0 0 0 12.6 0l112-141.7c4.1-5.2.4-12.9-6.3-12.9z"></path><path d="M811.4 366.7C765.6 245.9 648.9 160 512.2 160S258.8 245.8 213 366.6C127.3 389.1 64 467.2 64 560c0 110.5 89.5 200 199.9 200H304c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8h-40.1c-33.7 0-65.4-13.4-89-37.7-23.5-24.2-36-56.8-34.9-90.6.9-26.4 9.9-51.2 26.2-72.1 16.7-21.3 40.1-36.8 66.1-43.7l37.9-9.9 13.9-36.6c8.6-22.8 20.6-44.1 35.7-63.4a245.6 245.6 0 0 1 52.4-49.9c41.1-28.9 89.5-44.2 140-44.2s98.9 15.3 140 44.2c19.9 14 37.5 30.8 52.4 49.9 15.1 19.3 27.1 40.7 35.7 63.4l13.8 36.5 37.8 10C846.1 454.5 884 503.8 884 560c0 33.1-12.9 64.3-36.3 87.7a123.07 123.07 0 0 1-87.6 36.3H720c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h40.1C870.5 760 960 670.5 960 560c0-92.7-63.1-170.7-148.6-193.3z"></path></svg> Precipitation (mm):</b> ${weatherData.current.precip_mm}`;
    document.querySelector(`#ws`).innerHTML = `<hr><b><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M13 5.5C13 3.57 11.43 2 9.5 2 7.466 2 6.25 3.525 6.25 5h2c0-.415.388-1 1.25-1C10.327 4 11 4.673 11 5.5S10.327 7 9.5 7H2v2h7.5C11.43 9 13 7.43 13 5.5zM15.5 15H8v2h7.5c.827 0 1.5.673 1.5 1.5S16.327 20 15.5 20c-.862 0-1.25-.585-1.25-1h-2c0 1.475 1.216 3 3.25 3 1.93 0 3.5-1.57 3.5-3.5S17.43 15 15.5 15z"></path><path d="M18 5c-2.206 0-4 1.794-4 4h2c0-1.103.897-2 2-2s2 .897 2 2-.897 2-2 2H2v2h16c2.206 0 4-1.794 4-4S20.206 5 18 5zM2 15H6V17H2z"></path></svg> Wind Speed:</b> ${weatherData.current.wind_kph} Km/h`;
    document.querySelector(`#cont`).innerHTML = `<b>Country: </b>  ${weatherData.location.country}`;
    document.querySelector(`#ltime`).innerHTML = `As of ${weatherData.location.localtime}`;
    document.querySelector(`#text`).innerHTML = `${weatherData.current.condition.text}`;
    document.querySelector(`#flc`).innerHTML = `<span id="fll">Feels Like</span><br>${weatherData.current.feelslike_c}°`;
    document.querySelector(`#uv`).innerHTML = `<br><b><svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg> UV Index: </b>${weatherData.current.uv} of 10<hr>`;
    document.querySelector(`#vsblty`).innerHTML = `<b><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M396 512a112 112 0 1 0 224 0 112 112 0 1 0-224 0zm546.2-25.8C847.4 286.5 704.1 186 512 186c-192.2 0-335.4 100.5-430.2 300.3a60.3 60.3 0 0 0 0 51.5C176.6 737.5 319.9 838 512 838c192.2 0 335.4-100.5 430.2-300.3 7.7-16.2 7.7-35 0-51.5zM508 688c-97.2 0-176-78.8-176-176s78.8-176 176-176 176 78.8 176 176-78.8 176-176 176z"></path></svg> Visibility: </b>${weatherData.current.vis_km} km<hr>`;
    document.querySelector(`#pressure`).innerHTML = `<b><svg stroke="currentColor" fill="none" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M18 1.5033V3.5033L13 3.5033V7.6749L14.8285 5.84644L16.2427 7.26066L12 11.5033L7.75739 7.26066L9.17161 5.84644L11 7.67483V3.5033L6 3.5033V1.5033L18 1.5033Z" fill="currentColor"></path><path d="M18 20.4967V22.4967H6V20.4967H11V16.3251L9.17154 18.1536L7.75732 16.7393L12 12.4967L16.2426 16.7393L14.8284 18.1536L13 16.3252V20.4967H18Z" fill="currentColor"></path></svg> Pressure: </b>${weatherData.current.pressure_mb} mb<hr>`;
    document.querySelector(`#wdir`).innerHTML = `<b><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M272 16c-32 48-38.97 115.99-38 176 .118 7.3 2.486 17.54 5.086 26.69 5.166-2.36 10.89-3.69 16.914-3.69 3.04 0 6 .346 8.857.982L272 16zm-16 217c-12.81 0-23 10.19-23 23s10.19 23 23 23 23-10.19 23-23-10.19-23-23-23zm40.8 27.033c-.897 9.054-4.776 17.268-10.632 23.643L455.812 389.87c-25.57-51.714-80.964-91.744-133.42-120.91-6.366-3.54-16.386-6.605-25.593-8.927zm-79.896 8.274L40.124 362.12c57.57 3.714 119.937-24.243 171.423-55.09 6.274-3.758 13.95-10.936 20.58-17.77-7.1-5.122-12.522-12.447-15.223-20.953zm55.86 25.07c-5.127 2.32-10.8 3.623-16.764 3.623-5.964 0-11.637-1.302-16.764-3.62L232 496h48l-7.236-202.623z"></path></svg> Wind Direction:</b> ${weatherData.current.wind_dir}`;
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
}

//API KEY
//0da7dd395404425e991122808223007 
