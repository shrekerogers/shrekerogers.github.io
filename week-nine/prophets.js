const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';
fetch(requestURL);
 then(function(response) {
   console.log(response);
   return resposne.json();
 })
 .then(function(jsonObject){
   console.table(jsonObject);
 })


 