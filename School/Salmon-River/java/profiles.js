var output = document.getElementById('output');
var ajaxhttp = new XMLHttpRequest();
var url = "profiles.json";

ajaxhttp.open("GET", url , true);
ajaxhttp.setRequestHeader("content-type", "application/json");
ajaxhttp.onreadystatechange = function(){
    if(ajaxhttp.readyState == 4 && ajaxhttp.status == 200) {

        var jcontent = ajaxhttp.responseText;
        console.log(jcontent);
        console.log(ajaxhttp);
    }
}

ajaxhttp.send(null);











output.innerHTML = "nothing";