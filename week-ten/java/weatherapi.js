const apiURL = 'http://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&APPID={ee1ecbe33adbc9091418e495f826c8ae}';
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    const currentTemp = documemt.querySelector('#current-temp');
    const weatherIcon = document.querySelector('#imagesrc')
    currentTemp.textContent = jsObject.main.temp;


   
  });









  