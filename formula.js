var php = window.prompt("Input philippine money: ");
    euro= parseFloat(php) * 0.016;
    hkd = parseFloat(php) * 0.14;
    jpy = parseFloat(php) *  2.44;
    cny = parseFloat(php) * 0.13;
    aed = parseFloat(php) * 0.065;
    cad = parseFloat(php) * 0.018;

    document.getElementById('totaleuro').innerHTML= euro.toFixed(2);
    document.getElementById('totalhkd').innerHTML=  hkd.toFixed(2);
    document.getElementById('totaljpy').innerHTML= jpy.toFixed(2);
    document.getElementById('totalcny').innerHTML= cny.toFixed(2);
    document.getElementById('totalaed').innerHTML= aed.toFixed(2);
    document.getElementById('totalcad').innerHTML= cad.toFixed(2);
    //D☼