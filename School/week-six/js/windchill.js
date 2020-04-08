function doInputOutput () {
    //Can I remove the var from the input?
    var temp = parseFloat (document.getElementById('temp').value);
    var windSpeed = parseFloat (document.getElementById('windSpeed').value);
    //windChill();
    var itsCold = windChill(temp,windSpeed)
    
    var div = document.getElementById ('output');
        div.innerHTML = itsCold;
    }
    
    function windChill (t,v) {
    
    var itFeelsLike = 35.74 + 0.6215 * t -35.75* a + .4275 * t * a;
    var a = Math.pow(v,.16);
    
    
    //I got the formula from www.onlineconversion.com/windchill.htm.  
    //I verified the formula from a few separate sources as well
    
    //var itFeelsLike =___________
    return itFeelslike;
    
    }