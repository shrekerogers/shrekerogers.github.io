const requestURL = 'https://github.com/shrekerogers/shrekerogers.github.io/blob/master/Salmon-River/java/profiles.json';
fetch(requestURL)
 .then(function(response) {
   return response.json();
 })
 .then(function (jsonObject) {
   const prophets = jsonObject['profiles'];
   prophets.forEach(profile => {
     let profile = document.createElement('section');
     let h2 = document.createElement('h2');
     let img = document.createElement('img');

     let fullname = `${profile.name} ${profile.position}  ${profile.birthdate} ${profile.rafting}` ;
     

     h2.innerHTML = fullname;
     img.setAttribute('src', profile.imageurl);
     img.setAttribute('alt', fullname)
     

     profile.appendChild(h2);
     profile.appendChild(img);
    
     document.querySelector('.profile').appendChild (profile);
   })
 })


 