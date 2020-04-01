<script>
    function showDataWithImages() {

        var oXHR = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP');

        function reportStatus() {
            if (oXHR.readyState == 4)               // Request completed.
                showTheList(this.responseText);     // All set. Now show the data.
        }

        oXHR.onreadystatechange = reportStatus;
        oXHR.open("GET", "../../library/data-with-image.json", true);   // true = asynchronous request, false = synchronous request.
        oXHR.send();

        function showTheList(json) {
            var arrItems = [];
            arrItems = JSON.parse(json); 	// Populate array with JSON data.

            var div = document.getElementById('birds');     // The parent <div>.
            div.innerHTML = '';

            // Loop through data in the JSON array.
            for (i = 0; i <= arrItems.length - 1; i++) {

                // Create two <div> elements, one for the name and the other to show the image.
                var divLeft = document.createElement('div');
                divLeft.innerHTML = arrItems[i].Name;

                var img = document.createElement('img');    // Create an <img> element.
                img.src = arrItems[i].Image;                // The image source from JSON array.

                var divRight = document.createElement('div');
                divRight.setAttribute('style', 'border-left: solid 1px #ddd;');
                divRight.appendChild(img);

                // Add the child DIVs to parent DIV.
                div.appendChild(divLeft);
                div.appendChild(divRight);

                // Note: Instead of <div>, you can also create a dynamic <table> to show the images. 
                // Here's an example ... https://www.encodedna.com/javascript/populate-json-data-to-html-table-using-javascript.htm 
            }
        }
    }
</script>