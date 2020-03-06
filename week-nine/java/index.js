const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
fetch(requestURL)
 .then(function(response) {
   return response.json();
 })
 .then(function (jsonObject) {
   const prophets = jsonObject['prophets'];
   prophets.forEach(prophet => {
     let card = document.createElement('section');
     let h2 = document.createElement('h2');
     let img = document.createElement('img');

     let fullname = `${town.name} ${prophet.lastname} ${prophet.birthdate} ${prophet.birthplace}` ;
     

     h2.innerHTML = fullname;
     img.setAttribute('src', prophet.imageurl);
     img.setAttribute('alt', fullname)
     

     card.appendChild(h2);
     card.appendChild(img);
    
     document.querySelector('.cards').appendChild (card);
   })
 })


 