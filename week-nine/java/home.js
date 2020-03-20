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
     let fullname = `${town.name}<br> "${town.motto}"<br> Year Founded: ${town.yearFounded}<br> Population: ${town.currentPopulation}<br> Annual Rainfall: ${town.averageRainfall}`;

     

     let img = document.createElement('img');
     
   
    

     h2.innerHTML = fullname;
     img.setAttribute('alt', fullname);
     img.setAttribute('src', town.photo);
    
     

     card.appendChild(h2);
     card.appendChild(img);
    
     document.querySelector('.cards').appendChild (card);
   })

   /*Attempting to pull out the 3 towns we need but getting lost*/
  // for (let i<1; i<towns; i++) {
  //document.getElementById(`towns${i+1}`).textContent = towns.fullname.town.name;
   //}

   
 })
g

 