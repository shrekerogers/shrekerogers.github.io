const requestURL = 'https://byui-cit230.github.io/canvas-referenced/latter-day-prophets.json';
fetch(requestURL)
 .then(function(response) {
   return response.json();
 })
 .then(function (jsonObject) {
   const prophets = jsonObject['prophets'];
   prophets.forEach(prophet => {
     let profile = document.createElement('section');
     let h2 = document.createElement('h2');
     let img = document.createElement('img');

     let fullname = `${prophet.name} ${prophet.lastname}<br> Date Of Birth: ${prophet.birthdate}<br> Place of Birth: ${prophet.birthplace}` ;
     

     h2.innerHTML = fullname;
     img.setAttribute('src', prophet.imageurl);
     img.setAttribute('alt', fullname)
     

     profile.appendChild(h2);
     profile.appendChild(img);
    
     document.querySelector('.profile').appendChild (profile);
   })
 })


 