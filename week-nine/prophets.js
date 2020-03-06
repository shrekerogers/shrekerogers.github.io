const requestURL = 'https://byui-cit230.github.io/canvas-referenced/latter-day-prophets.json';
fetch(requestURL)
 .then(function(response) {
   return response.json();
 })
 .then(function (jsonObject) {
   const prophets = jsonObject['prophets'];
   prophets.forEach(prophet => {
     let card = document.createElement('section');
     let h2 = document.createElement('h2');

     h2.innerHTML = `${prophet.name} ${prophet.lastname}`;

     card.appendChild(h2);

     document.querySelector('.cards').appendChild (card);
   })
 })


 