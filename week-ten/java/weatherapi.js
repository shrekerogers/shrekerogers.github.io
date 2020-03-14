const apiURL = "http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID={ee1ecbe33adbc9091418e495f826c8ae}";
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
  });









  document.getElementById('current-temp').textContent = jsObject.main.temp;