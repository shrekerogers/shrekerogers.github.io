const apiURL = "http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID={b87397c155a761fd7e9876ecc7bd674c}";
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
  });









  document.getElementById('current-temp').textContent = jsObject.main.temp;