const apiURL = 'http://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&APPID=ee1ecbe33adbc9091418e495f826c8ae';

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    
   const fivedayforecast = jsObject.list.filter(x => x.dt_text.includes('18:00:00'));
    

    for (let i = 0; i<fivedayforecast.length; i++) {
    document.getElementById(`forecast${i+1}`).textContent = fivedayforecast[i].main.temp;
  }


  });









  