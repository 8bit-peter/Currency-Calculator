var req = new XMLHttpRequest();
req.open('GET', 'http://www.apilayer.net/api/live?access_key=ba1feed0be86f73c95f876d1e5d94ec0&format=1', true); /* Argument trzeci, wartość true, określa, że żądanie ma być asynchroniczne */
req.onreadystatechange = function (aEvt) {
if (req.readyState == 4) {
    if(req.status == 200)
    console.log(req.response);
    
    else
    console.log("Błąd podczas ładowania danych\n");
}
};
req.send(null);

