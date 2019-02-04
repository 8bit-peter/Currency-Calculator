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
function makeData(data) {
    var test = JSON.parse(data);
    var currencies = test.quotes;
    console.log(currencies);

    // Object.keys(currencies).forEach(function(key) {

    //     console.log(key, currencies[key]);

    // });

    var output = `<table class="tabelkaWalut"><thead><tr><th>Waluta</th><th>Konwersja</th></tr></thead>`; 

    Object.keys(currencies).forEach(function(key) {

        output += "<tr><td>" + key + "</td>"; 
        output += '<td>' + currencies[key] + '</td></tr>'; 
    
    });

    output += "</table>"; 
    document.querySelector('.content').innerHTML = output;
    
}
              
// TEST =================================================================================