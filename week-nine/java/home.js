const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
fetch(requestURL)
 .then(function(response) {
   return response.json();
 })
 .then(function (jsonObject) {
   const towns = jsonObject['towns'];
   towns.forEach(town => {
     let card = document.createElement('section');
     let h2 = document.createElement('h2');
     let img = document.createElement('img');

     let fullname = `${town.name}   ${town.moto} ${town.currentpopulation} ${town.annualrainfall}` ;
     

     h2.innerHTML = fullname;
     img.setAttribute('alt', fullname);
     img.setAttribute('src', town.photo);
    
     

     card.appendChild(h2);
     card.appendChild(img);
    
     document.querySelector('.cards').appendChild (card);
   })
 })


 