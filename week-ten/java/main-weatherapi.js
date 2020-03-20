const apiURL = 'http://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&APPID=ee1ecbe33adbc9091418e495f826c8ae';

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    
    console.log(jsObject);
    
    const currentTemp = document.querySelector('#current-temp');
    const currentWeather = document.querySelector('#current-weather');
    const currentWind = document.querySelector('#current-wind')
    const weatherIcon = document.querySelector('#imagesrc');


    currentTemp.textContent = jsObject.main.temp;
    currentWeather.textContent = jsObject.weather.main;
    currentWind.textContent = jsObject.wind.speed;

    const imagesrc = `https://openweathermap.org/img/w/${jsObject.weather[0].icon}.png`; 
    
const desc = jsObject.weather[0].description; 

document.getElementById('imagesrc').textContent = imagesrc;  

document.getElementById('icon').setAttribute('src', imagesrc);  

document.getElementById('icon').setAttribute('alt', desc);


  

 
  });









  