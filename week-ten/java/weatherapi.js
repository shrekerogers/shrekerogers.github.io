const apiURL = "http://api.openweathermap.org/data/2.5/weatherid=5604473&units=imperial&APPID= {ee1ecbe33adbc9091418e495f826c8ae}";
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    const currentTemp = documemt.querySelector('#current-temp');
    const weatherIcon = document.querySelector('#imgesrc');


    currentTemp.textContent = jsObject.main.temp;
    



  });









  document.getElementById('current-temp').textContent = jsObject.main.temp;