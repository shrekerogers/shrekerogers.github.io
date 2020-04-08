const requestURL = 'https://embed.github.com/shrekerogers/shrekerogers.github.io/blob/master/Salmon-River/java/profiles.json';

fetch('https://api.github.com/orgs/nodejs')
 .then(function(response) {
   return response.json();
 })
 .then(function (jsonObject) {
   const profile = jsonObject['profiles'];
   profile.forEach(profile => {
     let profile = document.createElement('section');
     let h2 = document.createElement('h2');
     let img = document.createElement('img');

     let fullname = `${profile.name} ${profile.lastname} ${profile.position}  
     ${profile.birthdate} ${profile.rafting}` ;
     

     h2.innerHTML = fullname;
     img.setAttribute('src', profile.imageurl);
     img.setAttribute('alt', fullname);
     

     profile.appendChild(h2);
     profile.appendChild(img);
    
     document.querySelector('.profile').appendChild (profile);
   });
 });


 