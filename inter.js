



document.addEventListener("DOMContentLoaded", function () {
   
    var x = document.getElementById("od");
    var y = document.getElementById("do");

    function otw(){
var nd=document.querySelector("p.ziel")

        var dzisiaj = new Date();
        var dzien = dzisiaj.getDay();
        if(dzien==0){
            nd.innerText=" Dzisiaj zamknięte, zapraszamy jutro od 17:00";
            nd.style.color= "red";
        }
        if(dzien==6){
            x.innerText="10:00";
            y.innerText="21:00";
        }
        else{
            x.innerText="17:00";
            y.innerText="21:00";
        }
    }



 otw();


















})


