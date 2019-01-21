var req = new XMLHttpRequest();
req.open('GET', 'http://www.apilayer.net/api/live?access_key=ba1feed0be86f73c95f876d1e5d94ec0&format=1', true); /* Argument trzeci, wartość true, określa, że żądanie ma być asynchroniczne */
req.onreadystatechange = function (aEvt) {
if (req.readyState == 4) {
    if(req.status == 200)
    makeData(req.response);
    // console.log(req.response);
    
    else
    console.log("Błąd podczas ładowania danych\n");
}
};
req.send(null);


// TEST =================================================================================
            // Tabela
            var makeData = function(item) {
    
                var data = JSON.parse(item);
                var currencies = data.quotes;
                // var currencies = data['quotes'];
                // var output = `<table class="mainTable"><thead><tr><th>Currency</th><th>Value</th></tr></thead>`; 


                Object.keys(currencies).forEach(function(key) {
                    console.log(key, currencies[key]);

                    // for(var i = 0; i < currencies.length; i++) {
                    //     output += "<tr><td>" + key[i] + "</td>"; 
                    //     output += '<td>' + currencies[key] + '</td></tr>'; 
                    // }

                    // output += "</table>"; 

                    // document.getElementsByClassName('mainTable').innerHTML = output;
                });
              
              }
              
// TEST =================================================================================