document.addEventListener("DOMContentLoaded", function(event) {

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
        
    // ================================================================================================ TEST 2

    function makeData(data) {
        var test = JSON.parse(data);
        var currencies = test.quotes;

        var output = `<select class="selectCurrency test1">`; 

        Object.keys(currencies).forEach(function(key) {
            var keyItem = String(key);
            // var targetCurrency = keyItem.replace(/USD/g,"");
            var targetCurrency = keyItem.substring(3,6);

            output += "<option data-currency=" + targetCurrency + " data-value=" + currencies[key] +">" + targetCurrency + "</td>"; 
        
        });

        output += "</select>"; 
        document.querySelector('.select1').innerHTML = output;
        document.querySelector('.select2').innerHTML = output;

    }

    var btn = document.querySelector(".calculateBtn");

    btn.addEventListener("click", function(e) {
        e.preventDefault();

        var valueInput = document.querySelector(".userMoneyInput").value;
        var valueOutput = document.querySelector(".output");

        var value1 = document.querySelector(".select1").querySelector(':checked').getAttribute('data-value');
        var curr1 = document.querySelector(".select1").querySelector(':checked').getAttribute('data-currency');

        var value2 = document.querySelector(".select2").querySelector(':checked').getAttribute('data-value');
        var curr2 = document.querySelector(".select2").querySelector(':checked').getAttribute('data-currency');
        
        var result = (valueInput / value1) * value2;

        valueOutput.innerText = "You have " + result.toFixed(2);

        console.log(valueInput);
        console.log(result);
        console.log("Value 1 is: " + curr1, value1 + " and value 2: " + curr2, value2);
    })

})

