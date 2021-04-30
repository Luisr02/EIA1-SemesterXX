// Definition der Variablen
var Europe2008 = 4965.7;
var Europe2018 = 4209.3;
var Northamerica2008 = 6600.4;
var Northamerica2018 = 6035.6;
var Southamerica2008 = 1132.6;
var Southamerica2018 = 1261.5;
var Africa2008 = 1028;
var Africa2018 = 1235.5;
var Asia2008 = 12954.7;
var Asia2018 = 16274.1;
var Australia2008 = 1993;
var Australia2018 = 2100.5;
var Europe = "Europe";
var Northamerica = "Northamerica";
var Southamerica = "Southamerica";
var Africa = "Africa";
var Asia = "Asia";
var Australia = "Australia";
var total2018 = Europe2018 + Northamerica2018 + Southamerica2018 + Africa2018 + Asia2018 + Australia2018;
// DOM Manipulation
window.addEventListener("load", function () {
    document.querySelector(".europe").addEventListener('click', function () { myFunction(Europe, Europe2018, Europe2008); });
    document.querySelector(".northamerica").addEventListener('click', function () { myFunction(Northamerica, Northamerica2018, Northamerica2008); });
    document.querySelector(".southamerica").addEventListener('click', function () { myFunction(Southamerica, Southamerica2018, Southamerica2008); });
    document.querySelector(".africa").addEventListener('click', function () { myFunction(Africa, Africa2018, Africa2008); });
    document.querySelector(".asia").addEventListener('click', function () { myFunction(Asia, Asia2018, Asia2008); });
    document.querySelector(".australia").addEventListener('click', function () { myFunction(Australia, Australia2018, Australia2008); });
    // Definition von myFunction    
    function myFunction(continent, continent2018, continent2008) {
        document.querySelector("#titleRegion").innerHTML = continent;
        document.querySelector("#emissionAbsolute").innerHTML = continent2018;
        document.querySelector("#relativeWorld").innerHTML = Math.round(continent2018 / total2018 * 100 * 100) / 100 + "%";
        document.querySelector("#growthRate").innerHTML = Math.round((continent2018 - continent2008) / continent2008 * 100 * 100) / 100 + "%";
        // Auf der Website wird nur die Zahl angezeigt, was ist hier falsch? (absoluteGrowthRate)  
        document.querySelector("#absoluteGrowthRate").innerHTML = (((continent2018 - continent2008) * 100) / 100).toString();
        document.querySelector(".chart").setAttribute("style", "height:" + (continent2018 / total2018) * 100 + "%");
    }
});
//# sourceMappingURL=Aufgabe06Script.js.map