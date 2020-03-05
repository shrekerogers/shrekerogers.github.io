const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';

 const prm = fetch(requestURL);
 prm.then(function(response) {
   console.log(response);
 })