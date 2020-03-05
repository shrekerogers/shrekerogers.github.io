const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';
fetch(requestURL);
 prm.then(function(response) {
   console.log(response);
   return resposne.json();
 })
 .then(function(jsonObject){
   console.table(jsonObject);
 })


 