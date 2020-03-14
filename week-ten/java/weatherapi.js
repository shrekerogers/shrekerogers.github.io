const apiURL = "http://api.openweathermap.org/data/2.5/weatherid=5604473&units=imperial&APPID= {ee1ecbe33adbc9091418e495f826c8ae}";
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    const currentTemp = documemt.querySelector('#current-temp');

    currentTemp.textContent = jsObject.main.temp;


    const imagesrc = `https://openweathermap.org/img/w/' ${jsonObject.weather[0].icon}.png`;  // note the concatenation
    const desc = jsObject.weather[0].description;  // note how we reference the weather array
    document.getElementById('imagesrc').textContent = imagesrc;  // informational specification only
    document.getElementById('icon').setAttribute('src', imagesrc);  // focus on the setAttribute() method
    document.getElementById('icon').setAttribute('alt', desc);

  });









  