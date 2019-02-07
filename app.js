var req = new XMLHttpRequest();
req.open('GET', 'http://www.apilayer.net/api/live?access_key=ba1feed0be86f73c95f876d1e5d94ec0&format=1', true); /* Argument trzeci, wartość true, określa, że żądanie ma być asynchroniczne */
req.onreadystatechange = function (aEvt) {
if (req.readyState == 4) {
    if(req.status == 200)
    // console.log(req.response);
    //  var test = JSON.parse(req.response);
     makeData(req.response);

    
    else
    console.log("Błąd podczas ładowania danych\n");
}
};
req.send(null);

// ================================================================================================ TEST 1

// function makeData(data) {
//     var test = JSON.parse(data);
//     var currencies = test.quotes;
//     console.log(currencies);

//     var output = `<table class="tabelkaWalut"><thead><tr><th>Waluta</th><th>Konwersja</th></tr></thead>`; 

//     Object.keys(currencies).forEach(function(key) {

//         output += "<tr><td>" + key + "</td>"; 
//         output += '<td>' + currencies[key] + '</td></tr>'; 
    
//     });

//     output += "</table>"; 
//     document.querySelector('.content').innerHTML = output;
    
// }
    
// ================================================================================================ TEST 2

function makeData(data) {
    var test = JSON.parse(data);
    var currencies = test.quotes;
    // console.log(currencies);



    var output = `<select class="selectCurrency" id="test">`; 

    Object.keys(currencies).forEach(function(key) {
        var keyItem = String(key);
        var targetCurrency = keyItem.replace(/USD/g,"");

        output += "<option data-value=" + currencies[key] +">" + targetCurrency + "</td>"; 
    
    });

    output += "</select>"; 
    document.querySelector('.content').innerHTML = output;
    
}

function getSelectedValue() {
    var selectedValue = document.getElementById("test").dataset.value;
    console.log(selectedValue);
}

document.addEventListener("DOMContentLoaded", function(event) {

    console.log("DOM został wczytany");
    console.log("Tutaj dopiero wyłapujemy elementy");
    
    var currSelect = document.getElementById("test");
    currSelect.addEventListener("change",getSelectedValue);
});